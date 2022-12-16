import "server-only";

export default async function getUpcomingMovies(page: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  https: return resp
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}
