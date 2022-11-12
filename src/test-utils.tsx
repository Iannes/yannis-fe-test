import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AuthProvider } from "./lib/contexts/AuthProvider";
import { ReactFCC } from "./types";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./lib/contexts/PostsProvider";

const AllProviders: ReactFCC = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>{children}</PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const Wrapper: ReactFCC = ({ children }) => {
  return <AllProviders>{children}</AllProviders>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
