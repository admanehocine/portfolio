import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cards_project = ({ filteredItems }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div className="relative  mb-10 px-10   flex justify-center py-10">
      <div className="grid-container">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 items-center justify-center gap-12 shadow-sm">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl bg-color5 border border-color10 h-[200px] w-[300px] mb-1 justify-center items-center relative overflow-hidden group transition ${
                hoveredItemId === item.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`${item.link}`} target="_blank">
                <div className=" mx-auto flex justify-center items-center">
                  <img
                    src={require(`../pages/images/${item.img}`)}
                    alt=""
                    className="mx-auto w-full hover:scale-105 transition-all duration-300 max-h-[100px]   group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full px-4 mb-4">
                <div className="flex flex-row justify-between ">
                  <h4 className="text-lg font-Poppins  text-color6 font-semibold mb-2 ">
                    {item.title}
                  </h4>
                  <p className="text-lg font-Poppins text-color10 font-bold">
                    {item.category}
                  </p>
                </div>

                {hoveredItemId === item.id && (
                  <div className="flex justify-center ">
                    <a
                      className="font-bold font-Poppins text-lg text-white  px-2 py-1 rounded-xl"
                      href={item.link}
                      style={{
                        background:
                          "linear-gradient(to right, #7AD6DD, #0F7880)",
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
                      <p className="flex justify-center items-center">
                        Visiter
                      </p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards_project;
