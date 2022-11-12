import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../Loader";
import { ProtectedRoute } from "../ProtectedRoute";

const Home = React.lazy(() => import("../../pages/Home"));
const NotFound = React.lazy(() => import("../../pages/NotFound"));
const Posts = React.lazy(() => import("../../pages/Posts"));

export enum APP_ROUTES {
  HOME = "/",
  POSTS = "/posts",
}

export const AppRouter = () => {
  return (
    <React.Suspense fallback={<Loader loading={true} />}>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route
          path={APP_ROUTES.POSTS}
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
