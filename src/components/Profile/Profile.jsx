import './Profile.scss'
import '../../App.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWallContainer from "./ProfileWall/ProfileWallContainer";
import Loader from "../common/Loader/Loader";

const Profile = (props) => {
    if (!props.userProfile) {
        return <Loader/>
    }
    return (
        <div className="Profile BackgroundColor">
            <ProfileInfo {...props}
                         isOwner={props.isOwner}
                         updateStatus={props.updateStatus}/>
            <ProfileWallContainer {...props}/>
        </div>
    );
}
// userProfile={props.userProfile}
export default Profile;