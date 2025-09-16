import React from "react";
import Video from "./Video";

const HomeHerotext = () => {
  return (
    <div className="font-[font2] pt-2 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">
        THE SPARK
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">
        WHO{" "}
        <div className="h-[13vh] w-[15vw] rounded-full -mt-3 overflow-hidden">
          {" "}
          <Video />{" "}
        </div>
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">
        GENRATES
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">
        THERE
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">
        CREATIVITY
      </div>
    </div>
  );
};

export default HomeHerotext;
