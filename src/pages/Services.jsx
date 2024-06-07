import React from "react";
import web_service from "./images/web_service.jpeg";
import web_scraping from "./images/web-scraping.jpeg";
import creation_app from "./images/creation_app.jpeg";
import creation_logiciel from "./images/creation-logiciel.jpeg";

const Services = () => {
  return (
    <section className="items-center px-3" id="services">
      <section>
        <h1 className="title flex flex-row text-color2 justify-center ">
          <p className="mr-2 ">Mes</p>
          <p className="text-color10 ">Services</p>
        </h1>
      </section>
      <div className="flex flex-col md:flex-row xl:flex-row justify-center ">
        {/*service web*/}
        <div
          className="border rounded-xl border-color10 h-[300px] md:w-[300px] xl:w-[300px] lg:w-[300px] w-auto  ml-4 mr-5 mb-5
              justify-center items-center relative overflow-hidden group transition"
        >
          <div className=" flex justify-center items-center   mb-2">
            <h4 className="  font-semibold mb-2 text-color10 font-Poppins text-lg ">
              Création de site Web
            </h4>
          </div>
          <div className=" mx-auto  items-center">
            <img
              src={web_service}
              alt=""
              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[120px]   group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 mb-4">
            <div className="flex flex-row justify-between ">
              <p className="text-color2 font-Poppins text-base font-medium">
                Offrez une présence en ligne exceptionnelle à votre entreprise
                avec mes services de création de site web.
              </p>
            </div>
          </div>
        </div>
        {/*service App*/}
        <div
          className="border rounded-xl border-color10 h-[300px] md:w-[300px] xl:w-[300px] lg:w-[300px] w-auto  ml-4 mr-5
              mb-5 justify-center items-center relative overflow-hidden group transition"
        >
          <div className=" flex justify-center items-center   mb-2">
            <h4 className="font-semibold mb-2 text-color10 font-Poppins text-lg">
              Création d'application mobile
            </h4>
          </div>
          <div className=" mx-auto  items-center">
            <img
              src={creation_app}
              alt=""
              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[120px]   group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 mb-4">
            <div className="flex flex-row justify-between ">
              <p className="text-color2 font-Poppins text-base font-medium">
                Donnez vie à vos idées avec mes services de création
                d'applications mobiles sur mesure.
              </p>
            </div>
          </div>
        </div>
        {/*service Logiciel*/}
        <div
          className="border rounded-xl border-color10 h-[300px] md:w-[300px] xl:w-[300px] lg:w-[300px] w-auto ml-4 mr-5
              mb-5 justify-center items-center relative overflow-hidden group transition"
        >
          <div className=" flex justify-center items-center   mb-2">
            <h4 className="  font-semibold mb-2 text-color10 font-Poppins text-lg">
              Création de logiciels
            </h4>
          </div>
          <div className=" mx-auto  items-center">
            <img
              src={creation_logiciel}
              alt=""
              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[120px]   group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 mb-4">
            <div className="flex flex-row justify-between ">
              <p className="text-color2 font-Poppins text-base font-medium">
                Transformez vos idées en réalité avec nos services de création
                de logiciels sur mesure, adaptés à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
        {/*web scraping*/}
        <div
          className="border rounded-xl border-color10 h-[300px] md:w-[300px] xl:w-[300px] lg:w-[300px] w-auto   ml-4 mr-5
              mb-5 justify-center items-center relative overflow-hidden group transition"
        >
          <div className=" flex justify-center items-center   mb-2">
            <h4 className=" font-semibold mb-2 text-color10 font-Poppins text-lg">
              Web scraping{" "}
            </h4>
          </div>
          <div className=" mx-auto  items-center">
            <img
              src={web_scraping}
              alt=""
              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[120px]   group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 mb-4">
            <div className="flex flex-row justify-between  ">
              <p className="text-color2 font-Poppins text-base font-medium">
                Maximisez la puissance des données avec mon expertise en web
                scraping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
