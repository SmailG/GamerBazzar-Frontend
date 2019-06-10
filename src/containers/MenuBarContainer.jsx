import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBarContainer.scss';
import SearchField from '../components/menu-bar/search-field.jsx';
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'

class MenubarContainer extends Component {
    
    handleResultSelect = () => {

    }
    
    handleSearchChange = () => {

    }

    render() {
        return (
            <Grid>
                <Grid.Row className="menubar">

                    <Grid.Column className="menubar_left" width={5} verticalAlign="middle">
                        <span className="logo">
                            <img src="" alt="g4l logo"/>
                        </span>
                        <span>Categories</span>
                        <span>About us</span>
                    </Grid.Column>

                    <Grid.Column className="menubar_main" width={6} verticalAlign="middle">
                        <SearchField fluid={true} handleResultSelect={this.handleResultSelect} handleSearchChange={this.handleSearchChange} />
                    </Grid.Column>

                    <Grid.Column className="menubar_right" width={5} verticalAlign="middle">
                        <div className="menubar_unauthorized">
                            <Button className="menubar_button menubar_button--get-started">GET STARTED</Button>
                            <Button className="menubar_button menubar_button--login">LOGIN</Button>
                        </div>
                    </Grid.Column>

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

export default connect(mapStateToProps, mapDispatchToProps)(MenubarContainer)

