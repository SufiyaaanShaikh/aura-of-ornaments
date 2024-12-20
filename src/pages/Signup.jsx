import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
      .min(5, "Too Short!")
      .max(20, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });
  return (
    <>
      <div className="form">
        <div className="form-style">
          <div className="left">
            <div className="form-container">
              <h1 className="title">Create Account</h1>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const { name, email, password } = values;
                  setTimeout(() => {
                    // Store user data in localStorage
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);

                    alert("Account created successfully!");

                    // Redirect to login page
                    navigate("/login");
                  }, 500);

                  resetForm();
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form id="signUp">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="input"
                      autoFocus
                      autoComplete="off"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="input"
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
                      placeholder="Password"
                      className="input"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <button type="submit" disabled={isSubmitting}>
                      Create
                    </button>
                  </Form>
                )}
              </Formik>
              <div id="account">
                <h4 className="acc-para fw-500">
                  Already have an account?
                  <Link to={"/login"}>Login</Link>
                </h4>
                
              </div>
            </div>
          </div>
          <div className="right">
            {/* <!-- <img src="../images/form-right.webp" alt=""> --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
