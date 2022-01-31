import QuestionCard from "./questionCard";
import React from "react";

export default function QuestionList({ queryTitle }) {

    const [questions, setQuestions] = React.useState([]);
    React.useEffect(() => {
        let abortController = new AbortController();

        async function requestQuestions(title) {
            const res = await fetch(`http://localhost:3001/api/questions?title=${title}`, {
                signal: abortController.signal
            });
            if (!abortController.signal.aborted) {
                let data = await res.json();
                setQuestions(data)
            }
        };
        
        requestQuestions("");
        
        return () => {
            abortController.abort();
        };
    }, []);

    React.useEffect(() => {
        let abortController = new AbortController();

        async function requestQuestions(title) {
            const res = await fetch(`http://localhost:3001/api/questions?title=${title}`, {
                signal: abortController.signal
            });
            if (!abortController.signal.aborted) {
                let data = await res.json();
                setQuestions(data)
            }
        };

        if (queryTitle) {
            requestQuestions(queryTitle);
        }
        
        return () => {
            abortController.abort();
        };
    }, [queryTitle]);
    
    return (
        <div className="questions--section">
            {
                 questions.map(question =>(
                    <QuestionCard
                        title={question.title}
                        author={question.writer.username}
                        key={question.id} id={question.id}
                        responseQty={question.answers.length} />
                        ))
            }
        </div>
    );
}
