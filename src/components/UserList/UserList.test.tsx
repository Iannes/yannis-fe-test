import { UserList } from "./UserList";
import { render } from "src/test-utils";
import userMocks from "./userMocks.json";

describe("UserList", () => {
  it("renders correctly when passed with valid data", () => {
    const { container } = render(
      <UserList users={Object.entries(userMocks)} />
    );
    expect(container).toBeInTheDocument();
  });
});
