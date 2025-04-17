import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const loginFormFields = {
    loginEmail: "",
    loginPassword: "",
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log({ loginEmail, loginPassword });
  };

  const registerFormFields = {
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerPassword2: "",
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({
      registerEmail,
      registerName,
      registerPassword,
      registerPassword2,
    });
  };

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center w-50">
        <div className="col-md-6 login-form-1 bg-light p-4 rounded shadow">
          <h3 className="text-center mb-4">Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group d-grid">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2 bg-light p-4 rounded shadow mt-4 mt-md-0">
          <h3 className="text-center mb-4">Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group d-grid">
              <input
                type="submit"
                className="btn btn-success"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
