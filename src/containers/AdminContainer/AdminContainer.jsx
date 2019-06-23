import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminContainer.scss';
import { Button, Header, Input, Modal, Checkbox, GridColumn } from 'semantic-ui-react'
import SvgLoader from '../../components/common/svg';
import { Grid } from 'semantic-ui-react';

import {
} from '../../actions/index';
import { initContextUIstate } from '../../actions/uiActions';
import SidebarMenu from '../../components/admin/sidebar-menu';

class AuthContainer extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
        };
      }

      componentDidMount = () => {
        this.props.initContextUIstate('adminContext', {
            pending: false,
        });
      }


    
    render() {
        const { history } = this.props;

       return (
           <Grid>
               <Grid.Row className="admin main">
                   <SidebarMenu />
                   <Grid.Column width={13} className="admin-content">

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
        initContextUIstate: (ctx, obj) => dispatch(initContextUIstate(ctx, obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

