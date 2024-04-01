import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password doesn't Match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
      navigate("/dashboard");
    };
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              required
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              required
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <input
            type="email"
            name="email"
            required
            onChange={changeHandler}
            placeholder="Enter email address"
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              //   className="bg-black"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              //   className="bg-black"
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </span>
          </label>
        </div>
        <buttonm type="submit">Create Account</buttonm>
      </form>
    </div>
  );
};

export default SignupForm;
