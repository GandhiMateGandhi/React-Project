import './ProfileInfo.scss'
import profilePhoto from "../../../img/UserPhoto.jpg"
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    const profilePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className="ProfileInfo">
            <div className="ProfileName">
                <h1>{props.userProfile.fullName}</h1>
            </div>

            <div className="ProfileImage">
                <div className="ProfileImage-Photo">
                    <img src={props.userProfile.photos.large || profilePhoto} alt="Profile"/>
                </div>
                <div className="ProfileImage-Choose">
                    {props.isOwner &&
                    <input onChange={profilePhotoSelected}
                           type="file"
                           name="file"
                           id="file"/>}
                    <label htmlFor="file">Choose image</label>
                </div>
            </div>
            <ProfileStatus status={props.userProfileStatus} updateStatus={props.updateStatus}/>

        </div>
    );
}

export default ProfileInfo;