import { fireEvent, render } from "src/test-utils";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("accepts text", () => {
    let value = "";
    const onChange = jest.fn((ev) => (value = ev.target.value));
    const { getByLabelText, rerender } = render(
      <TextField
        disabled={false}
        type="text"
        name="userFilter"
        onChange={onChange}
        value={value}
        required
        id="search-input"
        hideLabel
        variant="mini"
        placeholder="search"
        align="left"
      />
    );
    const input = getByLabelText("search-input") as HTMLInputElement;
    expect(input.value).toBe("");
    // simulate type
    fireEvent.change(input, { target: { value: "a test value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    rerender(
      <TextField
        disabled={false}
        type="text"
        name="userFilter"
        onChange={onChange}
        value={value}
        required
        id="search-input"
        hideLabel
        variant="mini"
        placeholder="search"
        align="left"
      />
    );
    expect(input.value).toBe("a test value");
  });
});
