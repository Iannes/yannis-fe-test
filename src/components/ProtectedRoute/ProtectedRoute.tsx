import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "src/lib/contexts/AuthProvider";
import { APP_ROUTES } from "../AppRouter/AppRouter";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAuth() as any;
  const location = useLocation();

  if (!token) {
    return <Navigate to={APP_ROUTES.HOME} replace state={{ from: location }} />;
  }

  return children;
};
