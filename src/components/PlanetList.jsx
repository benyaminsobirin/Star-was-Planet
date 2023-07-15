import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlanetContext } from "../../src/components/PlanetContext";

const Navbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Starwars Planet Official
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search planets..."
            value={searchTerm}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

const PlanetList = () => {
  const { searchResults, handleSearch } = useContext(PlanetContext);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-500 py-8">
      <div className="container mx-auto py-8">
        <Navbar handleSearch={handleSearch} />
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-4">Planets</h1>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((planet) => (
            <li key={planet.name}>
              <Link
                to={`/planet/${planet.name}`}
                key={planet.name}
                className="block bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg"
                style={{ backgroundImage: `url(${planet.image})` }}
              >
                <h2 className="text-xl font-bold mb-2 h-16 overflow-hidden truncate">
                  {planet.name}
                </h2>
                {/* Tambahkan informasi lain yang diinginkan */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetList;
