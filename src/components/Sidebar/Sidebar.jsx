import React from 'react';
import NavItem from './SideItem/SideItem'
import './Sidebar.scss'
import '../../App.css'
import {ReactComponent as ProfileIcon} from '../../icons/user-solid.svg'

const Sidebar = () => {
    return (
        <nav className="Sidebar BackgroundColor">
            {/*<ProfileIcon />*/}
            <NavItem IconPropClass="ProfileIcon" item="Profile" />
            <NavItem IconPropClass="UsersIcon" item="Users" />
            <NavItem IconPropClass="MessagesIcon" item="Messages" />
            <NavItem IconPropClass="NewsIcon" item="News" />
            <NavItem IconPropClass="SettingsIcon" item="Settings" />
            {/*<NavItem item="Main" />*/}
        </nav>
    );
}

export default Sidebar;