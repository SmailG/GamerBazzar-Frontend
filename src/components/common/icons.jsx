import React, { Component } from 'react';
import TwitterIcon from '../../assets/icons/twitter.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import ViberIcon from '../../assets/icons/viber.svg';

const Icon = ({ name }) => {

    const getIcon = () => {
        switch (name) {
            case 'twitter':
                return TwitterIcon;
            case 'facebook':
                return FacebookIcon;                
            case 'youtube':
                return YoutubeIcon;
            case 'viber':
                return ViberIcon;                
            default:
                break;
        }
    }

    return (
        <img src={getIcon()} alt={'icon ' + name}/>
    );
}

export default Icon;