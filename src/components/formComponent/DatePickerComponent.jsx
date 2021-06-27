import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Field, ErrorMessage} from 'formik';
import TextError from './../TextError'

function DatePickerComponent (datePickerAllProps) {
    const { label, name, ...rest} = datePickerAllProps
    // console.log("🚀 ~ file: datePickerComponent.jsx ~ line 9 ~ DatePickerComponent ~ datePickerAllProps", datePickerAllProps)
    return (
        <div className="form-control">
            <label style={{marginTop: 15, marginBottom: 15}}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                    // console.log("🚀 ~ file: datePickerComponent.jsx ~ line 16 ~ DatePickerComponent ~ field", field)
                        const { setFieldValue } = form
                        const  { value } = field
                        return (
                            < DateView 
                                id={name} 
                                {...field} 
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />         
                        )
                            
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>

        </div>
    )

}
export default DatePickerComponent
