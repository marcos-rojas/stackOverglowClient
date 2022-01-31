export async function saveAnswerDB({questionId, body}) {
  const jwt = window.sessionStorage.getItem('jwt')

    const res = await fetch(`http://localhost:3001/api/questions/${questionId}/answers`, {
        method: "POST",
        body: JSON.stringify({ "answer": { "body": body, "rating": 0 } }),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Authorization": "Bearer " + jwt
        },
    });
    await res.json();
};

export async function saveFavAnswerDB({questionId, favId}) {
  const jwt = window.sessionStorage.getItem('jwt');
    const res = await fetch(`http://localhost:3001/api/questions/${questionId}/${favId}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Authorization": "Bearer " + jwt
        },
    });
   const out = await res.json();
   return out;
};

