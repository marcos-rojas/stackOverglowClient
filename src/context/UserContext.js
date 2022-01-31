import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {

  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt')
  )
  const [username, setUsername] = useState(
    () => window.sessionStorage.getItem('username')
  )
  return (
    <Context.Provider value={{ jwt, setJWT, username, setUsername}}>
      {children}
    </Context.Provider>
  )
};

export default Context;