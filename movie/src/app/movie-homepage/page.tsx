"use client";
import Herosection from "@/components/Header/herosection";
import Navbar from "@/components/Header/navbar";
import TrendingMovies from "@/components/trendingMoviex";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <Herosection />
        <TrendingMovies />
      </div>
    </>
  );
};

export default HomePage;
