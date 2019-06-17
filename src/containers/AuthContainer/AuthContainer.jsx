import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AuthContainer.scss';
import { Button, Header, Input, Modal, Checkbox } from 'semantic-ui-react'
import SvgLoader from '../../components/common/svg';

class AuthContainer extends Component {
    
    closeHandler = () => {
        this.props.history.push('/');
    }

    getStartedHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/register');
    }

    loginContent = (
        <div className="login-modal">
            <div className="login-modal_header">
                <h2>Login</h2>
            </div>

            <div className="login-modal_social">
                <a className="login-modal_social-btn">
                    <SvgLoader name="facebook-social"/>
                </a>

                <a className="login-modal_social-btn">
                    <SvgLoader name="google-social"/>
                </a>

                <a className="login-modal_social-btn">
                    <SvgLoader name="twitter-social" />
                </a>
            </div>

            <div className="login-modal_form">
                <div className="login-modal_input">
                    <Input placeholder='E-mail Address' />
                </div>

                <div className="login-modal_input">
                    <Input placeholder='Password' />
                </div>

                <div className="login-modal_options">
                    <Checkbox className="login-modal_keep-logged" label={'Keep me logged in'} />
                    <span className="login-modal_reset-password">
                        <a href="">{'Forgot your password?'}</a>
                    </span>
                </div>

                <div className="login-modal_submit">
                    <Button>
                        LOGIN
                    </Button>
                    <span>
                        {'Not a member yet? Click here to'}
                        <a onClick={this.getStartedHandler} href="">{' Get started'}</a>
                    </span>
                </div>
            </div>
        </div>
    );

    registrationContent = (
       <div className="registration-modal">

       </div>
    );
    
    render() {
        const { history } = this.props;
        let mode = this.props.location.pathname === '/login' ? 'login' : 'register'

        return (
            <Modal
                size={"small"}
                className="auth-modal"
                defaultOpen
                centered={false}
                onClose={this.closeHandler}
                >
                    {mode === 'login' ? this.loginContent : this.registrationContent}
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

