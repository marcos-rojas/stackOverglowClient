import { useParams } from "react-router-dom";
import React from "react";
import useUser from '../hooks/useUser';
import AskNav from "../components/askNav";
import BodySection from "../components/bodySection";
import '../assets/layout.css';

export default function Question() {
  let params = useParams();

  const { isLogged, username } = useUser();

  return (
    <main className="question--section section">
      <AskNav />
      <BodySection id={params.questionId} isLogged={isLogged} username={username}/>
      {!isLogged && <div className="logeate--billboard">Logeate para dejar tu comentario</div>}
    </main>
  );
}