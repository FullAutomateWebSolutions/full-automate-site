import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";

export default function PrivateRoute({
  children,
}: any) {
  return auth.currentUser
    ? children
    : <Navigate to="/admin" />;
}