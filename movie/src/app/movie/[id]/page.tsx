"use client";
import Navbar from "@/components/Header/navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Movie } from "@/lib/movieinterface";
import Link from "next/link";
import { StarRating } from "@/lib/starrating";
import { useScreenWidth } from "@/lib/screenSize";
import { useTheme } from "@/context/ThemeContext";

const MovieDetails = () => {
  const screenSize = useScreenWidth();
  const isMobile = screenSize < 768;
  const params = useParams();
  const { theme } = useTheme();

  const id = params.id as string;
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/movies`).then((res) => {
      const foundMovie = res.data.find((m: Movie) => m.id.toString() === id);
      if (foundMovie) {
        setMovie(foundMovie);
      }
      console.log(foundMovie);
    });
  }, []);
  return (
    <>
      {movie && !isMobile ? (
        <div className="relative">
          <img
            src={movie?.image}
            alt=""
            className="max-h-screen w-screen object-cover object-center"
          />
          <div
            className={`absolute top-0 h-full w-screen ${theme === "dark" ? "bg-slate-950/70" : "bg-gray-200/80"} px-10 py-5 backdrop-blur-sm`}
          >
            <Navbar className="mb-10" />

            <div className="flex">
              {/* Featured Image */}
              <div>
                <div className="flex h-123 w-83 items-center justify-center rounded-lg bg-white/30 shadow-md shadow-amber-50 hover:opacity-90">
                  <img
                    src={movie?.image}
                    alt=""
                    className="h-120 w-80 rounded-md object-cover object-bottom"
                  />
                </div>
              </div>
              {/* Featured Image  Ends */}

              {/* Details */}
              <div className="ms-5 w-full">
                <div className="leading-0">
                  {" "}
                  <StarRating rating={movie.tmdbRating} />
                  <h2 className="primaryText font-[Bebas_Neue] text-6xl tracking-wider uppercase">
                    {movie?.title}
                  </h2>
                </div>

                <div className="mt-5 flex justify-between">
                  <div className="flex-2">
                    <div>
                      <div className="flex gap-5">
                        {movie?.genre.map((g, index) => (
                          <p
                            className={`rounded-full bg-slate-700 px-5 text-white`}
                          >
                            {g}
                          </p>
                        ))}
                      </div>
                      <div className="my-5 flex items-center gap-5">
                        <div className="flex h-5 items-center gap-2">
                          <img
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                            alt=""
                            className="h-10 w-10"
                          />
                          <p className="primaryText">{movie?.tmdbRating}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p
                            className={`rounded-lg px-3 text-sm ${movie.color.btn}`}
                          >
                            PG
                          </p>
                          <p className="primaryText"> {movie?.pgRating} </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <i
                            className={`bx bxs-hourglass rounded-lg bg-[#1e605d] px-4 py-1 text-sm`}
                          ></i>
                          <p className="primaryText">{movie?.watchTime}</p>
                        </div>
                      </div>
                      <p className="primaryText mt-10 w-[90%]">
                        {movie?.description}
                      </p>
                      <button
                        className={`primaryText mt-3 flex items-center rounded-xl text-lg font-bold uppercase`}
                      >
                        Watch {movie?.title} on:
                      </button>

                      <div className="mt-5 flex items-center gap-5">
                        {movie?.availableOn.map((a, i) => (
                          <Link href={a.link} target="_blank" key={i}>
                            <div className="flex">
                              <p
                                className={`rounded-md px-4 py-2 font-bold`}
                                style={{ backgroundColor: a.color }}
                              >
                                {a.platform}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    {/* Directors */}
                    <div className="flex items-center justify-between border-t">
                      <div className="flex flex-col">
                        <h2 className="primaryText font-[cal_sans] text-xl uppercase">
                          Director
                        </h2>
                        <div className="flex items-center gap-2">
                          {movie?.directors.map((d, i) => (
                            <p className="directorText font-semibold">
                              {d}
                              {i !== movie.directors.length - 1 && ","}{" "}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <i className="bx bx-chevron-right text-2xl"></i>
                      </div>
                    </div>
                    {/* Writers */}
                    <div className="mt-10 flex items-center justify-between border-t">
                      <div className="flex flex-col">
                        <h2 className="primaryText font-[cal_sans] text-xl uppercase">
                          Writers
                        </h2>
                        <div className="flex items-center gap-2">
                          {movie?.writers.map((d, i) => (
                            <p className="directorText font-semibold">
                              {d}
                              {i !== movie.writers.length - 1 && ","}{" "}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <i className="bx bx-chevron-right text-2xl"></i>
                      </div>
                    </div>
                    {/* actors */}
                    <div className="mt-10 flex items-center justify-between border-t">
                      <div className="flex flex-col">
                        <h2 className="primaryText font-[cal_sans] text-xl uppercase">
                          Star Highlight
                        </h2>
                        <div className="flex flex-wrap items-center gap-2">
                          {movie?.actors.map((d, i) => (
                            <p className="directorText font-semibold">
                              {d}
                              {i !== movie.actors.length - 1 && ","}{" "}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <i className="bx bx-chevron-right text-2xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Details Ends */}
            </div>
          </div>
        </div>
      ) : movie && isMobile ? (
        "MOVHER is not available to mobile users for now"
      ) : (
        "No movie found"
      )}
    </>
  );
};

export default MovieDetails;
