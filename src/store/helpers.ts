export const standardize: any = (item: any) => {
  if (item.media_type === "tv") {
    item.title = item.original_name;
  }

  item.title = item.title.match(/^[^\(:]+/)[0];

  return {
    ...item
  };
};
