import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="loading-spinner" style={{ width: "100%", height: "100%" }}>
      <Loader2 size={80} color="white" />
    </div>
  );
};

export default Loading;
