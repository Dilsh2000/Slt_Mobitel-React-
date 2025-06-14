import React from "react";
import image1 from '../assets/img/sign.png';
import '../assets/css/signup.css'; 

const SignUp = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left-panel">
          { <img src={image1} alt="Register" width="320" /> }
        </div>
        <div className="right-panel">
          <h2>Register</h2>
          <form>
            <div className="divider"></div>
            <div className="form-row">
              <label htmlFor="userid">User ID</label>
              <input type="text" id="userid" name="userid" required />
            </div>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-row">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
              />
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
