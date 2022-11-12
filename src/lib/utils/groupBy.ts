import { Post } from "src/pages/Posts";

export const groupBy = (items: Post[], key: string) =>
  items.reduce(
    (result: any, item: any) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );
