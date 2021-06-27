import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';


function SelectComponent(selectAllProps) {
    const {label, name, options, ...rest} = selectAllProps
    return (
        <div className="form-Control">
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                {
                    // NEED TO FIX THE MAP BUG
                    options.map( option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/> 
        </div>
    )
}

export default SelectComponent
