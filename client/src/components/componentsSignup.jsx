const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <div className="userName">
        <label>Email:</label>
        <input type="text" />
        <label>Nickname:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Signup;
