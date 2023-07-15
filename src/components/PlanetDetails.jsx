import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../../src/components/PlanetContext";

const PlanetDetails = () => {
  const { planets } = useContext(PlanetContext);
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);

  if (!planet) {
    return <div className="container mx-auto">Planet not found</div>;
  }

  const bgImageStyle = {
    backgroundImage: `url(${planet.image})`,
  };

  return (
    <div className="bg-cover bg-center" style={bgImageStyle}>
      <div className="bg-gradient-to-b from-blue-200 to-blue-500 py-8">
        <div className="container mx-auto">
          <div className="box-border h-45 w-45 p-2 border-2">
            <div className="text-center mb-4">
              <h3
                className="text-3xl font-bold mb-4 text-black-500
            hover:text-blue-700"
              >
                {planet.name}
              </h3>
              <p className="font-bold text-black-500 hover:text-blue-700">
                Diameter: {planet.diameter}
              </p>
              <p className="font-bold text-black-500 hover:text-blue-700">
                Rotasion Peroid: {planet.rotation_period}
              </p>
              <p className="font-bold text-black-500 hover:text-blue-700">
                Orbital Peroid: {planet.orbital_period}
              </p>
              <p className="font-bold text-black-500 hover:text-blue-700">
                Gravity : {planet.gravity}
              </p>
              <p className="font-bold text-black-500 hover:text-blue-700">
                Population : {planet.population}
              </p>
              <ul className="font-bold text-black-500 hover:text-blue-700">
                Climates : {planet.climate}
                <li>Terrains : {planet.terrain}</li>
                <li>Surface Water: {planet.surface_water}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
