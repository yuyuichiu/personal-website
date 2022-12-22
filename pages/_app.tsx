import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import type authInterface from '../interfaces/auth'
import LoadingWidget from '../components/LoadingWidget';
import AuthContext from '../context/authContext';
import Cookies from 'js-cookie'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState(1);

  // Authentication Fn --> to extract session data based on Cookie
  async function auth() {
    const authUrl = await `https://maxwellyu-blog.herokuapp.com/api/users/auth/${Cookies.get('token')}`;
    const res = await fetch(authUrl, { method: 'POST', credentials: 'include' })
    if(res.ok){
      const data = await res.json();
      console.log('logging in', data)
      setIsAuth(true);
      setUsername(data.session.user.username);
      setRole(data.session.user.role);
    }
  }

  // Setup Context Provider value
  const authCtx: authInterface = {
    isAuthenticated: isAuth,
    username: username,
    role: role,
    // onLogin and onLogout will be triggered by children on the right time
    onLogin: () => auth(),
    onLogout: () => {
      const url = `https://maxwellyu-blog.herokuapp.com/api/users/auth/${Cookies.get('token')}`;
      fetch(url, { method: 'DELETE', credentials: 'include' })
        .then(() => {
          Cookies.remove("token");
          setIsAuth(false);
          setUsername(null);
          setRole(1);
          router.reload();
        })
    },
  }

  useEffect(() => {
    // Get authentication data based on stored Cookie
    // auth();
    
    // Loading Events on router change
    const routeChangeStartHandler = (url: string) => {
      setIsLoading(true);
    }
  
    const routeChangeEndHandler = (url: string) => {
      setIsLoading(false);
    }
  
    router.events.on('routeChangeStart', routeChangeStartHandler)
    router.events.on('routeChangeComplete', routeChangeEndHandler)
  }, [])


  return <>
    <AuthContext.Provider value={authCtx}>
      <LoadingWidget loading={isLoading}/>
      <Component {...pageProps} />
    </AuthContext.Provider>
  </>
}

export default MyApp
