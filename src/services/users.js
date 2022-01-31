
export async function registerUserDB({username, password}) {
    const res = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const registereduser = await res.json();
    console.log(registereduser)
    return registereduser;
};

export function loginService ({ username, password }) {
  
  return fetch(`http://localhost:3001/api/login`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { token } = res
    return token;
  })
};
