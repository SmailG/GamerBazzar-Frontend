import React, { Component } from 'react';
import './style.scss';

const ItemCardPopular = ({ title, image, alt }) => {

    return (
        <div className="popular-game-card">
            <span className="popular-game-card_title">{title}</span>
            <img className="popular-game-card_avatar" src={image} alt={alt}/>
        </div>
    );
}

export default ItemCardPopular;