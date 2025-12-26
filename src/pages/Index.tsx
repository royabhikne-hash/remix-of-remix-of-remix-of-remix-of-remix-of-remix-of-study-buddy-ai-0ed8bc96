import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Landing from "./Landing";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const userType = localStorage.getItem("userType");
    if (userType === "student") {
      navigate("/dashboard");
    } else if (userType === "school") {
      navigate("/school-dashboard");
    }
  }, [navigate]);

  return <Landing />;
};

export default Index;
