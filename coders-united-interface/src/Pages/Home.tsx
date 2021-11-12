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
      <a
        rel="noreferrer"
        target="_blank"
        href="https://discord.com/oauth2/authorize?client_id=859485926404390962&permissions=8&redirect_uri=https%3A%2F%2Flocalhost%3A3001%2Fauth%2Fredirect&scope=bot%20applications.commands"
      >
        Invite
      </a>
    </div>
  );
};
