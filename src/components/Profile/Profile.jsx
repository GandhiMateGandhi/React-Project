import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWall from "./ProfileWall/ProfileWall";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <ProfileWall state={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;