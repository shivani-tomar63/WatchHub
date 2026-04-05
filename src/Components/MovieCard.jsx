import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieobj,
  poster_path,
  Name,
  handleaddtoWatchlist,
  handleremoveWatchlist,
  watchlist =[],
}) {
  function doesContain(movieobj) {
    if(!watchlist) return false;
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end  "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => {
            handleremoveWatchlist(movieobj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 hover:scale-80 duration-100 hover:cursor-pointer "
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleaddtoWatchlist(movieobj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 hover:scale-80 duration-100 hover:cursor-pointer "
        >
          &#128525;
        </div>
      )}
      <div className=" text-white flex  w-full text-xl text-center p-2 bg-gray-900/60  ">
        {Name}
      </div>
    </div>
  );
}

export default MovieCard;
//https://api.themoviedb.org/3/tv/popular?api_key=29a553443aec80aa3be1ab341ce8f13d&language=en-US&page=1
