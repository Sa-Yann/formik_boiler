import React from 'react';
import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';
import SelectComponent from './SelectComponent';
import RadioButtComponent from './RadioButtComponent';
import CheckBoxComponent from './CheckBoxComponent';
import DatePickerComponent from './DatePickerComponent';

// This Component decide which Form Field needs to be rendered based on specific props used
function FormikControl(controlAllProps) {
    const { controlProps, ...rest } = controlAllProps
    switch(controlProps) {
        case 'inputControl': 
            return <InputComponent {...rest}/>
        case 'textAreaControl': 
            return <TextAreaComponent {...rest}/>
        // case'selectControl': 
        //     return <SelectComponent {...rest} />
        case 'radioControl':
            return <RadioButtComponent {...rest}/>
        // case 'checkboxControl':
        //     return <CheckBoxComponent {...rest}/>
        case 'dateControl':
            return <DatePickerComponent {...rest}/>
        default: return null
    }
}

export default FormikControl
