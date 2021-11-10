import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages";
import { Login } from "./Pages/Login";
import { Message } from "./Pages/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/send-message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
