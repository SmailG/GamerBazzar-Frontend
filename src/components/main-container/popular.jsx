import React, { Component } from 'react';
import Icon from '../common/icons';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'

const Popular = ({ popularGames }) => {

    return (
        <div className="popular">
        <Grid.Row className="popular_menu">
            <h2 className="main_submenu-heading" >Popular games</h2>
            <div className="popular_menu-items">
                <ul>
                    <li>
                        <a href="#">
                            <Icon name="coins" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected" selected={true} /> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="skins" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="topup" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="accounts" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="trading-cards" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="boosting" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon name="items" customClass="popular_menu-icon" selectedClass="popular_menu-icon--selected"/> 
                        </a>
                    </li>
                </ul>
            </div>
        </Grid.Row>

        <Grid.Row className="popular_carousel">
            <AliceCarousel 
            responsive={{
                625: { items: 1 },
                1200: { items: 2 },
                1600: { items: 3 }
            }}
            stagePadding={{
                paddingLeft: 0,
                paddingRight: 20
            }}
            mouseDragEnabled
            items={popularGames} >
                
            </AliceCarousel>
        </Grid.Row>

        <Grid.Row className="popular_buttons">

        </Grid.Row>
</div>
    );
}

export default Popular;