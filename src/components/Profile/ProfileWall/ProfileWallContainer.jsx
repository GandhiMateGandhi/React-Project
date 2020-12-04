import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import ProfileWall from "./ProfileWall";

const ProfileWallContainer = (props) => {
    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <ProfileWall onAddPost={onAddPost}
                     onPostChange={onPostChange}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}/>
    );
}

export default ProfileWallContainer;