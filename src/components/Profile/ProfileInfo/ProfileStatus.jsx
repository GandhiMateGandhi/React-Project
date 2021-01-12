import "./ProfileInfo.scss";
import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

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
            {!editMode &&
            <div className="ProfileStatus-Input" onClick={activateEditMode}>
                <p>{props.status || 'Status is empty'}</p>
            </div>}

            {editMode &&
            <div className="ProfileStatus-Input_editMode">
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                       value={status}/>
            </div>}
        </div>
    )
}

export default ProfileStatus;