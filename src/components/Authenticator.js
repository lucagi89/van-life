import { Outlet, Navigate } from "react-router-dom";
export default function Authenticator() {
    const loggedIn = true;
    if (!loggedIn) {
      return <Navigate
                to="/login"
                state={{message: 'You must be logged in to view this page'}}
              />;
    }
    return <Outlet />;
}
