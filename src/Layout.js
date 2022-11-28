import { Outlet } from "react-router-dom";
import './Layout.css';
import img from './img/logo.png'
const Layout = () => {
    return (
        <div>
            <header className="nav">
                <img className="logo" src={img}/>
                <h1>대가리</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout