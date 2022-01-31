import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from '../hooks/useUser';
import '../assets/layout.css'
import {userSchema} from '../schemas'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, isLogged } = useUser();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    useEffect(() => {
        if (isLogged) navigate('/');
    }, [isLogged, navigate]);

    const logUser = async (e) => {
        e.preventDefault();
        userSchema.validate({
            name: username,
            password: String(password),
        }).then((w) => {
            login({ username, password });
        }).catch(function (err) {
            alert(err.errors); // => ['age must be a number']
        });
        // const valid = await schema.isValid({
        //         name: username,
        //         age: password,
        //     })
        // if(valid){
        //     login({ username, password });
        // }else{
        //     alert('trata de arreglar tu form')
        // }
    }

    return (
        <div className="form--section">
            {/* <form onSubmit={logUser}>
              <label htmlFor="username">Ingresa tu username</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Ingresa tu usuario"/>
              <label htmlFor="password">Ingresa tu contraseña</label>
              <input type="password" value={password} id="password"onChange={handlePasswordChange} placeholder="Ingresa tu contraseña"/>
              <button type="submit">Log In</button>
          </form> */}
            <form onSubmit={logUser}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} id="username" autoFocus name="username" onChange={handleUsernameChange} required />
                    <div className="valid-feedback">
                        Great name
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} id="password" name="password" onChange={handlePasswordChange} required />
                    <div className="valid-feedback">
                        I can't see it
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success btn-block">Log in</button>
                </div>
            </form>
        </div>
    );
};