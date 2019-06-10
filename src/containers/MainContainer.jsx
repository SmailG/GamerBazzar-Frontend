import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

class MainContainer extends Component {
    render() {
        return (
            <Grid>
            <Grid.Row className="main">
                <Grid.Column className="main_content" width={16} verticalAlign="middle">
                   
                </Grid.Column>
            </Grid.Row>

            <Grid.Row className="popular">
            </Grid.Row>

            <Grid.Row className="recommended">
            </Grid.Row>
        </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

