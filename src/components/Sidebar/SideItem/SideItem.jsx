import './SideItem.scss'
import {NavLink} from "react-router-dom";
// import {ReactComponent as ProfileIcon} from '../../../icons/user-solid.svg'

const SideItem = ( {item, IconPropClass} ) => {
    return (
        <div className={`SideItem ${IconPropClass}`}>
            <NavLink to={item}>
                {/*<img src={`./${IconPropClass}.svg`} />*/}
                {item}
            </NavLink>
        </div>
    );
}

export default SideItem;