import React, { Component } from 'react';
import './style.scss';
import SidebarItem from './sidebar-item';
import { Grid } from 'semantic-ui-react';

const SidebarMenu = ({ title, image, alt }) => {

    return (
        <Grid.Column width={3} className="admin-sidebar">
            <SidebarItem />
        </Grid.Column>
    );
}

export default SidebarMenu;