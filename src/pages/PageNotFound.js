import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404 Page Not Found</h1>
      <p>Sorry, there is nothing here.</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
}
