import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="Header">
            <img src="https://i.pinimg.com/originals/a2/9a/b3/a29ab34a61c2f5504cad588f169cd4f3.png"/>
            <div className="Login">
                {props.isAuth ? <a href="">{props.login}</a> :
                    <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;