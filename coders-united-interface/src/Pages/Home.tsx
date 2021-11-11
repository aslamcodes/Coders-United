import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/send-message">
        <p>Send Message Page</p>
      </Link>
      <Link to="/login">
        <p>Login Page</p>
      </Link>
    </div>
  );
};
