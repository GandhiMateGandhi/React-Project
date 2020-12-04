import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWallContainer from "./ProfileWall/ProfileWallContainer";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <ProfileWallContainer store={props.store}/>
        </div>
    );
}

export default Profile;