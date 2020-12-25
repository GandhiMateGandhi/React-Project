import './Login.scss';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {authLogin, authLogout} from "../../redux/authReducer";
import {inputField, maxLength, minLength, required} from "../common/Validator/Validator";
import {Redirect} from "react-router";

const maxLength25 = maxLength(25);
const minLength2 = minLength(2);

const LoginForm = (props) => {
    return (
        <form className="LoginForm" onSubmit={props.handleSubmit}>
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
            <div>
                <Field component={inputField}
                       name="rememberMe"
                       label="Remember me"
                       type="checkbox"
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div>
                <span>{props.error}</span>
                {props.error && <span>{props.error}</span>}
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/Profile" />
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps, { authLogin, authLogout })(Login);