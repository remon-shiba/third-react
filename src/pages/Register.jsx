// src/pages/Register.jsx
import { useState } from "react";

const initialForm = {
  firstname: "",
  lastname: "",
  age: "",
  gender: "",
  email: "",
  country: "",
  postal_code: "",
  favorite_color: "",
  job_title: "",
  phone_number: "",
  user_password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.age || formData.age < 1) newErrors.age = "Enter valid age";
    if (!formData.gender) newErrors.gender = "Select gender";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.postal_code)
      newErrors.postal_code = "Postal code is required";
    if (!formData.favorite_color)
      newErrors.favorite_color = "Color is required";
    if (!formData.job_title) newErrors.job_title = "Job title is required";
    if (!formData.phone_number || !/^\d{10,}$/.test(formData.phone_number))
      newErrors.phone_number = "Valid phone required";
    if (!formData.user_password || formData.user_password.length < 6)
      newErrors.user_password = "Min 6 character password";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Submitted Data:", formData);
      // Handle API call here
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="mb-4">Registration Form</h2>
          {/* bangis nito pwede mo iloop yung form fields */}
          <form onSubmit={handleSubmit} noValidate className="row g-3">
            {[
              ["firstname", "First Name", "text"],
              ["lastname", "Last Name", "text"],
              ["age", "Age", "number"],
              ["email", "Email", "email"],
              ["country", "Country", "text"],
              ["postal_code", "Postal Code", "text"],
              ["favorite_color", "Favorite Color", "text"],
              ["job_title", "Job Title", "text"],
              ["phone_number", "Phone Number", "tel"],
              ["user_password", "Password", "password"],
            ].map(([name, label, type]) => (
              <div key={name} className="col-md-6">
                <label className="form-label">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors[name]}</div>
              </div>
            ))}

            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`form-select ${errors.gender ? "is-invalid" : ""}`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="invalid-feedback">{errors.gender}</div>
            </div>

            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
