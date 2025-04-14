import React from 'react';

const SignUp = () => {
  return (
    <div className="container py-5">
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="Name" className="mb-3" />
        <input type="email" placeholder="Email" className="mb-3" />
        <input type="password" placeholder="Password" className="mb-3" />
        <button className="btn-purple">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
