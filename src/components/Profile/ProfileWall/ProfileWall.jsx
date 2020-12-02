import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {createRef} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const ProfileWall = (props) => {

    let postsComponent = props.postsData.map(post => <WallPost text={post.text} likesCount={post.likesCount}/>)

    let newPost = createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (
        <div className="ProfileWall">
            {postsComponent}

            <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}/>
            <br/>
            <button type="button" onClick={addPost}>Add Post</button>
        </div>
    );
}

export default ProfileWall;