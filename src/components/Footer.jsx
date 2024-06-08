import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const currentYear=new Date();//-getFullYear();
  return (
    <footer className="py-2 h-10">
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4  ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between ">
            <a
              href="https://www.facebook.com/profile.php?id=61551771579331&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook className="h-8 w-8 mr-6  text-black px-1 py-1 bg-color11 rounded-3xl hover:bg-color10 cursor-pointer " />
            </a>
            <a
              href="https://github.com/admanehocine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-8 w-8   text-black px-1 py-1 bg-color11 rounded-3xl hover:bg-color10 cursor-pointer " />
            </a>
          </div>
          <a
            href={`#start`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("start");
            }}
          >
            <FaArrowUp className="h-8 w-8 ml-2 mr-2   text-black px-1 py-1 bg-color11  hover:bg-color10 cursor-pointer rounded-3xl" />
          </a>
          <div className="flex flex-row justify-between items-center ">
            <a
              href="https://www.tiktok.com/@developper.fr?_t=8izs4chGSDQ&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-8 w-8 mr-6  text-black px-1 py-1 bg-color11 rounded-3xl hover:bg-color10 cursor-pointer   " />
            </a>
            <a href="https://www.linkedin.com/in/hocine-admane-4375611ab">
              <FaLinkedin className="h-8 w-8  text-black px-1 py-1 bg-color11 rounded-3xl hover:bg-color10 cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
