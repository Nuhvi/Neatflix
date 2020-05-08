export const joinWithCol = (arr: [string]) => arr.filter((str: string) => str).join(" | ");

export const truncate = (string: string, length: number) =>
  string.length > length ? string.slice(0, length) + "..." : string;
