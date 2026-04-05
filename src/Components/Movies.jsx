import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import WatchList from "./WatchList";

function Movies({ handleaddtoWatchlist, handleremoveWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=29a553443aec80aa3be1ab341ce8f13d&language=en-US&page=${pageNo}`,
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-center font-bold text-2xl m-5">Trading movies</div>
      <div className=" flex flex-row flex-wrap justify-around  gap-6">
        {movies.map((movieobj) => {
          return (
            <MovieCard
              key={movieobj.id}
              movieobj={movieobj}
              poster_path={movieobj.poster_path}
              Name={movieobj.name}
              handleaddtoWatchlist={handleaddtoWatchlist}
              handleremoveWatchlist={handleremoveWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNO={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
//https://api.themoviedb.org/3/tv/popular?api_key=29a553443aec80aa3be1ab341ce8f13d&language=en-US&page=1
