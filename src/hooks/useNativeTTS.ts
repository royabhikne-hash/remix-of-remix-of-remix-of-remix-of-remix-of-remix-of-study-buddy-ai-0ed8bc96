import { useCallback, useEffect, useState, useRef } from 'react';

interface TTSOptions {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

/**
 * Robust Web Speech API TTS hook with proper promise handling
 * and voice loading for Hindi/Indian English support
 */
export const useNativeTTS = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('TTS: speechSynthesis not supported');
      return;
    }

    setIsSupported(true);
    
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log('TTS: Loaded', voices.length, 'voices');
      if (voices.length > 0) {
        setAvailableVoices(voices);
      }
    };
    
    // Try to load voices immediately
    loadVoices();
    
    // Also listen for voiceschanged event (Chrome needs this)
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    // Cleanup any pending speech on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const sanitizeText = useCallback((text: string): string => {
    return text
      // Remove emojis
      .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
      .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')
      .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')
      .replace(/[\u{2600}-\u{26FF}]/gu, '')
      .replace(/[\u{2700}-\u{27BF}]/gu, '')
      .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')
      .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '')
      // Remove markdown formatting
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/#{1,6}\s/g, '')
      // Clean up whitespace
      .replace(/\n+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  const getBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    // Get fresh voices list (in case they weren't loaded initially)
    const voices = availableVoices.length > 0 
      ? availableVoices 
      : window.speechSynthesis.getVoices();
    
    if (voices.length === 0) {
      console.log('TTS: No voices available');
      return null;
    }

    // Log all available voices for debugging
    console.log('TTS: Available voices:', voices.map(v => `${v.name} (${v.lang})`).join(', '));

    // Priority order - HINDI FIRST!
    // 1. Look for specific Hindi male voices (preferred for study buddy)
    const hindiMaleNames = ['Madhur', 'Hemant', 'Prabhat', 'Hindi India Male', 'Google हिन्दी', 'Microsoft Madhur'];
    const hindiMaleVoice = voices.find(v => 
      v.lang === 'hi-IN' && hindiMaleNames.some(name => v.name.toLowerCase().includes(name.toLowerCase()))
    );
    if (hindiMaleVoice) {
      console.log('TTS: Using Hindi male voice:', hindiMaleVoice.name);
      return hindiMaleVoice;
    }

    // 2. Any Hindi voice (hi-IN)
    const hindiVoice = voices.find(v => v.lang === 'hi-IN');
    if (hindiVoice) {
      console.log('TTS: Using Hindi voice:', hindiVoice.name);
      return hindiVoice;
    }

    // 3. Hindi voice with different locale codes
    const hindiAnyLocale = voices.find(v => v.lang.startsWith('hi'));
    if (hindiAnyLocale) {
      console.log('TTS: Using Hindi (any locale) voice:', hindiAnyLocale.name);
      return hindiAnyLocale;
    }
    
    // 4. Indian English as fallback
    const indianEnglish = voices.find(v => v.lang === 'en-IN');
    if (indianEnglish) {
      console.log('TTS: Using Indian English voice:', indianEnglish.name);
      return indianEnglish;
    }
    
    // 5. Any English voice (last resort)
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      console.log('TTS: Fallback to English voice:', englishVoice.name);
      return englishVoice;
    }
    
    // 6. Default to first available voice
    console.log('TTS: Using default voice:', voices[0]?.name);
    return voices[0] || null;
  }, [availableVoices]);

  const speak = useCallback((options: TTSOptions): Promise<void> => {
    const { text, rate = 0.9, pitch = 1.0, volume = 1.0 } = options;
    
    return new Promise((resolve, reject) => {
      if (!isSupported) {
        console.log('TTS: Not supported');
        resolve();
        return;
      }

      const cleanText = sanitizeText(text);
      if (!cleanText) {
        console.log('TTS: No text to speak after sanitization');
        resolve();
        return;
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Small delay to ensure cancel completes
      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utteranceRef.current = utterance;
          
          const voice = getBestVoice();
          if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang;
          } else {
            // Fallback lang setting
            utterance.lang = 'hi-IN';
          }
          
          utterance.rate = Math.max(0.1, Math.min(10, rate));
          utterance.pitch = Math.max(0, Math.min(2, pitch));
          utterance.volume = Math.max(0, Math.min(1, volume));

          utterance.onstart = () => {
            console.log('TTS: Started speaking');
            setIsSpeaking(true);
          };

          utterance.onend = () => {
            console.log('TTS: Finished speaking');
            setIsSpeaking(false);
            utteranceRef.current = null;
            resolve();
          };

          utterance.onerror = (event) => {
            console.error('TTS: Error speaking:', event.error);
            setIsSpeaking(false);
            utteranceRef.current = null;
            // Resolve instead of reject to prevent unhandled errors
            resolve();
          };

          // Actually speak
          setIsSpeaking(true);
          window.speechSynthesis.speak(utterance);
          
          // Chrome bug workaround: resume speech synthesis if paused
          // This fixes the issue where speech stops after ~15 seconds
          const resumeInterval = setInterval(() => {
            if (!window.speechSynthesis.speaking) {
              clearInterval(resumeInterval);
              return;
            }
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }, 10000);

          // Clear interval when speech ends
          utterance.onend = () => {
            clearInterval(resumeInterval);
            console.log('TTS: Finished speaking');
            setIsSpeaking(false);
            utteranceRef.current = null;
            resolve();
          };

          utterance.onerror = (event) => {
            clearInterval(resumeInterval);
            console.error('TTS: Error speaking:', event.error);
            setIsSpeaking(false);
            utteranceRef.current = null;
            resolve();
          };

        } catch (error) {
          console.error('TTS: Exception during speak:', error);
          setIsSpeaking(false);
          resolve();
        }
      }, 50);
    });
  }, [isSupported, sanitizeText, getBestVoice]);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setIsSpeaking(false);
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
    isNative: false,
    availableVoices,
    sanitizeText,
  };
};

export default useNativeTTS;
