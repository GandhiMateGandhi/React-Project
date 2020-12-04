import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {createRef} from "react";
import {updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const ProfileWall = (props) => {

    let postsComponent = props.postsData.map(post => <WallPost text={post.text} likesCount={post.likesCount}/>)

    let newPost = createRef();

    let onAddPost = () => {
        props.onAddPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.onPostChange(text)
    }

    return (
        <div className="ProfileWall">
            {postsComponent}

            <textarea placeholder='Type your post' ref={newPost} onChange={onPostChange} value={props.newPostText}/>
            <br/>
            <button type="button" onClick={onAddPost}>Add Post</button>
        </div>
    );
}

export default ProfileWall;