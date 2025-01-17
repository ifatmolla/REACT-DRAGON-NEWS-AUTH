import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Login  = () => {
  const {userlogin , setUser} = useContext(Authcontext)
  const [error, setError] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const handlesubmit=(e)=> {
    e.preventDefault();
    const form  = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password})
    userlogin(email, password)
    .then(res => {
      const user = res.user;
      setUser(user)
      navigate(location.state ? location.state : "/")
    })
    .catch((err) => {
    setError({...error, log})
    });
  }
    return (
        <div className="min-h-screen flex justify-center items-center">
             <div className="card bg-base-100 w-full p-10 max-w-lg shrink-0 rounded-none">
                <h1 className="text-2xl font-semibold mt-3 text-center">Login your account</h1>
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p>Don't Have An Account ? <Link className="text-orange-400" to="/auth/register">Register</Link></p>
    </div>
        </div>
    );
};

export default Login ;