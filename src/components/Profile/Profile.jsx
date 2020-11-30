import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWall from "./ProfileWall/ProfileWall";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <ProfileWall postsData={props.profilePage.postsData}
                         newPostText={props.profilePage.newPostText}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;