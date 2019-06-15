import React, { Component } from 'react';
import './style.scss';
import DefaultAvatarSmall from '../../assets/user/user-default-small.svg';
import UserAvatar from '../user/user-avatar';
import { getCurrencySymbol } from '../../helpers/converters';

const ItemCardRecommended = ({ listing, image, alt, isUserOnline }) => {

    return (
        <div className="recommendation-card">
            <span className="recommendation-card_title">{getCurrencySymbol(listing.currency)}{listing.price}</span>

            <div className="recommendation-card_details">
                <h3 className="recommendation-card_item-details">Watcher's Eye</h3>
               
                <span className="recommendation-card_game-details">
                    Path of exile (Global)
                </span>
        
                <UserAvatar src={DefaultAvatarSmall} user={{name: 'John Doe'}} isOnline={isUserOnline} />

            </div>
        </div>
    );
}

export default ItemCardRecommended ;