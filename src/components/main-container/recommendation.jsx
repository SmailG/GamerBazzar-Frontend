import React, { Component } from 'react';
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'
import ItemCardRecommended from '../item-card-recommendation/item-card';

const Recommendation = ({ recommendations }) => {

    return (
        <div className="recommended">
            <Grid.Row className="recommended_heading">
                <h2 className="main_submenu-heading" >Recommendation</h2>
            </Grid.Row>
            <Grid.Row className="recommended_heading">
               <div className="recommended_container">
                    <ItemCardRecommended isUserOnline={true}  listing={{currency: 'USD', price: '11.42'}}/>
                    <ItemCardRecommended   listing={{currency: 'USD', price: '11.42'}}/>
                    <ItemCardRecommended   listing={{currency: 'USD', price: '11.42'}}/>
                    <ItemCardRecommended   listing={{currency: 'USD', price: '11.42'}}/>
                    <ItemCardRecommended   listing={{currency: 'USD', price: '11.42'}}/>
                    <ItemCardRecommended   listing={{currency: 'USD', price: '11.42'}}/>
               </div>
            </Grid.Row>
        </div>
    );
}

export default Recommendation;