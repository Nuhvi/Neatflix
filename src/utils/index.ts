import storage from "local-storage-fallback";

export const joinWithCol = (arr: [string]) => arr.filter((str: string) => str).join(" | ");

export const truncate = (string: string, length: number) =>
  string.length > length ? string.slice(0, length) + "..." : string;

export const isRecent = (date: string | null, days: number): boolean => {
  if (!date) return false;
  const threshold = new Date(Date.now() - days * 86400000);
  return threshold < new Date(date);
};

export const updateCachedData = (payload: any, key: string) => {
  const cachedData = storage.getItem("data") || "{}";

  const updatedData = { ...JSON.parse(cachedData), [key]: payload };

  storage.setItem("data", JSON.stringify(updatedData));
  storage.setItem("data_cache_date", JSON.stringify(new Date().toDateString()));
};
