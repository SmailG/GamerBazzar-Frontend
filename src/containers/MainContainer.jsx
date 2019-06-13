import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'
import './MainContainer.scss';
import Icon from '../components/common/icons.jsx';
import ItemCard from '../components/item-card/item-card';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

class MainContainer extends Component {

    render() {
        return (
            <Grid>
            <Grid.Row className="main">
                <Grid.Column className="main_content" width={16} verticalAlign="middle">
                   <div className="main_text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed sagittis faucibus velit eget eleifend. 
                    </p>
                   </div>
                   <div className="main_buttons">
                       <Button>
                            BUY GOODS
                       </Button>

                       <Button >
                            SELL GOODS
                       </Button>
                   </div>
                </Grid.Column>
            </Grid.Row>

            <div className="popular">
                    <Grid.Row className="popular_menu">
                        <h2 className="popular_menu-heading" >Popular games</h2>
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
                        items={this.props.popularGames} >
                            
                        </AliceCarousel>
                    </Grid.Row>

                    <Grid.Row className="popular_buttons">

                    </Grid.Row>
            </div>

            <Grid.Row className="recommended">
            </Grid.Row>
        </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    console.log(state.contextsUIstate.getIn(['global', 'windowWidth']));
    return{
        popularGames: [
            <ItemCard title="WORLD OF WARCRAFT" />,
            <ItemCard />,
            <ItemCard />,
            <ItemCard />,
            <ItemCard />,
            <ItemCard />,
        ],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

