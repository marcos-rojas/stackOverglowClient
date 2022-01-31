import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import CommentList from "./commentsList";
import QuestionCard from "./questionCard";
import { saveAnswerDB } from '../services/answers';
import { getQuestionByIdDB } from '../services/questions';
import '../assets/components.css';

export default function BodySection({ id, isLogged, username }) {

    const [answerList, setAnswerList] = React.useState([]);
    const [isQuestionOwner, setIsOwner] = React.useState(false);
    const [question, setQuestion] = React.useState(null);
    const [newAnswerBody, setNewAnswerBody] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await saveAnswerDB({ "questionId": id, "body": newAnswerBody });
        await requestQuestion();
    };

    React.useEffect(() => {
        requestQuestion();
    }, []);

    const requestQuestion = React.useCallback(async () => {
        const currentQuestion = await getQuestionByIdDB({ "questionId": id });
        setQuestion(currentQuestion);
        setIsOwner(username === currentQuestion.writer.username);
        setAnswerList(currentQuestion.answers);
    }, [id, setIsOwner])

    return (
        <div className="complete--question--section section">
            {question && <QuestionCard
                title={question.title}
                author={question.writer.username}
                key={question.id} id={question.id}
                body={question.body}
                responseQty={question.answers.length} />
            }
            {question &&
                <CommentList list={answerList}
                    fav={question.favoriteAnswer}
                    canBeFav={isQuestionOwner && isLogged} questionId={question.id} />
            }
            {isLogged && <form onSubmit={handleSubmit}>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Realiza un comentario</p>"
                    onReady={editor => {
                        const data = editor.getData();
                        setNewAnswerBody(data);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setNewAnswerBody(data);
                    }}
                />
                <button type="submit" className="custom--btn">Envia respuesta</button>
            </form>}
        </div>
    );
}