import React, { useState, useEffect, useMemo } from "react";
import image1 from "./images/image1.png";
import TypingEffect from "../components/TypingEffect";
//import image2 from './images/image2.jpeg';  // Replace with the actual path to your image
//style={{ backgroundImage: `url('${image2}')` }}
const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const words = useMemo(
    () => [" es sites Web", " es applications mobiles", " es logiciels"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, words[visibleIndex].length * 100 + 2000); // Change every 2 seconds + length of word * 100ms per letter

    return () => clearInterval(interval);
  }, [visibleIndex, words]);
  return (
    <section id="about" className="flex flex-col gap-2 ">
      <h1 className="title flex flex-col lg:flex-row  text-color2 justify-center ">
        <p className="mr-2 font-bold font-Poppins">Soyez Les </p>
        <p className="text-[#0BA2AC] font-bold font-Poppins">Bienvenus</p>
      </h1>
      <div className="flex flex-col pb-8 md:flex-row-reverse justify-center items-center gap-2 lg:gap-8 px-10">
        <div className=" ">
          <img
            className=" rounded-lg "
            src={image1}
            alt=""
            style={{ width: "600px", height: "auto" }}
          />
        </div>
        <section className="">
          <div className="flex flex-col gap-3  ">
            <div className=" xl:px-10 px-1 ">
              <div className=" flex flex-col  items-center text-color2">
                <div className=" mb-5 flex flex-col gap-3 px-2 ">
                  <p className="mr-2 text-2xl font-semibold font-Poppins text-color2">
                    Je suis
                  </p>
                  <div className="flex flex-row ">
                    <p className="text-[#0BA2AC] text-3xl font-bold font-Poppins">
                      ADMANE HOCINE
                    </p>
                    <p className="text-3xl">,</p>{" "}
                  </div>
                  <p className="text-xl font-semibold font-Poppins ">
                    Développeur Full Stack passionné, spécialisé dans la
                    création
                  </p>
                  <p className="text-2xl lg:text-3xl font-semibold font-Poppins">
                    <span className="text-[#0BA2AC] mr-1 font-bold font-Poppins transition-opacity duration-500">
                      d<TypingEffect word={words[visibleIndex]} speed={100} />
                    </span>
                  </p>
                </div>
                <div className="flex justify-center  font-semibold font-Poppins">
                  <a
                    className="  font-bold font-Poppins text-xl text-color6  px-2 py-1 rounded-xl  "
                    href="#contact"
                    style={{
                      background: "linear-gradient(to right, #57C9D1, #0F7880)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(to left, #57C9D1, #0F7880)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(to right, #57C9D1, #0F7880)")
                    }
                  >
                    Contactez-Moi
                  </a>
                </div>
              </div>
            </div>
            {/*Description*/}
          </div>
        </section>
      </div>
      <section className="bg-[#c0edf0] pb-10 pt-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-black lg:text-4xl md:text-4xl mb-2 font-Poppins font-semibold">
            Souhaitez-Vous en savoir plus ?
          </p>
          <a href="https://drive.google.com/file/d/1YuqyAJBfIcdq5jvwmooioEiE92ZS29FQ/view?usp=sharing">
            <p className="with-line2 text-color10 text-2xl font-Poppins font-bold">
              Voir mon CV
            </p>
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
