
export async function getQuestionByIdDB({ questionId }) {
  const res = await fetch(`http://localhost:3001/api/questions/${questionId}`);
  const data = await res.json();
  return data;
};

export async function saveQuestionDB({ title, body }) {

  const jwt = window.sessionStorage.getItem('jwt')

  const res = await fetch(`http://localhost:3001/api/questions`, {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "Authorization": "Bearer " + jwt
    },
  });
  const data = await res.json();
  return data
};

