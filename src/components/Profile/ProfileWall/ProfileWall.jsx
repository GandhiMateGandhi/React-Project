import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {createRef} from "react";

const ProfileWall = (props) => {

    let postsComponent = props.state.map( post => <WallPost text={post.text} likesCount={post.likesCount}/>)

    let newPost = createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    }

    return (
        <div className="ProfileWall">
            {postsComponent}

            <textarea ref={newPost}/>
            <br/>
            <button type="button" onClick={addPost}>Add Post</button>
        </div>
    );
}

export default ProfileWall;