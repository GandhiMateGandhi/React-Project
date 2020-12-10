import NavItem from './SideItem/SideItem'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <nav className="Sidebar">
            <NavItem item="Profile" />
            <NavItem item="Messages" />
            <NavItem item="Main" />
            <NavItem item="Users" />
            <NavItem item="News" />
            <NavItem item="Settings" />
        </nav>
    );
}

export default Sidebar;