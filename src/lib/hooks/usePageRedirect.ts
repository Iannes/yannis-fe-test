import React from "react";

export const usePageRedirect = (token: string | null | undefined) => {
  const [redirect, setRedirect] = React.useState(false);
  React.useEffect(() => {
    if (token) {
      setRedirect(true);
      return;
    }
    setRedirect(false);
  }, [token]);

  return redirect;
};
