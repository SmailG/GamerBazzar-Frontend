import React, { Component } from 'react';
import TwitterSocialButton from '../../assets/svg/social-twitter.svg'
import GoogleSocialButton from '../../assets/svg/social-google.svg';
import FacebookSocialButton from '../../assets/svg/social-facebook.svg';

const SvgLoader = ({ name, customClass, selectedClass, selected }) => {

    const getIcon = () => {
        switch (name) {
            case 'twitter-social':
                return TwitterSocialButton;
            case 'facebook-social':
                return FacebookSocialButton;                
            case 'google-social':
                return GoogleSocialButton;
            default:
                break;
        }
    }

    return (
        <img className={customClass + " " + `${selected ? selectedClass : ''}`} src={getIcon()} alt={'icon ' + name}/>
    );
}

export default SvgLoader;