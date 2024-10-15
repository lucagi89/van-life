import { Outlet, Navigate } from "react-router-dom";
export default function Authenticator() {
    const loggedIn = false;
    if (!loggedIn) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
}
