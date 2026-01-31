import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./AddEmployee.module.css";
import axios from 'axios';


const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  

  const handleSubmit =async(e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:4000/employee", {
      name,
      email,
      address,
      number
    });

    console.log("Response:", response.data);
alert("Employee saved successfully!");
setName('');
setEmail('');
setAddress('');
setNumber('');
    
  } catch (error) {
    console.error("Submission error:", error);
    alert("Submission failed.");
  }
};

  return (
    <section>
      <div className={`container text-center p-1 m-2 ${style.bg}`}>
        <div className="row justify-content-center">
          <h1>Add Employee Details</h1>
          <div className="col-md-6">
            <nav aria-label="breadcrumb" className="d-flex justify-content-center flex-wrap">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Employee Details
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Student Form */}
      <div className="p-2 mt-2 mb-3 container">
        <form className="text-start p-3 bg-light rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddEmployee;
