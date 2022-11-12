import classNames from "classnames";
import React from "react";
import { setCachedPosts } from "src/lib/actions/setCachedPosts";
import { usePosts } from "src/lib/contexts/PostsProvider";
import { sortBy } from "src/lib/utils/sortBy";
import "./TextField.css";

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  type: string;
  disabled: boolean;
  required: boolean;
  hideLabel?: boolean;
  variant: "fullWidth" | "mini";
  align?: "left" | "right" | "center";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField = ({
  id = "",
  name,
  value,
  type,
  disabled,
  required,
  hideLabel = false,
  variant,
  align = "center",
  onChange,
  ...rest
}: TextFieldProps) => {
  const containerClassNames = classNames(
    "text-field-container",
    { "text-field-container--mini": variant === "mini" },
    { "text-field-container--align-right": align === "right" },
    { "text-field-container--align-center": align === "center" },
    { "text-field-container--align-left": align === "left" }
  );

  const labelClassNames = classNames("label-container", {
    "hide-label": hideLabel,
  });

  const { state, dispatch } = usePosts();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      const sortedByName = sortBy(state.cache, "from_name");
      dispatch(setCachedPosts(sortedByName));
      return;
    }
  };

  return (
    <div className={containerClassNames}>
      <div className={labelClassNames}>
        <label aria-hidden={hideLabel} htmlFor={id}>
          {id}
        </label>
      </div>
      <input
        className="text-field"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </div>
  );
};
