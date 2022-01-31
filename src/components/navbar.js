import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from '../hooks/useUser';
import '../assets/components.css'

export default function Navbar() {
    const {isLogged, logout} = useUser();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function redirectSearch(e){
        e.preventDefault();
       navigate(`/?title=${searchTerm}`);
    }
    return (
        <nav className="overglow--navbar">
                <Link
                    to={`/`}
                    className="navbar-brand nav--title">stackOverglow</Link>
                <div className="overglow--stack">
                    <form className="d-flex overglow--searcher" onSubmit={redirectSearch}>
                        <input
                            className="form-control"
                            type="search"
                            value={searchTerm}
                            onChange={(e)=>{setSearchTerm(e.target.value)}}
                            placeholder="Search something"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    {isLogged ?
                        (<div className="nav-item"><Link to={`/`} onClick={logout}>Log out</Link></div>)
                        : (
                            <>
                                <div className="nav-item">
                                    <Link to={`/login`}>Login</Link>
                                </div>
                                <div className="nav-item">
                                    <Link to={`/register`}>Register</Link>
                                </div>
                            </>
                        )
                    }

                </div>
        </nav>
    );
}