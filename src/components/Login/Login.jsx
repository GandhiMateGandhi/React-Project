import './Login.scss';
import '../common/Validator/Validator.scss'
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {authLogin, authLogout, getCaptchaUrl} from "../../redux/authReducer";
import {inputField, maxLength, minLength, required} from "../common/Validator/Validator";
import {Redirect} from "react-router";

const maxLength25 = maxLength(25);
const minLength2 = minLength(2);

const LoginForm = (props) => {
    const { handleSubmit, pristine, submitting, captchaUrl } = props;
    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
            <div>
                <Field component={inputField}
                       validate={[required, maxLength25, minLength2]}
                       name="email"
                       label="Email"
                       type="text"
                />
            </div>
            <div>
                <Field component={inputField}
                       validate={[required, maxLength25, minLength2]}
                       name="password"
                       label="Password"
                       type="password"
                />
            </div>
            <div className="RememberMeForm">
                <Field component={inputField}
                       name="rememberMe"
                       label="Remember me"
                       type="checkbox"
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="Captcha"/>}
            {captchaUrl &&
            <div>
                <Field component={inputField}
                       validate={[required, maxLength25, minLength2]}
                       name="captcha"
                       label="Captcha"
                       type="text"
                />
            </div>}
            <div className="Error Error_input">
                <button type="submit" disabled={pristine || submitting}>Login</button>
                {props.error && <span>{props.error}</span>}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to="/Profile"/>
    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { authLogin, authLogout, getCaptchaUrl })(Login);