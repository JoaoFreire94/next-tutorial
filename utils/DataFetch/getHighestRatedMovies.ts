import "server-only";

export default async function getHighestRatedMovies(page: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return resp
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}
