import Link from "next/link";
import { useState, useEffect, useContext } from 'react';
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import AuthContext from "../context/authContext";


const LoginStatusBar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => authCtx.onLogout();;

  return (
    <>
      {authCtx.isAuthenticated && 
        <div className="d-flex align-items-center">
          <BsFillPersonFill size={20} />
          <small className="mx-1">{authCtx.username}</small>
          <small className="text-secondary d-none d-md-block" role='button' onClick={logoutHandler}>(Logout)</small>
        </div>
      }

      {!authCtx.isAuthenticated && 
        <Link href="/login" passHref>
          <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
            <BsPerson size={20} />
            <small className="text-secondary ms-1">login</small>
          </div>
        </Link>}
    </>
  );
};

export default LoginStatusBar;
