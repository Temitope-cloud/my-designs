"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { useIsMobile } from "@/lib/screenSize";

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Herosection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const isMobile = useIsMobile();
  console.log(isMobile);
  useEffect(() => {
    axios.get(`http://localhost:3001/movies`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  return (
    <>
      <div className="">
        <div className="relative">
          {movies.slice(0, 1).map((m) => (
            <div key={m.id} className="h-screen">
              <Navbar className="absolute top-0 z-20 w-full" />
              <div className="to-transparemt absolute top-0 z-10 h-screen w-full overflow-x-hidden bg-gradient-to-t from-slate-900 backdrop-blur-[3px]"></div>
              <div
                className={`absolute top-52 ${isMobile ? "left-5" : "left-20"} z-20 w-[70%] transition-all duration-300`}
              >
                <p className="text-5xl font-bold uppercase"> {m.title} </p>
                <p className="line-clamp-5"> {m.description} </p>
                <div className="mt-3 flex items-center gap-3">
                  <button className="flex cursor-pointer items-center gap-2 rounded-sm bg-slate-800 px-4 py-2 transition-all duration-300 hover:bg-slate-700">
                    Watch Now <i className="bx bx-play-circle"></i>{" "}
                  </button>
                  <button className="flex cursor-pointer items-center gap-2 rounded-sm border border-gray-100 px-4 py-2 transition-all duration-300 hover:bg-slate-700">
                    Add to list <i className="bx bx-plus"></i>{" "}
                  </button>
                </div>
              </div>
              <img
                src={m.image}
                alt={m.title}
                className="h-screen object-cover"
              />
            </div>
          ))}

          <div className="-bottom-30 z-20 mx-10">
            <h2 className="text-2xl">Trending Movies</h2>
            <div className="flex justify-between gap-2 md:grid-cols-4">
              {movies.slice(1, 5).map((m) => (
                <div key={m.id}>
                  <img
                    src={m.image}
                    alt={m.title}
                    className="h-70 w-70 rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
