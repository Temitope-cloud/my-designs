"use client";
import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Movie } from "@/lib/movieinterface";

const TrendingMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/movies`).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative -top-50 z-10 px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Trending Movies</h2>
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>

        {/* Movies container */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.slice(1, 10).map((m) => (
            <Link key={m.id} href={`movie/${m.id}`}>
              <div className="w-[200px] flex-shrink-0 transition-transform hover:scale-105">
                <img
                  src={m.image}
                  alt={m.title}
                  className="h-[300px] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default TrendingMovies;
