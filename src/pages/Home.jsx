import React from "react";
import Video from "../Components/home/Video";
import Homeherotext from "../Components/home/Homebottomtext"
import Homebottomtext from "../Components/home/Homeherotext"

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>

      <div className="h-screen w-screen relative flex flex-col"> 
      {/* <Homeherotext /> */}
      <Homebottomtext />
      </div>
    </div>
  );
};

export default Home;
