//Librarys
import React from "react";
import { Routes, Route } from "react-router-dom";

//Routes
import Index from "./routes";
import Services from "./routes/services";
import Articles from "./routes/articles";
import WahtasApp from "./components/index/WhatsApp";
function App() {
  return (
    <React.Fragment>
      <WahtasApp />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
