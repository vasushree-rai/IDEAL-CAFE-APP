import React from 'react';

const SignIn = () => {
  return (
    <div className="container py-5">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" className="mb-3" />
        <input type="password" placeholder="Password" className="mb-3" />
        <button className="btn-purple">Login</button>
      </form>
    </div>
  );
};

export default SignIn