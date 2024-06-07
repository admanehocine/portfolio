import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Technologie = () => {
  const TechBack = [
    { title: "JAVA", path: "java.png", etat: "maitriser" },
    { title: "Kotlin", path: "kotlin.png", etat: "apprentissage" },
    { title: "Dart", path: "dart.png", etat: "maitriser" },
    { title: "JS", path: "js.png", etat: "maitriser" },
    { title: "PYTHON", path: "python.png", etat: "maitriser" },
    { title: "PHP", path: "php.png", etat: "maitriser" },
    { title: "NODE.JS", path: "nodejs.png", etat: "maitriser" },
    {
      title: "JAVA SPRING BOOT",
      path: "javaspringboot.png",
      etat: "maitriser",
    },
    { title: "JAVAFX", path: "javafx.png", etat: "maitriser" },
    { title: "JAVA SWING", path: "javaswing.png", etat: "maitriser" },
    { title: "PYQT", path: "pyqt.png", etat: "apprentissage" },
    { title: "PostgreSql", path: "postgress.png", etat: "maitriser" },
    { title: "MYSQL", path: "mysql.png", etat: "maitriser" },
    { title: "SQL Server", path: "sqlserver.png", etat: "maitriser" },
    { title: "Hibernate", path: "hibernate.png", etat: "maitriser" },
    { title: "Docker", path: "docker.png", etat: "maitriser" },
    { title: "Firebase", path: "firebase.png", etat: "maitriser" },
    { title: "Flask", path: "flask.png", etat: "maitriser" },
  ];
  const TechFront = [
    { title: "HTML5", path: "html5.png", etat: "maitriser" },
    { title: "CSS3", path: "css3.png", etat: "maitriser" },
    { title: "Flutter", path: "flutter.png", etat: "maitriser" },
    { title: "React.JS", path: "reactjs.png", etat: "maitriser" },
    { title: "Bootstrap5", path: "bootstrap5.png", etat: "maitriser" },
    { title: "Angular", path: "angular.png", etat: "apprentissage" },
    { title: "Tailwind CSS", path: "tailwind.png", etat: "maitriser" },
    { title: "FIGMA", path: "figma.png", etat: "apprentissage" },
    {
      title: "Adobe Illustrator",
      path: "adobillustrator.png",
      etat: "apprentissage",
    },
  ];
  const Outils_rtl = [
    {
      title: "Eclipse",
      path: "eclipse.png",
      link: "https://www.eclipse.org/downloads/",
    },
    {
      title: "Intellij",
      path: "intillij.png",
      link: "https://www.jetbrains.com/fr-fr/idea/",
    },
    {
      title: "XAMPP",
      path: "xampp.png",
      link: "https://www.apachefriends.org/fr/index.html",
    },
    { title: "ChatGPT", path: "chatgtp.png", link: "https://chat.openai.com/" },
    {
      title: "Stack Overflow",
      path: "stackoverflow.jpeg",
      link: "https://chat.openai.com/",
    },
  ];
  const Outils_ltr = [
    {
      title: "VS Code",
      path: "vscode.png",
      link: "https://code.visualstudio.com/",
    },
    { title: "Git", path: "git.png", link: "https://git-scm.com/" },
    { title: "Github", path: "github.png", link: "https://github.com/" },
    {
      title: "Phpstorm",
      path: "phpstorm.png",
      link: "https://www.jetbrains.com/fr-fr/phpstorm/",
    },
    {
      title: "Netbeans",
      path: "netbeans.png",
      link: "https://netbeans.apache.org/front/main/",
    },
  ];
  const settings_rtl = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    rtl: true,
  };
  const settings_ltr = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    rtl: false,
  };

  return (
    <section>
      <div
        className="max-w-screen-2xl container mx-auto xl:px-28 px-4"
        id="technologie"
      >
        {/*Détails*/}
        <div className="py-2 xl:px-2 px-1">
          <div className="py-4 flex flex-col lg:flex-row  justify-between items-center gap-14">
            {/*front end technologie */}
            <div className=" lg:w-[500px] lg:h-[900px]  w-full h-full border border-color10 rounded-lg">
              <div className="flex flex-col">
                <p className="text-2xl  text-color2 justify-center items-center flex font-extrabold py-4 font-Poppins">
                  Front-end
                </p>
                <div className="flex flex-col">
                  {/*Maitrisé  front end*/}
                  <p className="lg:text-2xl justify-center text-color2 items-start flex font-extrabold py-4 px-4 font-Poppins">
                    Langages / Technos maitrisés
                  </p>
                  <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-4 shadow-sm mr-3 ml-3 mt-3 mb-3">
                    {TechFront.filter((item) => item.etat === "maitriser").map(
                      (item) => (
                        <div
                          key={item.title}
                          className="border bg-white border-color10  h-[80px] rounded-xl justify-center items-center relative overflow-hidden group "
                        >
                          <div className="w-full h-full mx-auto flex justify-center items-center">
                            <img
                              src={require(`../pages/images_langage/${item.path}`)}
                              alt=""
                              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[70px] max-w-[70px]   group-hover:scale-110"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/*en apprentissage  front end*/}
                <div className="flex flex-col">
                  <p className="lg:text-2xl justify-center text-color2 items-start flex font-extrabold py-4 px-4 font-Poppins">
                    En apprentissage
                  </p>
                  <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-4 shadow-sm mr-3 ml-3 mt-3 mb-3">
                    {TechFront.filter(
                      (item) => item.etat === "apprentissage"
                    ).map((item) => (
                      <div
                        key={item.title}
                        className="border bg-white border-color10 h-[80px] rounded-xl justify-center items-center relative overflow-hidden group "
                      >
                        <div className="w-full h-full mx-auto flex justify-center items-center">
                          <img
                            src={require(`../pages/images_langage/${item.path}`)}
                            alt=""
                            className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[70px] max-w-[70px]   group-hover:scale-110"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*back end technologie */}
            <div className="lg:w-[500px] lg:h-[900px] w-full h-full border border-color10 rounded-lg">
              <div className="flex flex-col">
                <p className="text-2xl justify-center text-color2  font-Poppins items-center flex font-extrabold py-4">
                  Back-end
                </p>
                {/*Maitrisé  back end*/}
                <div className="flex flex-col">
                  <p className="lg:text-2xl justify-center items-start font-Poppins flex font-extrabold py-4 px-4 text-color2 ">
                    Langages / Technos maitrisés
                  </p>
                  <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-4 shadow-sm mr-3 ml-3 mt-3 mb-3">
                    {TechBack.filter((item) => item.etat === "maitriser").map(
                      (item) => (
                        <div
                          key={item.title}
                          className="border border-color10 bg-white h-[80px] rounded-xl justify-center items-center relative overflow-hidden group "
                        >
                          <div className="w-full h-full mx-auto flex justify-center items-center">
                            <img
                              src={require(`../pages/images_langage/${item.path}`)}
                              alt=""
                              className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[70px] max-w-[70px]   group-hover:scale-110"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/*en apprentissage  back end*/}
                <div className="flex flex-col">
                  <p className="lg:text-2xl justify-center text-color2  font-Poppins items-start flex font-extrabold py-4 px-4">
                    En apprentissage
                  </p>
                  <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-4 shadow-sm mr-3 ml-3 mt-3 mb-3">
                    {TechBack.filter(
                      (item) => item.etat === "apprentissage"
                    ).map((item) => (
                      <div
                        key={item.title}
                        className="border border-color10 bg-white h-[80px] rounded-xl justify-center items-center relative overflow-hidden group "
                      >
                        <div className="w-full h-full mx-auto flex justify-center items-center">
                          <img
                            src={require(`../pages/images_langage/${item.path}`)}
                            alt=""
                            className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[70px] max-w-[70px]   group-hover:scale-110"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#c0edf0] px-10 flex justify-center w-full  ">
        <div className="flex flex-col container px-4 py-2 w-full lg:w-1/2">
          <div className="flex flex-col">
            <p className="lg:text-2xl justify-center text-black font-Poppins  items-start flex font-extrabold py-4 px-4">
              Les Outils Utilisés
            </p>
            <Slider {...settings_rtl} className="mt-3 ml-2 mr-2">
              {Outils_rtl.map((item) => (
                <div
                  key={item.title}
                  className="   border bg-white border-color10 h-[100px] w-[90px]  
                                  rounded-xl justify-between items-center relative overflow-hidden group "
                >
                  <div
                    className="w-full h-full mx-auto   
                                    flex  items-center  flex-col justify-between"
                  >
                    <img
                      src={require(`../pages/images_langage/${item.path}`)}
                      alt=""
                      className="mt-3 mx-auto   hover:scale-105
                                         transition-all duration-300 max-h-[60px] max-w-[70px]  
                                          group-hover:scale-110  "
                    />
                    <p className="mb-3 font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
            {/*slider ltr*/}
            <Slider {...settings_ltr} className="mt-3 ml-2 mr-2">
              {Outils_ltr.map((item) => (
                <div
                  key={item.title}
                  className="   border bg-white border-color10 h-[100px] w-[90px]  
                                  rounded-xl justify-between items-center relative overflow-hidden group "
                >
                  <div
                    className="w-full h-full mx-auto  
                                    flex  items-center  flex-col justify-between"
                  >
                    <img
                      src={require(`../pages/images_langage/${item.path}`)}
                      alt=""
                      className="mt-3 mx-auto  margin hover:scale-105
                                         transition-all duration-300 max-h-[60px] max-w-[70px]  
                                          group-hover:scale-110  "
                    />
                    <p className="mb-3 font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Technologie;
