import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './../TextError';

function RadioButtComponent (radioButtProps) {
    const { label, name, options, ...rest } = radioButtProps

    return (
        <div className="form-Control" style={{display:'flex', marginTop:15, margingBottom:15}}>
            <label style={{marginRight:10}}>{label}</label>
            <Field name={name} {...rest} style={{color:'red'}} className="radioField" >
                {
                    ({field}) => {
                        // console.log("🚀 ~ file: RadioButtComponent.jsx ~ line 13 ~ RadioButtComponent ~ field", field)
                        return options.map( option => {
                            return (
                                <React.Fragment key={option.key}  >
                                    <input
                                        style={{cursor:'pointer'}}
                                        type="radio" 
                                        id={option.value} 
                                        {...field} 
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value} style={{marginRight:15}}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>

        </div>
    )
}
export default RadioButtComponent