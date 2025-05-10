"use client";
import Navbar from "@/components/Header/navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  genre: string[];
}

const MovieDetails = () => {
  const params = useParams();
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
      <Navbar className="" />
      {movie ? (
        <div className="mx-10 mt-5">
          <div className="flex">
            {/* Featured Image */}
            <div>
              <div className="flex h-103 w-83 items-center justify-center rounded-lg bg-white/30 shadow-md shadow-amber-50 hover:opacity-90">
                <img
                  src={movie?.image}
                  alt=""
                  className="h-100 w-80 rounded-md object-cover object-bottom"
                />
              </div>
            </div>
            {/* Featured Image Ends */}

            {/* Details */}
            <div className="ms-5 w-full">
              <h2 className="primaryText font-[Bebas_Neue] text-6xl tracking-wider uppercase">
                {movie?.title}
              </h2>
              <div className="flex gap-5">
                {movie?.genre.map((g, index) => (
                  <p className={`primaryText rounded-full bg-slate-700 px-5`}>
                    {" "}
                    {g}
                  </p>
                ))}
              </div>
              <div className="flex justify-between">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </div>
            {/* Details Ends */}
          </div>
        </div>
      ) : (
        <div className="mx-10 mt-5">No movie found</div>
      )}
    </>
  );
};

export default MovieDetails;
