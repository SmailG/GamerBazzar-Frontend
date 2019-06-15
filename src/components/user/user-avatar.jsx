import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './style.scss';

const UserAvatar = ({ src, alt, size='small', isOnline, user }) => {

    return (
        <div className="user">
            <div className="user_avatar">
                <img className="user_avatar-image" src={src} alt="user-avatar" />
                {isOnline && <div className="user_avatar-online"></div>}

            </div>

            <span className="user_name">{user.name}</span>
        </div>
    );
}

export default UserAvatar;