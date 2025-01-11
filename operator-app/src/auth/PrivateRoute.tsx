import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    component: React.ComponentType; // Тип компонента, который будет отображен
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const isLoggedIn = localStorage.getItem('user'); // Проверка наличия токена

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;