import React from "react";
import { Container, Error } from "./styles";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { RegisterType, UserData } from "../../types";

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  surname: yup.string().required("Last name is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email"), null], "Emails must match")
    .required("Please confirm your email!")
    .email("Must be a valid email!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g,
      "The password must be atleast 8 characters long, contain an uppercase,lowercase and a special caracter"
    )
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password!"),
  consent: yup
    .boolean()
    .oneOf([true], "You must agree to terms and conditions"),
});

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //form submit handler for registration
  const submit = (values: RegisterType) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        firstName: values.name,
        lastName: values.surname,
      }),
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
        }
      })
      .catch((err) => console.log(err));
  };

  const initialValues: RegisterType = {
    name: "",
    surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    consent: false,
  };

  return (
    <Container>
      <h1>Register</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field placeholder={"Name"} name="name" />
            {errors.name && touched.name && <Error>{errors.name}</Error>}

            <label htmlFor="surname">Surname:</label>
            <Field placeholder={"Surname"} name="surname" />
            {errors.surname && touched.surname && (
              <Error>{errors.surname}</Error>
            )}

            <label htmlFor="email">Email:</label>
            <Field placeholder={"Email"} name="email" type="email" />
            {errors.email && touched.email && <Error>{errors.email}</Error>}

            <label htmlFor="confirmEmail">Confirm email:</label>
            <Field
              placeholder={"Confirm email"}
              name="confirmEmail"
              type="email"
            />
            {errors.confirmEmail && touched.confirmEmail && (
              <Error>{errors.confirmEmail}</Error>
            )}

            <label htmlFor="password">Password:</label>
            <Field placeholder={"Password"} name="password" type="password" />
            {errors.password && touched.password && (
              <Error>{errors.password}</Error>
            )}

            <label htmlFor="confirmPassword">Confirm password:</label>
            <Field
              placeholder={"Confirm password"}
              name="confirmPassword"
              type="password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Error>{errors.confirmPassword}</Error>
            )}

            <label htmlFor="">I agree to the terms and conditions</label>
            <Field name="consent" type="checkbox" />
            {errors.consent && touched.consent && (
              <Error>{errors.consent}</Error>
            )}

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
