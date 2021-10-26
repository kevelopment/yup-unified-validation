import { IPerson, PersonSchema } from "@types";
import { Field, Form, Formik } from "formik";
import React from "react";
import styles from "./app.module.scss";

const initialPerson = {
  firstName: "",
  lastName: "",
  email: "",
} as IPerson;

export const Person = () => (
  <div>
    <h1>Person</h1>
    <Formik
      initialValues={initialPerson}
      validationSchema={PersonSchema}
      onSubmit={(values) => {
        console.log("submitting: ", { values });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={`${styles.flex} ${styles.column}`}>
            <Field name="firstName" placeholder="FirstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" placeholder="LastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" placeholder="E-Mail" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
