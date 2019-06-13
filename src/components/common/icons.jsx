import React, { Component } from 'react';
import TwitterIcon from '../../assets/icons/twitter.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import ViberIcon from '../../assets/icons/viber.svg';
import CoinIcon from '../../assets/icons/categories/icon-coin.svg';
import AccountsIcon from '../../assets/icons/categories/icon-accounts.svg';
import BoostingIcon from '../../assets/icons/categories/icon-boosting.svg';
import TopupIcon from '../../assets/icons/categories/icon-topup.svg';
import SkinsIcon from '../../assets/icons/categories/icon-skins.svg';
import TradingCardsIcon from '../../assets/icons/categories/icon-tradingcards.svg';
import ItemsIcon from '../../assets/icons/categories/icon-items.svg';

const Icon = ({ name, customClass, selectedClass, selected }) => {

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
            case 'coins':
                return CoinIcon; 
            case 'accounts':
                return AccountsIcon; 
            case 'boosting':
                return BoostingIcon;
            case 'items':
                return ItemsIcon;
            case 'topup':
                return TopupIcon;
            case 'skins':
                return SkinsIcon; 
            case 'trading-cards':
                return TradingCardsIcon;
            default:
                break;
        }
    }

    return (
        <img className={customClass + " " + `${selected ? selectedClass : ''}`} src={getIcon()} alt={'icon ' + name}/>
    );
}

export default Icon;