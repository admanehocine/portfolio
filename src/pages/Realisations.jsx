/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Cards_project from "../components/Cards_project";

const Realisations = () => {
  const [project, setProject] = useState([]);
  const [filteredproject, setFilteredproject] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous"); // Nouvel état

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
        const data = await response.json();
        setProject(data);
        setFilteredproject(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const filterItems = (category) => {
    const filtered =
      category === "Tous"
        ? project
        : project.filter((item) => item.category === category);
    setFilteredproject(filtered);
    setSelectedCategory(category);
    //setSelectedCategory(category);
  };
  return (
    <section>
      <div className="w-full" id="realisation">
        <section>
          <h1 className="title flex flex-col lg:flex-row text-color2 justify-center lg:gap-1 gap-4">
            <div className="flex flex-row justify-center">
              <p className="mr-2">Les</p>
              <p className="text-color10 mr-2"> Projets</p>
            </div>
            <p className="mr-2 ">Réalisés</p>
          </h1>
        </section>
        <section>
          <div className="">
            <div className="flex flex-row justify-center items-center  py-2">
              <p
                className={`text-xl font-semibold mr-5  font-Poppins   my-3 cursor-pointer ${
                  selectedCategory === "Tous"
                    ? "bg-color10 text-white rounded-lg px-3 py-1"
                    : ""
                }`}
                onClick={() => filterItems("Tous")}
              >
                Tous
              </p>
              <p
                className={`text-xl font-semibold  mr-5  font-Poppins    my-3 cursor-pointer ${
                  selectedCategory === "Web"
                    ? "bg-color10 text-white rounded-lg px-3 py-1 "
                    : ""
                }`}
                onClick={() => filterItems("Web")}
              >
                Web
              </p>
              <p
                className={`text-xl font-semibold mr-5  font-Poppins  my-3 cursor-pointer ${
                  selectedCategory === "App"
                    ? "bg-color10 text-white rounded-lg px-3 py-1"
                    : ""
                }`}
                onClick={() => filterItems("App")}
              >
                App
              </p>
            </div>
            <Cards_project filteredItems={filteredproject} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Realisations;
