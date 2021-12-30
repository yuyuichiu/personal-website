import Link from "next/link";
import { useState, useEffect } from 'react';
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import Cookies from "js-cookie";
import router from "next/router";
import { Button } from "react-bootstrap";

const LoginStatusBar: React.FC = () => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/users/login/${Cookies.get("token")}`, {
      method: 'POST',
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setUser(res.session.user.username || "");
      })
      .catch((err) => setUser(""));
  }, [user]);

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("connect.sid");
    setUser('');
  };

  return (
    <>
      {user !== '' && 
        <div className="d-flex align-items-center">
          <BsFillPersonFill size={20} />
          <small className="mx-1">{user}</small>
          <small className="text-secondary" role='button' onClick={logoutHandler}>(Logout)</small>
        </div>
      }

      {user === '' && 
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
