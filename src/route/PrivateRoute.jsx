import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user , loader} = useContext(Authcontext)
   
    if(loader ){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRoute;