import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "../data";
import { TiChevronLeft } from "react-icons/ti";
import ReactPlayer from "react-player";
import moment from "moment";

export default function MovieDetails() {
  const { movieId } = useParams();
  const currentMovie = movies.find((movie) => movieId === movie.id);
  console.log(currentMovie);

  return (
    <div className="bg-green-300">
      <Link
        to="/"
        className="flex gap-2 items-center text-blue-500 font-poppings text-md p-3 pt-5"
      >
        <TiChevronLeft /> Back to Home
      </Link>
      <div className="font-poppings px-4 space-y-5">
        <h2 className="text-blue-800 text-2xl font-medium border-l-8 border-blue-800 pl-2">
          {currentMovie?.title || "No Title"}
        </h2>
        <section className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[50%] bg-green-300">
            <ReactPlayer
              url={
                currentMovie?.trailer ||
                "https://www.youtube.com/watch?v=ysz5S6PUM-U"
              }
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
          <div className="lg:w-[50%] bg-green-100">
            <p className="text-gray-800 leading-8 ">
              {currentMovie.description}
            </p>
          </div>
        </section>

        <div className="space-y-3">
          <div>
            <span className="font-bold pr-2 text-gray-800">
              Original Language:
            </span>
            English
          </div>
          <div>
            <span className="font-bold pr-2 text-gray-800">Producer:</span>
            {currentMovie.producer || "John Melody"}
          </div>
          <div>
            <span className="font-bold pr-2 text-gray-800">Release Date:</span>
            {moment(currentMovie.releasedYear).format("MMM Do YY") ||
              moment(Date.now()).format("MMM Do YY")}
          </div>
          <div>
            <span className="font-bold pr-2 text-gray-800">Distributor:</span>
            Fathom Events
          </div>
          <div>
            <span className="font-bold pr-2 text-gray-800">
              Official Poster:
            </span>
            <img
              src={currentMovie.posterUrl}
              className="w-full lg:w-[300px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
