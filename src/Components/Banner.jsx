import React from "react";

function Banner() {
  return (
    <div
      className="h-[25vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1383717.jpg)`,
      }}
    >
        <div className="text-white text-xl w-full text-center bg-gray-900/60  p-4"> avenger end game</div>
    </div>
  );
}

export default Banner;
