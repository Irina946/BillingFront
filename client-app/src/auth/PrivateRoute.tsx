import { Route, RouteProps, redirect } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

export const PrivateRoute = (props: JSX.IntrinsicAttributes & RouteProps) => {
    const token = localStorage.getItem('auth');
    return (token ? <Route {...props} /> : redirect("/login"))
}

