// React
import { useContext, useState, useEffect } from "react";
// React Router
import { useNavigate } from "react-router-dom";

// API
import { loginAPI } from "../api/login.api";
// Components
import Button from "../components/button";
import Input from "../components/input";
// Context
import LoadingContext from "../context/loading";

// Styles
import { SLogin } from "./styles/login.styles";

interface IInputs {
  email: string;
  password: string;
  [key: string]: any;
}

const Login = () => {
  const { dispatch } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const t = JSON.stringify({ token: false });
    const isValidate = JSON.parse(localStorage.getItem("token") || t);
    if (isValidate.token) navigate("/dashboard", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev: IInputs) => {
      const toChange: IInputs = { ...prev };
      toChange[name] = value;
      return toChange;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOADING-TRUE" });
    loginAPI(inputs)
      .then((res) => {
        if (res.error) return setError(true);
        localStorage.setItem("token", JSON.stringify(res));
        setError(false);
        navigate("/dashboard");
      })
      .finally(() => dispatch({ type: "LOADING-FALSE" }));
  };
  return (
    <SLogin>
      <form onSubmit={handleSubmit} className="login-container">
        <img
          src="https://plataforma.paycode.com.mx/img/paycode/logo/paycode.png"
          alt="paycode"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={inputs.email}
          handleChange={inputHandler}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          handleChange={inputHandler}
        />
        {error && (
          <p style={{ color: "var(--red)" }}>Correo o contraseña incorrectos</p>
        )}
        <Button contained submit>
          Login
        </Button>
      </form>
    </SLogin>
  );
};
export default Login;
