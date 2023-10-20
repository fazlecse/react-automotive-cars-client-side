import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    console.log(loading);
    return (
      <div className="flex justify-center">
        <span className="loading loading-ring loading-lg text-primary h-screen"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  // return <Navigate to={"/login"}></Navigate>;
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
