import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Fullname is required'),
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
});

const onSubmit = (data) => {
  console.log("Submitted", data);
  fetch("https://api.com/api/register", {
    method: "POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":"bearer"
    }
  })
}

const initialFormValues = {
  fullname: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (data) => {
      setSubmittedData((prevData) => [...prevData, data]);
      formik.resetForm();
    },
  });

  return (
    <div className="register-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group"> <hr></hr>
		<h1 className='name'>Registration Form</h1> <hr></hr>
          <label className='n1'>Full Name : </label>
          <input
            name="fullname"
            type="text"
            className={`form-control${
              formik.errors.fullname && formik.touched.fullname
                ? ' is-invalid'
                : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          <div className="invalid-feedback">
            {formik.errors.fullname && formik.touched.fullname
              ? formik.errors.fullname
              : null}
          </div>
        </div> <br></br>

        <div className="form-group">
          <label htmlFor="username" className='n1'>Username : </label>
          <input
            name="username"
            type="text"
            className={`form-control${
              formik.errors.username && formik.touched.username
                ? ' is-invalid'
                : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="invalid-feedback">
            {formik.errors.username && formik.touched.username
              ? formik.errors.username
              : null}
          </div>
        </div> <br></br>

        <div className="form-group">
          <label htmlFor="email" className='n1'>Email : </label>
          <input
            name="email"
            type="email"
            className={`form-control${
              formik.errors.email && formik.touched.email ? ' is-invalid' : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="invalid-feedback">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </div>
        </div> <br></br>

        <div className="form-group">
          <label htmlFor="password" className='n1'>Password : </label>
          <input
            name="password"
            type="password"
            className={`form-control${
              formik.errors.password && formik.touched.password
                ? ' is-invalid'
                : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="invalid-feedback">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </div>
        </div> <br></br>

        <div className="form-group">
          <label htmlFor="confirmPassword" className='n1'>Confirm Password : </label>
          <input
            name="confirmPassword"
            type="password"
            className={`form-control${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? ' is-invalid'
                : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <div className="invalid-feedback">
            {formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </div> <br></br>

        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            className={`form-check-input${
              formik.errors.acceptTerms && formik.touched.acceptTerms
                ? ' is-invalid'
                : ''
            }`}
            onChange={formik.handleChange}
            checked={formik.values.acceptTerms}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">
            {formik.errors.acceptTerms && formik.touched.acceptTerms
              ? formik.errors.acceptTerms
              : null}
          </div>
        </div> <br></br>

        <div className="form-group">
          <button type="submit" className="btn-btn-primary">
            Register
          </button>
          <button
            type="button"
            className="btn-btn-warning-float-right"
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="submitted-data">
        <h2 className='n1'>Submitted Data</h2>
        {submittedData.map((data, index) => (
          <div key={index} className="submitted-item">
            <pre className='p1'>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;