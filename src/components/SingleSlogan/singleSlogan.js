import React, { useState } from "react";
import "./singleSlogan.css";

export const Singleslogan = ({ slogan }) => {
  const [single, setSingle] = useState(false);
  return (
    <div
      onClick={() => setSingle(true)}
      className="single-slogan"
      data-tooltip={single ? "Copied!" : "Click to copy"}
    >
      {slogan}
    </div>
  );
};
