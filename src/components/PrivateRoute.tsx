import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  if (token) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};