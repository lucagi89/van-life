
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div>
      <nav>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/reviews">Reviews</Link>
        <Link to="/host/income">Income</Link>
      </nav>
      <Outlet />
    </div>
  );
}
