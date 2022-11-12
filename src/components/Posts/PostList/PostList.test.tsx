import { PostList } from "./PostList";
import { render } from "src/test-utils";
import mocks from "./mocks.json";

describe("PostList", () => {
  it("renders correctly", async () => {
    const postContent = document.getElementsByClassName("post-content");
    // mocks have 100 posts
    const { container } = render(<PostList posts={mocks} />);
    expect(container).toBeInTheDocument();
    expect(postContent).toHaveLength(100);
  });
});
