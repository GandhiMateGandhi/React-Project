import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWall from "./ProfileWall/ProfileWall";

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <ProfileWall />
        </div>
    );
}

export default Profile;