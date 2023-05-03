import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || occupation.trim() === '') {
      alert('Please fill in all fields before submitting the form.');
    } else {
      // Save the user's name in local storage
      localStorage.setItem('name', name);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h1 className="h3 mb-0">Register</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="occupation">Occupation</label>
                  <select className="form-select" aria-label="Default select example" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                    <option value="">Choose Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                {formSubmitted && <Link to="/quiz" className="btn btn-primary ms-2">Take a Initial Knowledge Test!</Link>}
              </form>
            </div>
            <div className="card-footer">
              <p className="text-muted">
                Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
