import './ProfileInfo.scss'
import Loader from "../../common/Loader/Loader";
import profilePhoto from "../../../img/UserPhoto.jpg"
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    // if (!props.userProfile) {
    //     return <Loader/>
    // }
    return (
        <div className="ProfileInfo">
            <h2>{props.userProfile.fullName}</h2>
            <div className="ProfileImage">
                <img src={props.userProfile.photos.large || profilePhoto} alt="Profile"/>
            </div>
            <ProfileStatus status={props.userProfileStatus} updateStatus={props.updateStatus}/>

        </div>
    );
}

export default ProfileInfo;