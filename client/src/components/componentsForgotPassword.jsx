const ForgotPassword = () => {
  return (
    <div className="forgotPasswordContainer1">
      <h1>ForgotPassword</h1>
      <form className="forgotPasswordForm">
        <label className="forgotPasswordLabel">
          Enter your email and nickname to recover your password
        </label>
        <input
          className="forgotPasswordInput"
          type="email"
          placeholder="Email"
        />
        <input
          className="forgotPasswordInput"
          type="text"
          placeholder="nickname"
        />
        <button className="forgotPasswordBtn">Submit</button>

        <div className="forgotPasswordContainer2">
          <p className="forgotPasswordDisplay">"Your password is:"</p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
