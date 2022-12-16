"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/globalTypes";

const getPosterPath = (posterPath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

export default function MovieCard({ movie }: IMovie): JSX.Element {
  return (
    <div className="p-4 justify-between xl:w-1/5 lg:w-1/5 md:w-1/3 sm:w-100">
      <div className="flex justify-center">
        <Image
          src={getPosterPath(movie.poster_path)}
          alt={movie.title}
          width={200}
          height={300}
          className="rounded-lg "
        />
      </div>
      <div className="flex flex-wrap flex-col">
        <h1 className="break-words text-sm">
          <b>{movie.title}</b>
        </h1>
        <span className="break-words">{movie.vote_average}</span>
      </div>
    </div>
  );
}
