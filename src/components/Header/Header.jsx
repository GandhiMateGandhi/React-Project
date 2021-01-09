import './Header.scss'
import '../../App.css'
import {NavLink} from "react-router-dom";
import HeaderLogo from '../../icons/logo.svg'

const Header = (props) => {
    return (
        <header className="Header BackgroundColor">
            <div className="HeaderWrap">
                <div className="HeaderLogo">
                    <img src={HeaderLogo} alt="Logo"/>
                    <span>React Project</span>
                </div>
                <div className="HeaderLogin">
                    {props.isAuth ?
                        <div className="HeaderLogout">
                            <NavLink to={'/Profile'}>{props.login}</NavLink>
                            <button onClick={props.authLogout}>Log out</button>
                        </div> :
                        <NavLink to={'/Login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;