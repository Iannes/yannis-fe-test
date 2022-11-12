import "./Loader.css";

type LoaderProps = {
  loading: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return loading ? <div className="loader">Loading...</div> : null;
};
