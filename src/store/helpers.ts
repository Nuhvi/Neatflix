export const standrdize: any = (item: any, state: any) => {
  let title, genres;

  if (item.media_type === "tv") {
    title = item.original_name;
    console.log("asd", state.rootGetters["genres/tvGenres"]);
    genres = item.genre_ids;
  } else {
    title = item.title;
  }

  return {
    ...item,
    title,
    genres
  };
};
