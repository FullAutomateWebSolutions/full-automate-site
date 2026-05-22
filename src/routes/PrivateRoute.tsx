import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  }
   if (!auth.currentUser) {
    return <Navigate to="/nao-autorizado" replace />;
  }
  return ( <>{children}</> );
};
export default PrivateRoute;
