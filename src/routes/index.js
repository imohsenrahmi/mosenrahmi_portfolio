import React from "react";

import Welcome from "../components/index/Welcome";
import Profile from "../components/index/Profile.js";
import Projects from "../components/index/Projects.js";
import Navbar from "../components/index/Navbar";
import Skills from "../components/index/Skills";

function Index() {
  const data = [
    { name: "html", value: 80 },
    { name: "css", value: 60 },
    { name: "Java script", value: 50 },
    { name: "React.js", value: 60 },
    { name: "vue.js", value: 30 },
    { name: "Responsive Design", value: 80 },
    { name: "Design Framework", value: 80 },
    { name: "git", value: 10 },
  ];
  return (
    <div className="App bg-none">
      <Navbar />
      <Welcome />
      <Profile />
      <Skills value={data} />
      <Projects />
      <p className="footerWarning text-gray-500 bg-gray-900 text-center">
        --- توسعه و طراحی توسط محسن رحمی سال 1400 ---
      </p>
    </div>
  );
}

export default Index;
