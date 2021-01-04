import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required, textareaField} from "../../common/Validator/Validator";


const ProfileWall = (props) => {
    let postsComponent = props.postsData.map(post => <WallPost userProfile={props.userProfile} text={post.text}
                                                               likesCount={post.likesCount}
                                                               key={post.id}/>)

    let addPost = (postData) => {
        props.addPost(postData.newPost);
    }

    return (
        <div className="ProfileWall">
            <AddPostReduxForm onSubmit={addPost}/>
            <div className="WallPostSection">
                {postsComponent}
            </div>
        </div>
    );
}

const maxLength150 = maxLength(150);
const minLength2 = minLength(2);

const AddPost = (props) => {
    return (
        <form className="AddPost" onSubmit={props.handleSubmit}>
            <div className="AddPost-Textarea">
                <Field component={textareaField}
                       validate={[required, maxLength150, minLength2]}
                       name="newPost"
                       label="New post"
                       type="text"
                />
            </div>
            <div className="AddPost-Button">
                <button type="submit">Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPost)

export default ProfileWall;