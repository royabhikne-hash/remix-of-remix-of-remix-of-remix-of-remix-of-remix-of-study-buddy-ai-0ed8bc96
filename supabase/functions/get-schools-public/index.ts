import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type SchoolPublicRow = {
  id: string;
  school_id: string;
  name: string;
  district: string | null;
  state: string | null;
  fee_paid: boolean | null;
  is_banned: boolean | null;
  created_at: string;
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const action = (body?.action as string | undefined) ?? "list";
    const schoolId = (body?.school_id as string | undefined) ?? undefined;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const selectCols = "id, school_id, name, district, state, fee_paid, is_banned, created_at";

    if (action === "by_school_id") {
      if (!schoolId) {
        return new Response(
          JSON.stringify({ error: "school_id is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data, error } = await supabase
        .from("schools")
        .select(selectCols)
        .eq("school_id", schoolId)
        .maybeSingle();

      if (error) {
        console.error("get-schools-public by_school_id error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to load school" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ school: (data as SchoolPublicRow | null) ?? null }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await supabase
      .from("schools")
      .select(selectCols)
      .order("name", { ascending: true });

    if (error) {
      console.error("get-schools-public list error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to load schools" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ schools: (data as SchoolPublicRow[]) ?? [] }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("get-schools-public error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
