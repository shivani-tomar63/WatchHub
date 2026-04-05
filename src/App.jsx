import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import Banner from "./Components/Banner";
import { Routes, Route } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchiList] = useState([]);
  let handleaddtoWatchlist = (movieobj) => {
    let newWatchList = [...watchlist, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchiList(newWatchList);
    console.log(newWatchList);
  };
  let handleremoveWatchlist = (movieobj) => {
    let filterWatchlist = watchlist.filter((movie) => {
      return movie.id != movieobj.id;
    });
    setWatchiList(filterWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchlist));
  };
  useEffect(() => {
    let moviesFromeLocalStroge = localStorage.getItem("moviesApp");
    if (moviesFromeLocalStroge) {
      setWatchiList(JSON.parse(moviesFromeLocalStroge));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />{" "}
              <Movies
                watchlist={watchlist}
                handleaddtoWatchlist={handleaddtoWatchlist}
                handleremoveWatchlist={handleremoveWatchlist}
              />
            </>
          }
        />
        <Route
          path="/WatchList"
          element={
            <WatchList
              watchlist={watchlist}
              setWatchiList={setWatchiList}
              handleremoveWatchlist={handleremoveWatchlist}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
