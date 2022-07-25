import Link from "next/link";
import { useContext } from 'react';
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import AuthContext from "../context/authContext";


const LoginStatusBar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => authCtx.onLogout();

  return (
    <>
      {authCtx.isAuthenticated && 
        <div className="d-flex align-items-center">
          <BsFillPersonFill size={20} />
          <span className="mx-1 fst-italic">{authCtx.username}</span>
          <span className="text-secondary" role='button' onClick={logoutHandler}>(<span className='text-danger'>Logout</span>)</span>
        </div>
      }

      {!authCtx.isAuthenticated && 
        <Link href="/login" passHref>
          <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
            <BsPerson size={20} />
            <span className="text-secondary ms-1">login</span>
          </div>
        </Link>}
    </>
  );
};

export default LoginStatusBar;
