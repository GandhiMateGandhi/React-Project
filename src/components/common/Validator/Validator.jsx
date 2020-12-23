import React from 'react'
import './Validator.scss'

export const required = value => (value ? undefined : 'Required');
export const maxLength = max => value =>
    value && value.length > max ? `Must be maximum ${max} characters` : undefined;
export const minLength = min => value =>
    value && value.length < min ? `Must me minimum ${min} characters` : undefined;

export const textareaField = ({
                                  input,
                                  label,
                                  type,
                                  meta: { touched, error, warning }
                              }) => (
    <div className="TextArea">
        <textarea {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

export const inputField = ({
                               input,
                               label,
                               type,
                               meta: { touched, error, warning }
                           }) => (
    <div className="Input">
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

