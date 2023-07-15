import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        setPlanets(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    const results = planets.filter((planet) =>
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, planets]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <PlanetContext.Provider
      value={{
        planets,
        searchTerm,
        searchResults,
        handleSearch,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetProvider;
