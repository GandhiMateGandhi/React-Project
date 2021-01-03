import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="Header">
            <div className="HeaderLogin">
                {
                    props.isAuth ?
                        <div className="HeaderLogout">
                            <NavLink to={'/Profile'}>{props.login}</NavLink>
                            <button onClick={props.authLogout}>Log out</button>
                        </div> :
                        <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;