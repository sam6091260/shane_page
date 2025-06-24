import React from "react";
import { Loader2 } from "lucide-react";
import logo from "../assets/shhh-logo.png"

const Loading = () => {
  return (
    <div className="loading-spinner" style={{ 
      width: "10%", 
      height: "10%",
      margin: "50vh auto"
      
      }}>
      {/* <Loader2 size={80} color="white" /> */}
    <img src={logo} alt="loading" />
    </div>
  );
};

export default Loading;
