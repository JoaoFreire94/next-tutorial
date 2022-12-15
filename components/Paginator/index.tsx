"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { IPagination } from "../../types/globalTypes";

const Paginator = ({ numberOfPages, page }: IPagination): JSX.Element => {
  const router = useRouter();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }): void => {
    router.push(`/in-theatres/${currentTarget.id}`);
  };
  const buildPageNumbers = (): Array<JSX.Element> => {
    const tempArray: Array<JSX.Element> = [];
    for (let actualPage = page; actualPage <= page + 6; actualPage += 1) {
      tempArray.push(
        <button
          key={actualPage}
          id={actualPage.toString()}
          onClick={handleClick}
          className="ml-3"
        >
          {actualPage}
        </button>
      );
    }
    return tempArray;
  };

  const handleArrowsClick: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }): void => {
    if (currentTarget.id === "frontArrow") {
      const nextPage = page + 1;
      router.push(`/in-theatres/${nextPage}`);
    } else {
      const prevPage = page - 1;
      router.push(`/in-theatres/${prevPage}`);
    }
  };
  return (
    <div className="p-8">
      <button
        onClick={handleArrowsClick}
        id={"backArrow"}
        disabled={page === 1}
      >
        Left
      </button>
      {buildPageNumbers()}
      <button
        onClick={handleArrowsClick}
        id={"frontArrow"}
        disabled={page === numberOfPages}
      >
        Right
      </button>
    </div>
  );
};

export default Paginator;
