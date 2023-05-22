import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (user) {
    return children;
  }
  if (loader) {
    return <button className="btn btn-square loading"></button>;
  }

  return (
    <Navigate to="/login" replace state={{ from: location }}>
      {" "}
    </Navigate>
  );
};

export default PrivateRouter;
