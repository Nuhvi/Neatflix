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

const sanitize = (name: string) => (name.match(/^[^\(:]+/) || [""])[0];

const slugify = (name: string) => name.replace(/\s/g, "_");

const genreNames = (item: { genre_ids: [number] }, type: string, context: any) => {
  const genres = context.rootState.global.genres[type];

  return item["genre_ids"].map((id: number) => genres[id]);
};

const getImages = (item: any, context: any) => {
  const imagesAPI = context.rootState.global.base.images;
  return {
    backdropPath: imagesAPI.secure_base_url + imagesAPI["backdrop_sizes"][3] + item.backdrop_path,
    cardPath: imagesAPI.secure_base_url + imagesAPI["poster_sizes"][3] + item.poster_path
  };
};

export const createMovieItem = (movie: any, context: any): { id: number } => ({
  detailed: false,
  ...movie,
  title: sanitize(movie.title),
  route: `/movie/${movie.id}/${slugify(movie.title)}`,
  genreNames: genreNames(movie, "movie", context),
  ...getImages(movie, context)
});

export const createTVItem = (tvItem: any, context: any): { id: number } => ({
  detailed: false,
  ...tvItem,
  title: sanitize(tvItem.title || tvItem.original_name),
  route: `/tv/${tvItem.id}/${slugify(tvItem.title || tvItem.original_name)}`,
  genreNames: genreNames(tvItem, "tv", context),
  ...getImages(tvItem, context)
});
