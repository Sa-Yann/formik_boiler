import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';


function CheckBoxComponent(checkBoxAllProps) {
    const { label, name, options, ...rest } = checkBoxAllProps

    return (
        <div className="form-Control" >
            <label style={{marginTop: 15, marginBottom: 15}}>{label}</label>
            <Field name={name} {...rest}  style={{display:'flex'}}>
                {
                    ({field}) => {
                        // NEED TO FIX THE HINCULDE BUG
                        // console.log("🚀 ~ file: RadioButtComponent.jsx ~ line 13 ~ RadioButtComponent ~ field", field)
                       return options.map( option => {
                            return (
                                <div key={option.key}  style={{display: 'flex'}}>
                                    <input
                                        style={{cursor:'pointer'}}
                                        type="checkbox" 
                                        id={option.value} 
                                        {...field} 
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                        style={{marginRight:15}}
                                    />
                                    <label htmlFor={option.value} style={{marginRight:15}}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default CheckBoxComponent
