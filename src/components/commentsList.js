import React from "react";
import CommentCard from "./commentCard";
import { saveFavAnswerDB } from '../services/answers';

import '../assets/components.css'
export default function CommentList({ list, fav, questionId, canBeFav }) {

    const [favorite, setFavAnswer] = React.useState(fav);
    
    const saveFavoriteAnswer = async (e, id) => {
        e.preventDefault();
        const fav = await saveFavAnswerDB({ "questionId": questionId, "favId": id });
        console.log('mifav',fav)
        setFavAnswer(fav);
    };

    return (
        <div className="comments--section">
            <div className="comments--divider">Revisa algunas respuestas</div>
            {favorite && <CommentCard
                fav={true}
                author={favorite.author}
                body={favorite.body}
                canBeFav={false} />}
            {
                list.filter(answer => {
                    return answer.id !== favorite.id;
                }).map(comment => (
                    <CommentCard
                        saveFav={saveFavoriteAnswer}
                        canBeFav={canBeFav}
                        author={comment.author}
                        body={comment.body}
                        key={comment.id}
                        id={comment.id} />
                ))
            }
        </div>
    );
}
