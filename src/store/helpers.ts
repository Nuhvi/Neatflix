export const standardize: any = (item: any, { genres }: any) => {
  if (item.media_type === "tv") {
    item.title = item.original_name;
    item.genres = item.genre_ids.map((id: number) => genres.tv[id]);
  } else if (item.media_type === "movie") {
  }

  item.title = item.title?.match(/^[^\(:]+/)[0];

  return {
    ...item
  };
};

export const createMovieItem = (item: any, context: any): { id: number } => {
  const genres = context.rootState.global.genres.movie;
  item.genres = item.genre_ids.map((id: number) => genres[id]);

  return item;
};

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
