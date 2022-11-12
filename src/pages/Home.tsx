import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "src/components/AppRouter/AppRouter";
import { LoginForm } from "src/components/LoginForm";
import { useAuth } from "src/lib/contexts/AuthProvider";
import { usePageRedirect } from "src/lib/hooks/usePageRedirect";

type FormValues = {
  name: string;
  email: string;
};

const Home = () => {
  const auth = useAuth();
  const redirect = usePageRedirect(auth?.token);
  const [values, setValues] = React.useState<FormValues>({
    name: "",
    email: "",
  });

  if (redirect === true) {
    return <Navigate to={APP_ROUTES.POSTS} replace />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!auth) return;
    auth.login(values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });
  };
  return (
    <div className="home-page-layout">
      <LoginForm
        auth={auth}
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
