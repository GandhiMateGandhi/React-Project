import './ProfileInfo.scss'
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Loader />
    }
    return (
        <div className="ProfileInfo">
            <h2>{props.userProfile.fullName}</h2>
        </div>
    );
}

export default ProfileInfo;