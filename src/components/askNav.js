import React from "react";
import { Link } from "react-router-dom";
import useUser from '../hooks/useUser';
import '../assets/components.css'

export default function AskNav() {

    const { isLogged } = useUser();

    return (
        <div className="newquestion--nav">
            <span>Explora preguntas</span>
            {isLogged ? <Link to={`/questions/ask`} alt="presiona para preguntas" className="newquestion--btn">Realiza una pregunta</Link> :
                <Link to={`/login`} alt="presiona para preguntas"className="newquestion--btn" >Realiza una pregunta</Link>}
        </div>
    );
}