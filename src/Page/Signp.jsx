import '../pageStyle/signup.css';
import React, { useState } from 'react';
import '../pageStyle/signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Signing up with:', { name, email, mobile, password });

    setError('');
    setName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-page-container">
      <h2 className="signup-title">Signup</h2>
      {error && <p className="signup-error">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-form-group">
          <label htmlFor="name" className="signup-label">Name</label>
          <input
            type="text"
             placeholder=' Enter Name'
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="email" className="signup-label">Email</label>
          <input
           placeholder=' Enter Email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="mobile" className="signup-label">Mobile Number</label>
          <input
          placeholder=' Enter Mobile Number'
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password" className="signup-label">Password</label>
          <input
           placeholder=' Enter  Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
          <input
           placeholder=' Enter Confirm Password'
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
            required
          />
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="signup-redirect">
        Already have an account? <a href="/login" className="signup-login-link">Login here</a>
      </p>
    </div>
  );
};

export default Signup;
