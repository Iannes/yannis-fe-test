import { Post } from "src/pages/Posts";
import { sortBy } from ".";
const mocks = [
  {
    id: "post63693b2d5dbf2_c20bb519",
    created_time: "2022-12-20T16:04:33+00:00",
  },
  {
    id: "post63693b2d5dbf3_16e6de82",
    created_time: "2022-11-20T12:30:43+00:00",
  },
  {
    id: "post63693b2d5dbf5_52c000c3",
    created_time: "2022-10-20T09:05:23+00:00",
  },
  {
    id: "post63693b2d5d9ed_1faa0d31",
    created_time: "2022-11-07T13:29:20+00:00",
  },
];

const descending = [
  {
    id: "post63693b2d5dbf2_c20bb519",
    created_time: "2022-12-20T16:04:33+00:00",
  },
  {
    id: "post63693b2d5dbf3_16e6de82",
    created_time: "2022-11-20T12:30:43+00:00",
  },
  {
    id: "post63693b2d5d9ed_1faa0d31",
    created_time: "2022-11-07T13:29:20+00:00",
  },
  {
    id: "post63693b2d5dbf5_52c000c3",
    created_time: "2022-10-20T09:05:23+00:00",
  },
];

const ascending = [
  {
    id: "post63693b2d5dbf5_52c000c3",
    created_time: "2022-10-20T09:05:23+00:00",
  },
  {
    id: "post63693b2d5d9ed_1faa0d31",
    created_time: "2022-11-07T13:29:20+00:00",
  },
  {
    id: "post63693b2d5dbf3_16e6de82",
    created_time: "2022-11-20T12:30:43+00:00",
  },
  {
    id: "post63693b2d5dbf2_c20bb519",
    created_time: "2022-12-20T16:04:33+00:00",
  },
];

describe("SortBy", () => {
  it("sorts in descending order when passed a -1", () => {
    const sorted = sortBy(mocks as Post[], "created_time", -1);
    expect(sorted).toEqual(descending);
  });
  it("sorts in ascending order when passed 1", () => {
    const sorted = sortBy(mocks as Post[], "created_time", 1);
    expect(sorted).toEqual(ascending);
  });
  it("leaves array intact when passed 0", () => {
    const sorted = sortBy(mocks as Post[], "created_time", 0);
    expect(sorted).toEqual(mocks);
  });
});
