import { Navigate, RouteProps, useNavigate } from 'react-router-dom';


// interface PrivateRouteProps extends RouteProps {
//   element: React.FC = (): JSX.Element
// }

// const PrivateRoute = ({ element: Element, ...props }: PrivateRouteProps) => {
//   const navigate = useNavigate()
//   const token = localStorage.getItem("token");
//   if (token) {
//     return <Element />
//   }
//   return navigate("/login")
// };

// export default PrivateRoute;

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