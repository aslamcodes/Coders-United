import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./Components/Auth/RequireAuth";
import { Container } from "./Components/Helpers/Container";
import { Navbar } from "./Components/UI/Navbar";
import { SendEmbedForm } from "./Components/UI/SendEmbedForm";
import { SendMessageForm } from "./Components/UI/SendMessageForm";
import { Home } from "./Pages";
import { Admin } from "./Pages/Admin";
import { Login } from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <main>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/send-message" element={<SendMessageForm />} />
              <Route path="/admin/send-embed" element={<SendEmbedForm />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Container>
    </Router>
  );
}

export default App;
