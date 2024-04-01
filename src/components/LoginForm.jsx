import { React, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
          className="bg-black"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          className="bg-black"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>

        <Link to="#">
          {" "}
          <p>Forgot Password</p>
        </Link>
      </label>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;
