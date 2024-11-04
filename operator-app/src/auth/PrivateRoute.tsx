import { Navigate, Route, RouteProps } from "react-router-dom";

export const PrivateRoute = (props: JSX.IntrinsicAttributes & RouteProps) => {
    const token = localStorage.getItem('auth');
    return <Route
        {...props}
        element={token ? props.element : <Navigate to="/login" replace />} />

}