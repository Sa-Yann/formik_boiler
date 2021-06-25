import React from 'react';
import InputComponent from './InputComponent';
import TextAreaComponent from './textAreaComponent';

// This Component decide which Form Field needs to be rendered based on specific props used
function FormikControl(controlAllProps) {
    const { controlProps, ...rest } = controlAllProps
    switch(controlProps) {
        case 'inputControl': return <InputComponent {...rest}/>
        case 'textAreaControl': return <TextAreaComponent {...rest}/>
        case'selectControl':
        case 'radioControl':
        case 'checkboxControl':
        case 'dateControl':
        default: return null
    }
}

export default FormikControl
