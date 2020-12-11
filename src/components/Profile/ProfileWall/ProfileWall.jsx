import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {createRef} from "react";

const ProfileWall = (props) => {

    let postsComponent = props.postsData.map(post => <WallPost text={post.text} likesCount={post.likesCount} key={post.id}/>)

    let newPost = createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
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