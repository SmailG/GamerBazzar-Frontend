import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import './MainContainer.scss';
import ItemCard from '../components/item-card-popular/item-card';
import MainHero from '../components/main-container/mainHero';
import Popular from '../components/main-container/popular';
import Recommendation from '../components/main-container/recommendation';

import TestGameAvatar from '../assets/linage-game-avatar.svg';

class MainContainer extends Component {

    render() {

        const { popularGames } = this.props;

        return (
        <Grid>
            <MainHero />
            <Popular 
                popularGames={popularGames}
            />

            <Recommendation />
        </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return{
        popularGames: [
            <ItemCard title="WORLD OF WARCRAFT" image={TestGameAvatar} />,
            <ItemCard title="LINEAGE" image={TestGameAvatar}/>,
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

