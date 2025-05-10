"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { useIsMobile } from "@/lib/screenSize";
import TrendingMovies from "../trendingMoviex";
import { Movie } from "@/lib/movieinterface";

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
          {movies.slice(1, 2).map((m) => (
            <div key={m.id} className="h-screen">
              <Navbar className="absolute z-20" />
              <div className="to-transparemt absolute top-0 z-10 h-screen w-full bg-gradient-to-t from-slate-900 backdrop-blur-[4px]"></div>
              <div
                className={`absolute top-52 ${isMobile ? "left-5" : "left-20"} z-20 w-[70%] transition-all duration-300`}
              >
                <p className="mb-2 w-100 text-5xl font-bold uppercase">
                  {" "}
                  {m.title}{" "}
                </p>
                <p className="mb-2 line-clamp-5 w-100"> {m.description} </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    className={`flex cursor-pointer items-center gap-2 rounded-sm ${m.color.btn} px-4 py-2 transition-all duration-300 ${m.color.btnHover}`}
                  >
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
                className="h-screen w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Herosection;
