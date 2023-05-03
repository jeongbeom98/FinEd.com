import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Chart from './Chart';

function Profile() {
  const location = useLocation();
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [result, setResult] = useState(localStorage.getItem('result'));
  const name = localStorage.getItem('name') || (email ? email.split('@')[0] : 'User'); // Check for name in local storage if email is falsy
  const [inputValues, setInputValues] = useState({
    fiveYears: '',
    financialGoal: '',
    payDebts: '',
    longTermInvestment: ''
  });

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
      localStorage.setItem('email', location.state.email);
    }
  }, [location.state]);

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem('inputValues')) || {};
    setInputValues(savedValues);
  }, []);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveClick = () => {
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
    alert('Your changes have been saved!');
  };
  return (
    <div className="container">
      <Navbar />
      <main role="main" className="container">
        <h1>{name}'s Knowledge Level</h1>

        <div className="container">
          <div className="row text-white rounded">
            <div className="col-md-5 blog-sidebar mt-4">
              <Chart />
            </div>

            <div className="col">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success ">
                    <h1>Your Financial Goal</h1>
                  </strong>
                  <h3>What do you see yourself in 5 years?</h3>
                  <input className="form-control form-control-lg" type="text" name="fiveYears" value={inputValues.fiveYears} onChange={handleInputChange} />
                  <br />
                  <h3>What is your financial goal?</h3>
                  <input className="form-control form-control-lg" type="text" name="financialGoal" value={inputValues.financialGoal} onChange={handleInputChange} />
                  <br />

                  <h3>How do you want to pay off your debts?</h3>
                  <input className="form-control form-control-lg" type="text" name="payDebts" value={inputValues.payDebts} onChange={handleInputChange} />
                  <br />
                  <h3>How do you plan to invest for the long-term?</h3>
                  <input className="form-control form-control-lg" type="text" name="longTermInvestment" value={inputValues.longTermInvestment} onChange={handleInputChange} />

                  <button className="btn btn-primary mt-4" onClick={handleSaveClick}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
