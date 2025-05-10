"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

// interface foundMovie {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   slug: string;
// }

const MovieDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const [movie, setMovie] = useState<Movie[]>([]);
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
      <div> MovieID: {id} </div>
    </>
  );
};

export default MovieDetails;
