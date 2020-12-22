import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {Field, reduxForm} from "redux-form";

const ProfileWall = (props) => {

    let postsComponent = props.postsData.map(post => <WallPost text={post.text} likesCount={post.likesCount}
                                                               key={post.id}/>)


    let addPost = (postData) => {
        props.addPost(postData.newPost);
    }


    return (
        <div className="ProfileWall">
            {postsComponent}

            <AddPostReduxForm onSubmit={addPost}/>
        </div>
    );
}

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPost" component="textarea" type="text" placeholder="Type your message"/>
            </div>
            <div>
                <button type="submit">Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPost)

export default ProfileWall;