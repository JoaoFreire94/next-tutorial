export interface IPagination {
  numberOfPages: number;
  page: number;
}
export interface IMovie {
  movie: IMovieFromApi;
}

export interface IMovieFromApi {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: 7.3;
  vote_count: 2743;
}

export interface IMoviesInTheatresFromApi {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<IMovieFromApi>;
  total_pages: number;
  total_results: number;
}
