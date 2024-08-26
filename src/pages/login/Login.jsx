import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const {signInUser} = useContext(AuthContext);

  const location = useLocation()
  console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        if (result.user.emailVerified) {
          toast.success('Login Successfull!');

          setTimeout(() => {
            navigate(location?.state ? location.state : '/');
          }, 3000);

        }
        else {
          alert("Please verify your email address.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form className="card-body px-12" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Login</button>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
              

            </div>
            <div>
              <p>
                New to this website? Please
                <Link to="/register" className="hover:underline ml-1">
                  Register!
                </Link>
              </p>
            </div>
          </form>
          <p className="m-8 -mt-2 ml-48">
            <button>
              <span className="hover:underline flex text-xl">
                <FcGoogle className="text-3xl mr-1" />
                Google
              </span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
