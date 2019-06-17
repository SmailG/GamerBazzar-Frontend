import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AuthContainer.scss';
import { Button, Header, Input, Modal, Checkbox } from 'semantic-ui-react'

class AuthContainer extends Component {
    
    closeHandler = () => {
        this.props.history.goBack();
    }

    loginContent = (
        <div>

        </div>
    );

    registrationContent = (
        <div className="login-modal">
            <div className="login-modal_header">
                <h2>Login</h2>
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
                        <a href="">{' Get started'}</a>
                    </span>
                </div>
            </div>

        </div>
    );
    
    render() {
        const { history, mode } = this.props;

        return (
            <Modal
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

