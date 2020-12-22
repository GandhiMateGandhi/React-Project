import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWallContainer from "./ProfileWall/ProfileWallContainer";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo {...props} updateStatus={props.updateStatus}/>
            <ProfileWallContainer store={props.store}/>
        </div>
    );
}
// userProfile={props.userProfile}
export default Profile;