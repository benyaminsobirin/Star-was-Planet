import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanetProvider from "../src/components/PlanetContext";
import PlanetList from "../src/components/PlanetList";
import PlanetDetails from "../src/components/PlanetDetails";

const App = () => {
  return (
    <Router>
      <PlanetProvider>
        <Routes>
          <Route path="/" element={<PlanetList />} />
          <Route path="/planet/:name" element={<PlanetDetails />} />
        </Routes>
      </PlanetProvider>
    </Router>
  );
};

export default App;
