import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    user: "",
    password: "",
  });
  const users = [
    { user: "jose@hotmail.com", password: "jose123" },
    { user: "pedro@hotmailgmail.com", password: "pedro123" },
    { user: "ricardi@yahoo.com", password: "ricardo123" },
    { user: "tomas@outlook.com", password: "tomas123" },
    { user: "josefina@gmaill.com", password: "josefina123" },
  ];

  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const filter = users.filter((i) => {
      return login.user === i.user && login.password === i.password;
    });

    if (filter.length !== 0) {
      Swal.fire({
        title: "Success!",
        text: "Te has logeado correctamente!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/");
        window.scrollTo({
          top: 0,
        });
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const onClick = () => {
    Swal.fire({
      title: "Error!",
      text: "En reparacion",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="body-login">
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ fontSize: "38px" }}
                        >
                          Iniciar sesion
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            name="user"
                            onChange={onChange}
                            value={login.user}
                          />
                          <label class="form-label" for="form2Example17">
                            Email
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            name="password"
                            onChange={onChange}
                            value={login.password}
                          />
                          <label class="form-label" for="form2Example27">
                            Contraseña
                          </label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={onSubmit}
                          >
                            Login
                          </button>
                        </div>

                        <p class="mb-5 pb-lg-2">
                          No tenes una cuenta?{" "}
                          <p
                            href="/"
                            onClick={onClick}
                            style={{
                              cursor: "pointer",
                              color: "blue",
                              borderBottom: "1px solid blue",
                              width: "85px",
                            }}
                          >
                            Registrate
                          </p>
                        </p>

                        <p
                          class="small text-muted"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={onClick}
                        >
                          Olvidaste tu contraseña?
                        </p>

                        <div>
                          <p
                            class="small text-muted"
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                            onClick={onClick}
                          >
                            Politica de Privacidad
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
