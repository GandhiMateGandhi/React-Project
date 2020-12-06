import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import ProfileWall from "./ProfileWall";
import {connect} from "react-redux";

const MapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const ProfileWallContainer = connect(MapStateToProps, MapDispatchToProps)(ProfileWall);


export default ProfileWallContainer;