import { Link } from "react-router-dom";
import "../App.css";

export default function Error() {
  return (
    <main className="error-container">
      <h1>404 Not Found</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <h3>
        Go to the <Link to="/">Homepage</Link>.
      </h3>
    </main>
  );
}
