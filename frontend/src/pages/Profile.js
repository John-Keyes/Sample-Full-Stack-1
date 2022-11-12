import React from 'react';
import ProfileSettings from '../components/ProfileSettings';
import GlobalStyles from '../Styles/GlobalStyles';

const Profile = () => {
    return (
        <div style={GlobalStyles.contentContainer}>
            <div style={GlobalStyles.innerView}>
                <ProfileSettings/>
            </div>
        </div>
    );
}

export default Profile;
