import { useState } from "react";
import { registerUserDB } from "../services/users";
import {registerSchema} from '../schemas'

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const registerUser = (e)=>{
        e.preventDefault();
        registerSchema.validate({
            name: username,
            password: password,
        }).then( data => {
            registerUserDB({username, password});
        }).catch(function (err) {
            alert(err.errors); 
        });

    }

    return (
      <div className="form--section">
           <form onSubmit={registerUser}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control"  value={username}  id="username" autoFocus name="username" onChange={handleUsernameChange} required />
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
                            <button className="btn btn-success btn-block">Registrate</button>
                          </div>
                    </form>
      </div>
    );
};