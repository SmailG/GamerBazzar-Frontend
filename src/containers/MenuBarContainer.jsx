import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBarContainer.scss';
import SearchField from '../components/menu-bar/search-field.jsx';
import { Search, Grid, Header, Segment, Button, Dropdown } from 'semantic-ui-react'

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
                        <span>
                            <Dropdown text='Category' className="menubar_dropdown">
                                <Dropdown.Menu>
                                    <Dropdown.Item text='New' />
                                    <Dropdown.Item text='Open...'  />
                                    <Dropdown.Item text='Save as...' />
                                    <Dropdown.Item text='Rename'  />
                                    <Dropdown.Item text='Make a copy' />
                                    <Dropdown.Item icon='folder'  />
                                    <Dropdown.Item icon='trash' />
                                    <Dropdown.Divider />
                                    <Dropdown.Item text='Download As...' />
                                    <Dropdown.Item text='Publish To Web' />
                                    <Dropdown.Item text='E-mail Collaborators' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        <span>About us</span>
                        <span>Support</span>
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

