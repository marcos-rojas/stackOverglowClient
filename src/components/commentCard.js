import { useEffect } from "react";

export default function CommentCard({ author, body, canBeFav, id, saveFav, fav }) {
    
    useEffect(()=>{
        
    }, []);

    return (
        <div className={`comment--card ${fav? "favorite--comment":""}`}>
            <div>{body}</div>
            <div>
                {canBeFav && <a href="/" onClick={(e) => saveFav(e, id)}>set as favorite</a>}
            </div>
        </div>
    );
}