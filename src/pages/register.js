import React, { useState } from "react";

const Register = () => {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    nameErr: "",
    usernameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });

    switch (name) {
      case "email":
        setErrors({
          ...errors,
          emailErr: !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            ? "Please enter a valid email address"
            : "",
        });
        break;
      case "name":
        setErrors({
          ...errors,
          nameErr: value.length === 0 ? "This field is required" : "",
        });
        break;
      case "username":
        setErrors({
          ...errors,
          usernameErr: value.includes(" ")
            ? "Username should not contain spaces"
            : "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          passwordErr: !value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
          )
            ? "Password must be at least 8 characters long, contain at least one lowercase, one uppercase, one digit and one special character"
            : "",
        });
        break;
      case "confirmPassword":
        setErrors({
          ...errors,
          confirmPasswordErr:
            value !== details.password ? "Passwords do not match" : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.emailErr &&
      !errors.nameErr &&
      !errors.usernameErr &&
      !errors.passwordErr &&
      !errors.confirmPasswordErr
    ) {
      e.preventDefault();
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${errors.emailErr && "border-danger"}`}
            name="email"
            value={details.email}
            onChange={(e) => handleForm(e)}
          />
          <p className="text-danger">{errors.emailErr}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.nameErr && "border-danger"}`}
            name="name"
            value={details.name}
            onChange={(e) => handleForm(e)}
          />
          <p className="text-danger">{errors.nameErr}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className={`form-control ${errors.usernameErr && "border-danger"}`}
            name="username"
            value={details.username}
            onChange={(e) => handleForm(e)}
          />
          <p className="text-danger">{errors.usernameErr}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.passwordErr && "border-danger"}`}
            name="password"
            value={details.password}
            onChange={(e) => handleForm(e)}
          />
          <p className="text-danger">{errors.passwordErr}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPasswordErr && "border-danger"
            }`}
            name="confirmPassword"
            value={details.confirmPassword}
            onChange={(e) => handleForm(e)}
          />
          <p className="text-danger">{errors.confirmPasswordErr}</p>
        </div>

        <button
          disabled={
            errors.emailErr ||
            errors.nameErr ||
            errors.usernameErr ||
            errors.passwordErr ||
            errors.confirmPasswordErr
          }
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
