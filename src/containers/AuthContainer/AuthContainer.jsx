import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AuthContainer.scss';
import { Button, Header, Input, Modal, Checkbox } from 'semantic-ui-react'
import SvgLoader from '../../components/common/svg';

import {
    login,
    signup
} from '../../actions/index';
import { initContextUIstate } from '../../actions/uiActions';
import { validateAuthData } from '../../helpers/authHelpers';

class AuthContainer extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            keepLoggedIn: false,
            errors: [],
            mode: ''
        };
      }


    componentDidMount = () => {
        this.props.initContextUIstate('authContext', {
            pending: false,
        });

        this.setState({ mode: this.props.location.pathname === '/login' ? 'login' : 'signup' })
    }
 
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    closeHandler = () => {
        this.props.history.push('/');
    }

    loginHandler = () => {
        const { isValid, errors } = validateAuthData(this.state, this.state.mode);
        console.log(errors);
        if(isValid) this.props.login(this.state.email, this.state.password, this.state.keepLoggedIn);
        else this.setState({
            errors: errors
        })
    }

    signupHandler = () => {
        const { isValid, errors } = validateAuthData(this.state, this.state.mode)
        if(isValid) this.props.signup(this.state.email, this.state.password, this.state.confirmPassword);
        else this.setState({
            errors: errors
        })
        
    }
    
    blurHandler = (e) => {
        validateAuthData(this.state, this.state.mode, e.target.name)
    }

    resetState = () => {
        this.setState({
            email: '',
            password: '',
            confirmPassword: '',
            keepLoggedIn: false,
            errors: []
        });
    }

    modeHandler = (e) => {
        e.preventDefault();
        this.resetState();

        switch (e.target.name) {
            case 'signup':
                this.props.history.push('/register');
                this.setState({ mode: 'signup'})
                break;
            case 'login':
                this.props.history.push('/login');
                this.setState({ mode: 'login'})
                break;
            default:
                break;
        }
    }

    socialLoginHandler = (e) => {
        e.preventDefault();
        console.log('SOCIAL LOGIN');
    }

    loginContent = () => (
        <div className="login-modal">
            <div className="auth-modal_header">
                <h2>Login</h2>
            </div>

            <div className="auth-modal_social">
                <a className="auth-modal_social-btn" onClick={this.socialLoginHandler}>
                    <SvgLoader name="facebook-social"/>
                </a>

                <a className="auth-modal_social-btn" onClick={this.socialLoginHandler}>
                    <SvgLoader name="google-social"/>
                </a>

                <a className="auth-modal_social-btn" onClick={this.socialLoginHandler}>
                    <SvgLoader name="twitter-social"/>
                </a>
            </div>

            <div className="auth-modal_form">
                <div className="auth-modal_input">
                    <Input
                    value={this.state.email}
                    placeholder='E-mail Address'
                    name="email"
                    onChange={this.changeHandler} />
                   {this.state.errors.filter(error => error.field==='email')
                   .map(error => <span key={error.field+'_error'} className="auth-modal_error-message">{error.message}</span>)}
                </div>

                <div className="auth-modal_input">
                    <Input
                    type='password'
                    value={this.state.password}
                    placeholder='Password'
                    name="password"
                    onChange={this.changeHandler} />
                    {this.state.errors.filter(error => error.field==='password')
                    .map(error => <span key={error.field+'_error'} className="auth-modal_error-message">{error.message}</span>)}
                </div>

                <div className="auth-modal_options">
                    <Checkbox
                    name="keepLoggedIn"
                    checked={this.state.keepLoggedIn}
                    onChange={this.changeHandler}
                    className="auth-modal_keep-logged"
                    label={'Keep me logged in'} />
                    <span className="auth-modal_reset-password">
                        <a href="">{'Forgot your password?'}</a>
                    </span>
                </div>

                <div className="auth-modal_submit">
                    <Button onClick={this.loginHandler} >
                        LOGIN
                    </Button>
                    <span>
                        {'Not a member yet? Click here to'}
                        <a name="signup" onClick={this.modeHandler} href="">{' Get started'}</a>
                    </span>
                </div>
            </div>
        </div>
    );

    registrationContent = () => (
        <div className="registration-modal">
            <div className="login-modal">
                <div className="auth-modal_header">
                    <h2>Login</h2>
                </div>

                <div className="auth-modal_social">
                    <a className="auth-modal_social-btn" onClick={this.socialLoginHandler}>
                        <SvgLoader name="facebook-social" />
                    </a>

                    <a className="auth-modal_social-btn"  onClick={this.socialLoginHandler}>
                        <SvgLoader name="google-social" />
                    </a>

                    <a className="auth-modal_social-btn" onClick={this.socialLoginHandler} >
                        <SvgLoader name="twitter-social" />
                    </a>
                </div>

                <div className="auth-modal_form">
                    <div className="auth-modal_input">
                        <Input
                        value={this.state.email}
                        placeholder='E-mail Address'
                        name="email"
                        onChange={this.changeHandler} />
                        {this.state.errors.filter(error => error.field==='email')
                        .map(error => <span key={error.field+'_error'} className="auth-modal_error-message">{error.message}</span>)}
                    </div>

                    <div className="auth-modal_input">
                        <Input
                        type='password'
                        value={this.state.password} 
                        placeholder='Password' name="password"
                        onChange={this.changeHandler} />
                        {this.state.errors.filter(error => error.field==='password')
                        .map(error => <span key={error.field+'_error'} className="auth-modal_error-message">{error.message}</span>)}
                    </div>

                    <div className="auth-modal_input">
                        <Input
                        type='password'
                        value={this.state.confirmPassword} 
                        placeholder='Confirm password'
                        name="confirmPassword"
                        onChange={this.changeHandler} />
                        {this.state.errors.filter(error => error.field==='confirmPassword')
                        .map(error => <span key={error.field+'_error'} className="auth-modal_error-message">{error.message}</span>)}
                    </div>

                    <div className="auth-modal_submit">
                        <Button onClick={this.signupHandler} >
                            SIGN UP
                    </Button>
                        <span>
                            {'By signing up you agree to our '}
                            <a href="">{' Terms of service '}</a>
                            {'and our'}
                            <a href="">{' Privacy policy'}</a>
                        </span>
                    </div>

                    <div className="auth-modal_options">
                        <span className="auth-modal_registered">
                            {'Already have an account ?'}
                            <a name="login" onClick={this.modeHandler} href="">{' Sign in'}</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
    
    render() {
        const { history } = this.props;
        const { mode } = this.state;

       if (this.state) return (
            <Modal
                size={"small"}
                className="auth-modal"
                defaultOpen
                centered={false}
                onClose={this.closeHandler}
                >
                    {mode === 'login' ? this.loginContent() : this.registrationContent()}
            </Modal>
        );
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initContextUIstate: (ctx, obj) => dispatch(initContextUIstate(ctx, obj)),
        login: (email, password, keepLoggedIn) => dispatch(login(email, password, keepLoggedIn)),
        signup: (email, password, confirmPassword) => dispatch(signup(email, password, confirmPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

