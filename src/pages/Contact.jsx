import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [response_email, setResponse_email] = useState("");
  const [etat_email, setEtat_email] = useState("null");

  // Handler for form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: `${name} ${prenom}`,
      to_email: "admanehocine98@gmail.com",
      message,
    };

    emailjs
      .send(
        "service_rh8t7hi",
        "template_pcbyw5t",
        templateParams,
        "Pllb_5n_Ghs2pzKIW"
      )
      .then((response) => {
        setEtat_email("yes");
        setResponse_email("E-mail envoyé avec succès");
        console.log("E-mail envoyé avec succès", response);
      })
      .catch((error) => {
        setEtat_email("no");
        setResponse_email("Erreur lors de l'envoi de l'e-mail");
        console.error("Erreur lors de l'envoi de l'e-mail", error);
      });
    setName("");
    setMessage("");
    setPrenom("");
    setMail("");
  };
  return (
    <section id="contact" className="bg-[#c0edf0] w-full">
      <div className="py-2 pt-10 flex flex-col  justify-center items-center lg:flex-row">
        <p className="text-2xl lg:text-4xl md:text-4xl font-semibold  text-black mb-5 mr-1">
          {" "}
          Souhaitez-vous me contacter ?
        </p>
        <p className="text-2xl lg:text-4xl md:text-4xl font-semibold  text-black mb-5">
          C'est ici que ça se passe !
        </p>
      </div>
      <div className="py-2 xl:px-20 px-1 ">
        <div className="py-2 flex flex-col md:flex-row justify-between items-center gap-14  ">
          <div className="md:w-1/2 border border-black rounded-lg bg-white">
            <div className="flex flex-col justify-center items-center">
              {" "}
              {/* Utilisez items-start ici */}
              <p className="text-3xl font-semibold mb-4 text-color6 font-Poppins ">
                Contact Info
              </p>
              <div className="flex flex-col justify-center items-start py-2">
                {" "}
                {/* Utilisez items-start ici */}
                {/* ... Vos divs existantes ... */}
                {/*Name */}
                <div className="flex flex-row justify-between items-center py-4 text-color6 font-Poppins">
                  {" "}
                  {/* Utilisez items-start ici */}
                  <IoIosContact className="h-7 w-7 mr-2" />
                  <p className="justify-start mr-2 font-semibold pb-2">
                    ADMANE HOCINE
                    <span className="block font-normal">
                      Développeur Full Stack
                    </span>
                  </p>
                </div>
                {/*Localisation*/}
                <div className="flex flex-row justify-between items-center py-4 text-color6 font-Poppins">
                  {" "}
                  {/* Utilisez items-start ici */}
                  <FaMapMarkerAlt className="h-7 w-7 mr-2 " />
                  <p className="justify-start mr-2 font-semibold pb-2 ">
                    Localisation
                    <span className="block font-normal">
                      69400, Villefranche-sur-Saône
                    </span>
                  </p>
                </div>
                {/*Tél*/}
                <div className="flex flex-row justify-between items-center py-4 text-color6 font-Poppins">
                  {" "}
                  {/* Utilisez items-start ici */}
                  <FaPhoneAlt className="h-7 w-7 mr-2" />
                  <p className="justify-start mr-2 font-semibold pb-2">
                    Tél
                    <span className="block font-normal">
                      (+33)7 44 22 13 83
                    </span>
                  </p>
                </div>
                {/*Email*/}
                <div className="flex flex-row justify-between items-center py-4 text-color6 font-Poppins">
                  {" "}
                  {/* Utilisez items-start ici */}
                  <MdEmail className="h-7 w-7 mr-2" />
                  <p className="justify-start mr-2 font-semibold pb-2">
                    Email
                    <span className="block font-normal">
                      admanehocine98@gmail.com
                    </span>
                  </p>
                </div>
                {/* ... */}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 ">
            <div className="flex flex-col justify-center items-center  py-2">
              <p className="text-3xl font-semibold mb-4 text-color6 font-Poppins">
                Contactez-Moi
              </p>

              <form action="#" onSubmit={handleSubmit} className="py-1">
                {/*NAME*/}
                {/*PRENOM*/}
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <input
                    type="text"
                    value={name}
                    placeholder="Nom"
                    className="border border-gray-400  px-2 rounded-lg h-10  text-color6 "
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    value={prenom}
                    placeholder="Prénom"
                    className="border border-gray-400   px-2 rounded-lg h-10 text-color6"
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                  />
                </div>
                {/*ADRESSE MAIL*/}
                <div className="grid grid-cols-1 mt-4 mb-5">
                  <input
                    type="email"
                    value={mail}
                    placeholder="Adresse mail"
                    className="border border-gray-400   px-2 rounded-lg h-10 text-color6"
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </div>
                {/*MESSAGE*/}
                <div className="grid grid-cols-1 mt-4 mb-5">
                  <textarea
                    value={message}
                    placeholder="Décrivez votre projet, votre besoin, vos impératifs de planning, vos objectifs… !"
                    className="border border-gray-400   px-2 rounded-lg h-40 text-color6"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {/*BUTTON VALIDER*/}
                <div className=" flex flex-row justify-center items-center mt-9 mb-5">
                  <button
                    className=" lg:flex font-bold font-Poppins text-lg text-color6 px-4 py-1 rounded-xl "
                    type="submit"
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
                    Envoyer
                  </button>
                </div>
                {}
                <div>
                  <p
                    className={` flex  justify-center h-10 text-xl font-normal rounded-lg text-black mr-2 my-3 items-center   ${
                      etat_email === "yes"
                        ? " bg-green-300"
                        : etat_email === "no"
                        ? "bg-red-400"
                        : "hidden"
                    }`}
                  >
                    {response_email}
                  </p>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
