import React from 'react';
import '../assets/css/login.css'; 
import image3 from '../assets/img/image3.png';
import image2 from '../assets/img/image2.png';
import rigtimage from '../assets/img/rectangle56.png';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic 
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left-panel">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email address :</label>
            <input type="email" required />

            <label>Password :</label>
            <input type="password" required />

            <button type="submit" className="signin-btn">Sign In</button>

            <p className="signup-link">
              Don’t you have account? <a href="/">SignUp</a>
            </p>

            <div className="or-divider">
              <div className="line"></div>
              <div className="or-text">OR</div>
              <div className="line"></div>
            </div>

            <div className="social-buttons">
              <div className="social-button google">
                <img src={image2} alt="Google" />
              </div>
              <div className="social-button facebook">
                <img src={image3} alt="Facebook" />
              </div>
            </div>
          </form>
        </div>
        <div className="right-panel">
          <img src={rigtimage} alt="right-img" style={{alignSelf: 'center', maxHeight: '260px', objectFit: 'contain', margin: 'auto'}} />
        </div>
      </div>
    </div>
  );
};

export default Login;

