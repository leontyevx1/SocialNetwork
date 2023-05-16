import React, {useEffect, useState} from 'react';

const StatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

        return (
            <div>
                {!editMode &&
                <div>
                    Status: <span onDoubleClick={activateEditMode}
                    >{props.status || "------"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                }
            </div>
        );
};


export default StatusWithHook;