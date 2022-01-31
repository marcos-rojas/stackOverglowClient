import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Portada from '../components/portada';

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Portada/>
            <Outlet />
        </div>
    );
  }