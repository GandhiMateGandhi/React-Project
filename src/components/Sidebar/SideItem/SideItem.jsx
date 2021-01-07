import './SideItem.scss'
import {NavLink} from "react-router-dom";

const SideItem = ( {item, IconPropClass} ) => {
    return (
        <div className={`SideItem ${IconPropClass}`}>
            <NavLink to={item}>{item}</NavLink>
        </div>
    );
}

export default SideItem;