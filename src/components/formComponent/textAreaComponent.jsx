import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';


function textAreaComponent(textAreaAllProps) {
    const {label, name, ...rest}= textAreaAllProps
    return (
        <div className="form-Control">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
            
        </div>
    )
}

export default textAreaComponent
