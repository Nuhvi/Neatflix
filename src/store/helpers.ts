import MDB from "@/api/MDB";

export const mapIdToName = (arr: [{ id: number; name: string }]) =>
  arr.reduce((map: any, obj: { id: number; name: string }) => {
    map[obj.id] = obj.name;
    return map;
  }, {});

export const mapIdToSelf = (arr: { id: number }[]) =>
  arr.reduce((map: any, obj: { id: number }) => {
    map[obj.id] = obj;
    return map;
  }, {});

const genreNames = (genreIds: [number], type: string, context: any) => {
  const genres = context.rootState.global.genres[type];

  return genreIds.map((id: number) => genres[id]);
};

const sanitize = (name: string) => (name.match(/^[^\(:]+/) || [""])[0];
const slugify = (name: string) => name.replace(/\s/g, "_");

export const createMovieItem = (movie: any, context: any): { id: number } => ({
  ...movie,
  title: sanitize(movie.title),
  route: `/movie/${movie.id}/${slugify(movie.title)}`,
  genreNames: genreNames(movie["genre_ids"], "movie", context)
});

export const createTVItem = (tvItem: any, context: any): { id: number } => ({
  ...tvItem,
  title: sanitize(tvItem.title || tvItem.original_name),
  route: `/tv/${tvItem.id}/${slugify(tvItem.title || tvItem.original_name)}`,
  genreNames: genreNames(tvItem["genre_ids"], "tv", context)
});
