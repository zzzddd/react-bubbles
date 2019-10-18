import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
const Login = props => {
    const [form, setForm] = React.useState({ username: "", password: "" });
    const handleChanges = e => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/login", form)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubblepage");
          setForm({ username: "", password: "" });
        })
        .catch(err => {
          console.log(err.response);
          setForm({ username: "", password: "" });
        });
    };
  // if (localStorage.getItem("token")) return <Redirect to="/bubblepage" />;

  return (
    <>
      <form onSubmit={login}>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        {/* username */}

        <input
          type="text"
          name="username"
          onChange={handleChanges}
          value={form.username}
          placeholder="Enter user name"
        />

        {/* password */}
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          value={form.password}
          placeholder="Enter password"
        />

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
