import './WallPost.scss'
import profilePhoto from "../../../../img/UserPhoto.jpg"
import Loader from "../../../common/Loader/Loader";

const WallPost = (props) => {
    // if (!props.userProfile) {
    //     return <Loader/>
    // }
    return (
        <div className="WallPost">
            <div className="WallPost-Photo">
                <img src={props.userProfile.photos.small || profilePhoto} alt="User Profile"/>
            </div>
            <div>{props.text}</div>
            <div>Likes: {props.likesCount}</div>
        </div>
    );
}

export default WallPost