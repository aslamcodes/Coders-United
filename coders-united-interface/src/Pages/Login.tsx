import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Components/UI/Button";
import { loginUser } from "../Context/Authentication/action";
import { useAuthDispatch } from "../Context/Authentication/AuthContext";
import { Form } from "../Components/UI/Form";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await loginUser(dispatch, { email, password });
    navigate(from, { replace: true });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Input
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button style={{ width: "100%" }} type="submit">
          Login
        </Button>
      </Form.Group>
    </Form>
  );
};
