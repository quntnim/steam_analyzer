import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import img from './img/logo.png'

const Layout = () => {
    return (
        <body className="pad">
            <div>
                <nav className="nav">
                    <div className="navbar_logo">
                    <img className="navlogo" src={img}/>
                    <a href="/" className="navtxt">Steam Analyst</a>
                    </div>
                    <div className="btncont">
                        <Link to ="/login">
                            <button className='btn'>
                                <span className='btncol'>로그인</span>
                            </button>
                        </Link>
                    </div>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </body>
    )
}

export default Layout