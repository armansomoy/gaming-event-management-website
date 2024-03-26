import React, { useContext } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { signUp } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    signUp(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Your Account Is Successfully Created");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />
      <div className="hero py-6">
        <div className="hero-content lg:w-1/2 flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center pt-5 p-3">
              Register your account!
            </h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <label className="label text-center m-auto mb-2">
              <Link
                to="/login"
                className="label-text-alt link link-hover font-semibold text-gray-500"
              >
                Already Have An Account?{" "}
                <span className="text-blue-600">Login!</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
