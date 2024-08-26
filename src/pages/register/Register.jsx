import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {
  const { createRegisterUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, photo, password, accepted);
    /*
        //another way to get data from a form..
        const form = new FormData(e.currentTarget);
        console.log(form.get('name'))
        console.log(form.get('email'))
    */

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should be at least one Upper Case letters.");
      return;
    }
    else if (!accepted){
      setRegisterError('Please Accept Our terms and conditon')
      return;
    }

    setSuccess("");
    setRegisterError("");

    createRegisterUser(email, password)
      .then((result) => {
        console.log(result.user);
        // setSuccess("User Created Successfully");
        Swal.fire({
          title: 'Success',
          text: 'Registration Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

        updateProfile(result.user, {
          displayName: name,
        })
        .then(() => {
          console.log('Profile Updated')
        })
        .catch( (error)=> {
          console.log(error)
        })

        sendEmailVerification(result.user)
        .then(() => {
          alert('Please check your email and verify your account')
        });

      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });

      
  };
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form className="card-body px-12" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

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
                <span className="label-text text-xl">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="URL"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="m-1">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="" className="ml-2">
                Accept our terms and condition
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Register Now</button>
            </div>
            <div>
              <p>
                Already have an Account? Please
                <Link to="/login" className="hover:underline ml-1">
                  Login!
                </Link>
              </p>
            </div>
          </form>

          {registerError && (
            <p className="text-red-700 text-lg ml-16 mb-2">{registerError}</p>
          )}
          {/* {<p className="text-green-700 text-lg md:ml-36 mb-2">{success}</p>} */}

        </div>
      </div>
    </>
  );
};

export default Register;
