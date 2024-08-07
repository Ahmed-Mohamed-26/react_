import React, { useState } from 'react';

const LoginPage = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        emailErr: "",
        passwordErr: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        });

        switch (name) {
            case "email":
                setErrors({
                    ...errors,
                    emailErr: !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "Please enter a valid email address" : ""
                });
                break;
            case "password":
                setErrors({
                    ...errors,
                    passwordErr: value.length < 8 ? "Password must be at least 8 characters long" : ""
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        if (!errors.emailErr && !errors.passwordErr) {
        e.preventDefault();
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
      <>
        <h2>Login</h2>
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
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  errors.passwordErr && "border-danger"
                }`}
                name="password"
                value={details.password}
                onChange={(e) => handleForm(e)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={(e) => toggleShowPassword(e)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-danger">{errors.passwordErr}</p>
          </div>

          <button
            disabled={errors.emailErr || errors.passwordErr}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </>
    );
};

export default LoginPage;

