import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./Components/RequireAuth";
import { Home } from "./Pages";
import { Login } from "./Pages/Login";
import { SendEmbed } from "./Pages/SendEmbed";
import { SendMessage } from "./Pages/SendMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/admin/send-message" element={<SendMessage />} />
          <Route path="/admin/send-embed" element={<SendEmbed />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
