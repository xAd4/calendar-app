export const LoginPage = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center w-50">
        <div className="col-md-6 login-form-1 bg-light p-4 rounded shadow">
          <h3 className="text-center mb-4">Ingreso</h3>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group d-grid">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2 bg-light p-4 rounded shadow mt-4 mt-md-0">
          <h3 className="text-center mb-4">Registro</h3>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
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
