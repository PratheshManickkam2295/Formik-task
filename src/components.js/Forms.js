import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  PhoneNumber: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.PhoneNumber) {
    errors.PhoneNumber = "Required";
  } else if (!/^[0-9\b]+$/i.test(values.PhoneNumber)) {
    errors.PhoneNumber = "Invalid number";
  }

  return errors;
};

function Forms() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="mik">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="heading">Using Formik and Form validation</label>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}></input>
          {formik.errors.name ? (
            <div className="err">
              {formik.touched.name && formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}></input>
          {formik.touched.email && formik.errors.email ? (
            <div className="err">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <input
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PhoneNumber}></input>
          {formik.errors.PhoneNumber ? (
            <div className="err">
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber}
            </div>
          ) : null}
        </div>

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
