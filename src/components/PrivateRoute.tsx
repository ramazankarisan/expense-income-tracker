import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

// prevents user seeing the records or categories if user is not logged in

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  if (token) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};