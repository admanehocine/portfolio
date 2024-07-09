import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const navItems = [
    { title: "À PROPOS", path: "about" },
    { title: "SERVICES", path: "services" },
    { title: "RÉALISATIONS", path: "realisation" },
    { title: "TECHNOLOGIES", path: "technologie" },
    //{ title: "CONTACT", path: "#contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };
  useEffect(() => {
    // Exécuté lorsque le composant est démonté
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <header className="h-12  xl:px-20 px-1  w-full  text-color2  " id="start">
      {/*navbar cas largue ecran*/}
      <nav className="flex justify-between items-center container pb-4 pt-1">
        {/*navbar for sm devices*/}
        <a href="/" duration={500}>
          <p className="with-line hover:text-color10 mr-5 font-bold font-Poppins text-xl ">
            ACCUEIL
          </p>
        </a>
        {/*navbar category items under line*/}
        <div className=" flex flex-row justify-between items-center ">
          <ul className="lg:flex items-center justify-between text-color2 hidden ">
            {navItems.map(({ title, path }) => (
              <li key={title} className="with-line hover:text-color10  mr-5  ">
                <a
                  className="font-bold font-Poppins text-lg"
                  href={`#${path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(path);
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="hidden lg:flex font-bold font-Poppins text-lg text-white  px-2 py-1 rounded-xl "
            href={`#contact`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
            style={{
              background: "linear-gradient(to right, #7AD6DD, #0F7880)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to left, #7AD6DD, #0F7880)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #7AD6DD, #0F7880)")
            }
          >
            CONTACT
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay menu */}
      {isMenuOpen && (
        // ...
        <div
          className={`fixed top-0 left-0 w-full h-full  bg-white z-10 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={closeMenu}
        >
          {/* Menu content */}
          <div className="flex flex-row justify-between items-center pr-4 pt-2">
            <p className=""></p>
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-black" />
              ) : (
                <FaBars className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          <div
            className={`flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-color6 bg-white px-4 py-2 rounded  flex justify-center flex-col">
              <a
                href="/"
                onClick={closeMenu}
                className="text-4xl mx-3 my-3 font-bold font-Poppins"
              >
                ACCUEIL
              </a>
              {/* Contenu du menu */}
              {navItems.map(({ title, path }) => (
                <p
                  key={title}
                  className="hover:text-color10 my-3 mx-3 cursor-pointer with-line"
                >
                  <a
                    href={"#" + path}
                    onClick={closeMenu}
                    className="text-4xl mt-10 font-bold font-Poppins "
                  >
                    {title}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
        // ...
      )}
    </header>
  );
};

export default Navbar;
