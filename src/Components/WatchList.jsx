import React, { useEffect, useState } from "react";
import genreids from "../Utility/Genres";
function WatchList({ watchlist, setWatchiList ,handleremoveWatchlist}) {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList] = useState(["All genres"]);
  const [curgenre, setCurrgenre] = useState("All Genres");
  let hnadleSearch = (e) => {
    setSearch(e.target.value);
  };
  let handleFilter = (genre) => {
    setCurrgenre(genre);
  };
  let sortIncreasing = () => {
    let sortedI = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchiList([...sortedI]);
  };
  let sortDecreaising = () => {
    let sortedD = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchiList([...sortedD]);
  };
  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genreids[movieobj.genre_ids[0]];
    })
    temp= new Set(temp)
    setgenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-row  justify-center  gap-10">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                curgenre == genre
                  ? " flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                  : " flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4" >
                    { genre }
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4 ">
        <input
          onChange={hnadleSearch}
          value={search}
          type="text"
          placeholder="seach movies"
          className="h-[3rem] w-[18rem] bg-gray-400 outline-none px-4 font-bold text-center"
        />
      </div>
      <div className=" overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className=" flex justify-center">
                <div onClick={sortIncreasing} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreaising} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(curgenre=="All Genres"){
                return true}else{
                  return genreids[movieObj.genre_ids[0]]== curgenre;
                }
            })
              .filter((movieobj) => {
                console.log(movieobj);
                if (search === "") return true;
                return (movieobj.name || movieobj.title || "")
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex iteam-center py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                      />
                      <div className="mx-4">{movieobj.name}</div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreids[movieobj.genre_ids[0]]}</td>
                    <td onClick={()=>handleremoveWatchlist(movieobj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
