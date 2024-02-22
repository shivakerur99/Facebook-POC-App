import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  // Initialize data state based on isSignInForm
  const [data, setData] = useState(() => {
    if (isSignInForm) {
      return { email: "", password: "" };
    } else {
      return { Name: "", email: "", password: "" };
    }
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  
  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const url = isSignInForm ? "http://localhost:8080/api/auth" : "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.data);
      localStorage.setItem("token", res.data);
      // window.location = "/connection";
      navigate("/connect");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-[#1e4d90] backdrop-opacity-10  w-full h-screen">
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-4/12 absolute p-16 mx-auto my-28 right-0 left-0  bg-white bg-opacity-100 rounded-xl text-white"
        >
          <h1 className="text-xl text-black text-center font-medium p-4">
            {isSignInForm ? "Sign In " : "Create Account"}
          </h1>
          {!isSignInForm && (
            <>
              <label className="text-black">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                onChange={handleChange}
                value={data.Name}
                required
                className="p-3 my-2 w-full rounded-lg text-black bg-gray-200"
              />
            </>
          )}
          <>
            <label className="text-black">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="p-3 my-2 w-full rounded-lg text-black bg-gray-200"
            />
          </>
          <>
            <label className="text-black">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="p-3 my-2  w-full rounded-lg text-black bg-gray-200"
            />
          </>
          <div className="flex">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 my-1  text-blue-600"
              />
            <label className="ml-2 my-1  text-gray-700">Remember Me</label>
          </div>

          <p className="text-red-500 text-lg ">{errorMessage}</p>
          <button
            className="p-3 my-4 bg-blue-800 hover:bg-blue-600 text-white  w-full rounded-lg"
            onClick={handleButtonClick}
            >
            {isSignInForm ? "Login" : "Sign Up"}
          </button>

          <p
            className="py-1 text-black cursor-pointer text-center"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <span>
                New to MyApp?{" "}
                <span className="text-blue-500 hover:text-blue-300">
                  Sign up
                </span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span className="text-blue-500 hover:text-blue-300">Login</span>
              </span>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login;