import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Register = () => {
   
        
        const {createnewuser} = useContext(Authcontext)

  const handlesubmit =(e)=>{
    e.preventDefault()
    const from = new FormData(e.target)

    const name = from.get("name")
    const photo = from.get("photo")
    const email = from.get("email")
    const password = from.get("password")
    console.log({name, photo, email, password})

    createnewuser(email, password)
    .then((res)=>{
     const user = res.user;
     console.log(user)
    })
    .catch((error)=> {
      const errorcode = error.code;
      const errorMassage = error.massage;
      console.log(errorcode, errorMassage )

    })
  }
    return (
        <div className="min-h-screen flex justify-center items-center">
             <div className="card bg-base-100 w-full p-10 max-w-lg shrink-0 rounded-none">
                       <h1 className="text-2xl font-semibold mt-3 text-center">Register your account</h1>
             <form onSubmit={handlesubmit} className="card-body">
             <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
               </div>

               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Photo URL</span>
                 </label>
                 <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
               </div>

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
                 <button type="submit" className="btn btn-neutral rounded-none">Register</button>
               </div>
             </form>
             <p>Allready Have An Account ? <Link className="text-orange-400" to="/auth/login">Login</Link></p>
           </div>
        </div>
    );
};

export default Register;