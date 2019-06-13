import React, { Component } from 'react';
import './style.scss';

const ItemCard = ({ title, image, alt }) => {

    return (
        <div className="item-card">
            <span className="item-card_title">{title}</span>
            <img src="" alt=""/>
        </div>
    );
}

export default ItemCard;