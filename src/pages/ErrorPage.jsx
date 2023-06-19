import { Link } from "react-router-dom";
import "../App.css";

export default function Error() {
  return (
    <main className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <h2>Sorry, an unexpected error has occurred.</h2>

        <p>
          We're sorry, but the page you're looking for is not available at the
          moment. This error may occur due to a temporary network connection
          issue or because the requested page does not exist.{" "}
        </p>

        <p>
          Please try again later, as the page may become accessible soon. We
          apologize for any inconvenience caused and appreciate your patience.
        </p>
        <h3>
          <Link to="/">Go to the Homepage</Link>.
        </h3>
      </div>
    </main>
  );
}
