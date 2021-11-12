import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="admin/send-message">
        <p>Send Message Page</p>
      </Link>
      <Link to="admin/send-embed">
        <p>Send Embed form Page</p>
      </Link>
      <Link to="/login">
        <p>Login Page</p>
      </Link>
    </div>
  );
};
