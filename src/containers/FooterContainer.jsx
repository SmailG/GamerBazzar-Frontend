import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import './FooterContainer.scss';
import Icon from '../components/common/icons.jsx';

const FooterContainer = () => {
    return (
        <Grid>
            <Grid.Row className="footer">
                <Grid.Column className="footer_logo" width={4} verticalAlign="middle">

                </Grid.Column>
                <Grid.Column className="footer_info" width={4} verticalAlign="middle">
                    <div className="info">
                    <ul className="info_list">
                        <li>About us</li>
                        <li>FAQ</li>
                        <li>SUPPORT</li>
                    </ul>
                    </div>
                    <div className="info">
                    <ul className="info_list">
                        <li>CONTACT US</li>
                        <li>support@gaming4living.com</li>
                        <li>+38761041983</li>
                    </ul>
                    </div>
                </Grid.Column>
                <Grid.Column className="footer_social" width={5} verticalAlign="middle">
                    <ul className="social_list">
                        <li>
                           <Icon name="facebook" />
                        </li>
                        <li>
                            <Icon name="twitter" />>
                        </li>
                        <li>
                            <Icon name="viber" />
                        </li>
                        <li>
                            <Icon name="youtube" />
                        </li>
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}


export default FooterContainer;

