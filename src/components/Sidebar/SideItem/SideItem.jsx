import './SideItem.scss'
import {NavLink} from "react-router-dom";

const SideItem = ( {item} ) => {
    return (
        <div className="SideItem">
            <NavLink to={item}>{item}</NavLink>
        </div>
    );
}

export default SideItem;