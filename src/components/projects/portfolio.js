import React from "react";
import AaBase from "./aaBase.js";

export default function Portfolio() {
  return (
    <div>
      <AaBase
        title="Portfolio Website"
        description=" A simple portfolio designed using React & Tailwindcss."
        tools={["react", "tailwindcss", "nodejs"]}
        image="portfolio.png"
        site="https://mohsen-s4i0.onrender.com/"
      />
    </div>
  );
}
