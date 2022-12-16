"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { IPagination } from "../../types/globalTypes";

const Paginator = ({
  numberOfPages,
  page,
  actualRoute,
}: IPagination): JSX.Element => {
  const router = useRouter();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }): void => {
    router.push(`${actualRoute}/${currentTarget.id}`);
  };

  // Build Page Numbers will show allways the first, second, last and last but one. If the page selected isn't one of that four it'll add 2 non interactive buttons
  // And will also add the current page on center
  const buildPageNumbers = (): Array<JSX.Element> => {
    const tempArray: Array<JSX.Element> = [];
    for (let actualPage = 1; actualPage <= numberOfPages; actualPage += 1) {
      if (actualPage === 3) {
        tempArray.push(
          <button
            className="p-2 border-2 w-10 text-xs"
            key={"leftEllipsis"}
            disabled={true}
          >
            ...
          </button>
        );

        if (page > 2 && page < numberOfPages - 1) {
          tempArray.push(
            <button
              key={page}
              id={page.toString()}
              onClick={handleClick}
              className="p-2 border-2 w-10 bg-blue-800 text-white text-xs"
            >
              {page}
            </button>
          );
          tempArray.push(
            <button
              className="p-2 border-2 w-10 text-xs"
              key={"rightEllipsis"}
              disabled={true}
            >
              ...
            </button>
          );
        }

        actualPage = numberOfPages - 1;
      }
      tempArray.push(
        <button
          key={actualPage}
          id={actualPage.toString()}
          onClick={handleClick}
          className={`p-2 border-2 w-10  hover:bg-gray-200 break-words text-xs ${
            actualPage === page && "bg-blue-800 text-white"
          }`}
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
        className={`p-2 border-2 w-10 rounded-l-lg text-xs ${
          page === 1 ? "" : "hover:bg-gray-200"
        }`}
      >
        {"<"}
      </button>
      {buildPageNumbers()}
      <button
        onClick={handleArrowsClick}
        id={"frontArrow"}
        disabled={page === numberOfPages}
        className={`p-2 border-2 w-10 rounded-r-lg text-xs ${
          page === numberOfPages ? "" : "hover:bg-gray-200"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
