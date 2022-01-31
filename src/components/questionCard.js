import { Link } from "react-router-dom";
import '../assets/components.css'

export default function QuestionCard({ title, id, responseQty, author, body }) {
    // if(body){
    //   document.querySelector('#preg').innerHtml = body;
    // }    
    return (
        <div className="question--card">      
            {!body && <Link to={`/questions/${id}`} className="question--title">{title}</Link>}
            {body && <p  className="question--detail-title">{title}</p>}
            {body && <div className="question--body">{body}</div>}
            <div className="question--stats">
                <p className="answer--counter">{responseQty} respuestas</p>
                <p className="author--name">Escrito por {author}</p>
            </div>
        </div>
    );
}