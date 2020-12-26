import "./ProfileInfo.scss";
import React, {useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className="ProfileStatus">
            {editMode ? <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           value={status}/>
                </div> :
                <div className="ProfileStatus-Input" onClick={activateEditMode}>
                    <p>{props.status || 'Status is empty'}</p>
                </div>
            }


        </div>
    )
}

export default ProfileStatus;