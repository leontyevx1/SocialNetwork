import React, {useState} from 'react';
import classes from './MyPage.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import StatusWithHook from "../../ProfileStatus/StatusWithHook";
import ProfileDataForm from "../ProfileDataForm";

const MyPage = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.currentTarget.files[0]);
        }
    }

    return (
        <div className={classes.mainPart}>
            <div className={classes.photoProfile}>
                {(profile.data.photos.large)
                    ? <img src={profile.data.photos.large} alt="Photo profile"/>
                    : <Preloader/>}
                <div className={classes.changeFile}>
                    {isOwner && <input className={classes.btn} type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.status}>
                    <StatusWithHook status={status} updateStatus={updateStatus}/>
                </div>

                {editMode ? <ProfileDataForm profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode={goToEditMode}}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full Name:</b> {profile.data.fullName}
            </div>
            <div className={classes.info}>
                <b>About Me:</b> {(profile.data.aboutMe) ? (profile.data.aboutMe) : ('Не заполнено!')}
            </div>
            <div>
                <b>Looking for a job:</b> {!profile.data.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.data.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.data.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts:</b> {Object.keys(profile.data.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.data.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}><b>{contactTitle}</b> : {contactValue}</div>
}

export default MyPage;

