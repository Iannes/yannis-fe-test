import { Post } from "src/pages/Posts";

export enum SORT_DIRECTION {
  ASC = 1,
  DESC = -1,
  NONE = 0,
}

export const sortBy = (arr: Post[], key: string, dir = 0) => {
  return [...arr].sort((a, b) => {
    const keyA = a[key as keyof typeof a];
    const keyB = b[key as keyof typeof b];
    return (
      keyA.localeCompare(keyB, undefined, {
        numeric: key !== "from_name",
      }) * dir
    );
  });
};
