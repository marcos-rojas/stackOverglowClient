import {useCallback, useContext} from 'react'
import Context from '../context/UserContext'
import {loginService} from '../services/users'

export default function useUser () {
  const {jwt, setJWT, username, setUsername} = useContext(Context);

  const login = useCallback(({username, password}) => {
    loginService({username, password})
      .then(token => {
        window.sessionStorage.setItem('jwt', token);
        window.sessionStorage.setItem('username', username);
        setJWT(token);
        setUsername(username);
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        console.error(err)
      })
  }, [setJWT, setUsername])


  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    window.sessionStorage.removeItem('username')
    setJWT(null)
    setUsername("");
  }, [setJWT, setUsername])

  return {
    isLogged: Boolean(jwt),
    username,
    login,
    logout
  }
} 