import React from 'react';
import './YouTubeForm.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './formComponent/FormikControl';


const optionsToSelect = [
    { key: 'Mr/Mme/None' , value: 'Mr,Mme or None'},
    { key: 'Male', value: 'Mr'},
    { key: 'Female', value: 'Mme' },
    { key: 'No Gender', value: 'No Gender' },
]

const radioOptions = [
    {key: 'Mr', value: 'Mr_Gender'},
    {key: 'Mrs', value: 'Mrs_Gender'},
    {key: 'Not Sure', value: 'None_Gender'}
]


const checkBoxOptions = [
    {key: 'Recruteur', value: 'Type 1'},
    {key: 'Prospect', value: 'Type 2'},
    {key: 'Association', value: 'Type 3'}
]
const initialValues = {
    emailFormikControlInput: 'test',
    textAreaFormikControlInput: 'Description test',
    selectOption: '',
    radioOption: '',
    checkBoxOptions: [],
    dateInput: []
}

const onSubmit = values => {
    console.log("🚀 ~ file: FormikContainer.jsx ~ line 11 ~ Allvalues", values)

}

const validationSchema = Yup.object({
    emailFormikControlInput: Yup.string().required('Required'),
    textAreaFormikControlInput: Yup.string().required('Required'),
    // selectOption: Yup.string().required('Required'),
    // radioOptions: Yup.string().required('Required Please Make a Choice')
    checkBoxOptions: Yup.array().required('Required'),
    dateInput: Yup.date().required('Required')
})

function FormikContainer() {

    return (
        <Formik className="youtubeForm"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formikProps => {
                console.log("🚀 ~ file: FormikContainer.jsx ~ line 50 ~ FormikContainer ~ formikProps", formikProps)
                    return (
                        <Form>
                            <FormikControl
                                controlProps="inputControl"
                                type="email"
                                label="Your Email Please"
                                name="emailFormikControlInput"
                            />
                            <FormikControl 
                                controlProps="textAreaControl"
                                label="Describe the Purpose of your Coming in my Zone"
                                name="textAreaFormikControlInput"
                            />
                            {/* <FormikControl
                                controlProps="selectControl"
                                label="Gender"
                                name="selectOption"
                                selectOption={optionsToSelect}
                            /> */}
                            <FormikControl 
                                className="radioButtons"
                                controlProps="radioControl"
                                label="Your Gender"
                                name="radioOption"
                                options={radioOptions}
                            />
                             <FormikControl 
                                // className="radioButtons"
                                controlProps="checkboxControl"
                                label="Offering or Seeking Jobs?"
                                name="checkBoxOption"
                                options={checkBoxOptions}
                            />
                            <FormikControl
                                controlProps="dateControl"
                                label="Please Select an Appointment Date"
                                name="inputDate"
                            />
                            <div className="form__SubmitContainer">
                                {/* <button type="onSubmit" className="form__Submit" disabled={!(formikProps.dirty && formikProps.isValid)}>Submit</button> */}
                                <button type="onSubmit" className="form__Submit" >Submit</button>
                            </div>
                            
                        </Form>

                    )

                }
            }
            
            
        </Formik>
    )
}

export default FormikContainer
