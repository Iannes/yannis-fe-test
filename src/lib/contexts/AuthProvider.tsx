import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "src/components/AppRouter/AppRouter";
import { ReactFCC } from "src/types";
import { getToken } from "../utils/getToken";

export type Values = {
  name: string;
  email: string;
};

const AuthContext = React.createContext<{
  token: string | null;
  login: ({ name, email }: Values) => Promise<void>;
  onLogout: () => void;
  error: any;
} | null>(null);

const AuthProvider: ReactFCC = ({ children }) => {
  const sl_token = Cookies.get("sl_token");
  const [token, setToken] = React.useState<string | null>(null);
  const [error, setError] = React.useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof sl_token !== "undefined") {
      setToken(sl_token);
    }
  }, [sl_token]);

  const handleLogin = async (values: Values) => {
    const res = await getToken(values);
    if (res?.status === 200) {
      const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
      const { sl_token } = res?.data?.data;
      setToken(sl_token);
      Cookies.set("sl_token", sl_token, { expires: inOneHour });
    }
    if (typeof res?.status === "undefined") {
      setError(res);
    }

    // When a login occurs, we save the previous page so we can redirect the user there on logout.
    // If this page was never set as state, we default to the Home page
    const origin = location.state?.from?.pathname ?? APP_ROUTES.HOME;
    navigate(origin);
  };

  const handleLogout = () => {
    Cookies.remove("sl_token");
    setToken(null);
  };

  const value = {
    token,
    login: handleLogin,
    onLogout: handleLogout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
