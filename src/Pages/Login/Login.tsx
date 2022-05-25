import React, { useState } from "react";
import { Container, Error } from "./styles";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g,
      "The password must be atleast 8 characters long, contain an uppercase,lowercase and a special caracter"
    )
    .required("Password is required!"),
});

interface UserData {
  isLoggedIn: boolean;
  message?: string;
  loggedUser: {
    cart: string[];
    email: string;
    firstName: string;
    id: number;
    isAdmin: boolean;
    lastName: string;
  };
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  //form submit handler for login
  const submit = (email: string, password: string) => {
    const user = JSON.stringify({
      username: email,
      password,
    });

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // credentials: "include",
      },
      body: user,
    })
      .then((res) => res.json())
      .then((data: UserData) => {
        if (data.isLoggedIn === true) {
          dispatch(authActions.login());
          dispatch(authActions.setUser(data.loggedUser));
          navigate("/");
        }

        if (data.message) {
          console.log(data.message);
          setError(data.message);
          setTimeout(() => {
            setError(null);
          }, 3000);
        }
      })
      .catch((err) => {
        console.log("ooops an error");
        console.log(err);
      });
  };

  interface LoginType {
    email: string;
    password: string;
  }

  const initialValues: LoginType = { email: "", password: "" };

  return (
    <Container>
      <h1>Login</h1>

      {error && <Error>{error}</Error>}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          submit(values.email, values.password);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              placeholder="Email"
              // ref={emailRef}
              name="email"
              type="email"
            />
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}

            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <Error>{errors.password}</Error>
            ) : null}

            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
