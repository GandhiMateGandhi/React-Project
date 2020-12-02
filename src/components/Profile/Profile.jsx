import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWall from "./ProfileWall/ProfileWall";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <ProfileWall postsData={props.profilePage.postsData}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;