import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const validateCredentials = (email, password) => {
    return (
      storedEmail &&
      storedPassword &&
      storedEmail === email &&
      storedPassword === password
    );
  };

  return (
    <div className="form">
      <div className="form-style">
        <div className="left">
          <div className="form-container">
            <h1 className="title">Login</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const { email, password } = values;

                if (validateCredentials(email, password)) {
                  localStorage.setItem("isLogin", "true");
                  alert("Login successful!");
                  navigate("/");
                  resetForm();
                } else {
                  alert("Invalid email or password");
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form id="signIn">
                  <Field
                    type="email"
                    name="email"
                    id="loginEmail"
                    placeholder="Email"
                    className="input"
                    autoFocus
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                  <Field
                    type="password"
                    name="password"
                    id="loginPassword"
                    placeholder="Password"
                    className="input"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                  <div className="forgot">
                    <Link to="/forgot-password" className="forgot">
                      Forgot your password?
                    </Link>
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </button>
                </Form>
              )}
            </Formik>
            <div id="account">
              <h4>
                Don't have an account?{" "}
                <Link to="/signup" className="fw-500">
                  Create account
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Login;
