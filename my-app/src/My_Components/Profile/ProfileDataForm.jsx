import React from 'react';
import classes from "./MyPage/MyPage.module.css";

const ProfileDataForm = ({profile, isOwner, goToEditMode }) => {
    return (
        <form>
            {isOwner && <div><button onClick={goToEditMode}>save</button></div>}
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
        </form>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileDataForm;