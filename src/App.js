import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home";
import Ask from "./views/ask";
import Question from "./views/question";
import Error from "./views/error";
import Layout from "./views/layout";
import Login from "./views/login";
import Register from "./views/register";
import { UserContextProvider } from "./context/UserContext";

function App() {
  
  return (
    <UserContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="questions/ask" element={<Ask />} />
            <Route path="questions/:questionId" element={<Question />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;