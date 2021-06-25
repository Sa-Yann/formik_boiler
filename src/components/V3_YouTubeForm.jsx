import React, {useState} from 'react';
import './YouTubeForm.css';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
// formik is used to connect the Form to React
import * as Yup from 'yup';
import TextError from './TextError';
import Emoji from 'a11y-react-emoji';
// emoji list: https://unicode.org/emoji/charts/full-emoji-list.html



const initialValues = {
    nameInput: '',
    emailInput: '',
    channelInput: '',
    commentsInput: '',
    adress: '',
    socialMedia: {
        facebookInput: '',
        twitterInput:''
    },
    phoneNbInput: ['',''],
    extrasInput: ['']

};

const savedDatas = {
    nameInput: 'Yann Leblond',
    emailInput: 'knt4xyz@gmail.com',
    channelInput: 'Web Develloper ',
    commentsInput: 'Javascript Full Stack : React / Redux / Formik / NextJs / NodeJs / Express / MongoDb / FireBase...',
    adress: 'Paris 75012',
    socialMedia: {
        facebookInput: '',
        twitterInput:''
    },
    phoneNbInput: ['','07 53 85 05 51'],
    extrasInput: ['GitHub: https://github.com/Sa-Yann ']

};

const onSubmit =  (values, onSubmitProps) => { 
    // console.log("🚀 ~ file: V3_YouTubeForm.jsx ~ line 24 ~ onSubmit ~ onSubmitProps", onSubmitProps)
    console.log("🚀 ~ file: YouTubeForm.jsx ~ line 13 ~ YouTubeForm ~ Form Data", values)
    // using the setSubmitting methode to update isSubmitting to false in order to re enable the submit button after submission
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    }

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/




const validationSchema = Yup.object({
    nameInput: Yup.string().required('Requiered Field Yup'),
    emailInput: Yup.string().email('Invalid Email Format Yup').required('A valide Email is required Yup'),
    channelInput: Yup.string().required('Existing Channel Required Yup'),
    // phoneNbInput[1]: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
})
const validateComments = value => {
    // this function gets the value of teh field where the function is Set Up and return the erro message if there s no value
    // NB: after submiting if using the validateOnChange & validateOnBlur methode / Directly if not
    let error 
    if(!value) {
        error= `Are You Sure You don't Want to Leave a Comment?`
    }
    return error
}

function YouTubeForm () {

    const [formValues, setFormValues] = useState(null);

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // });

    // console.log('Form values:', formik.values),
    // console.log('Form errors:', formik.errors)
    // console.log('checking Visited Fields Formik onBlur/formik.touched methode: ', formik.touched)

    return (
        
        <Formik className="youtubeForm"
            // the arguments that were passed to the const formik  from the useFormik hook 
            // are now passed as props to the Formik Component
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // enableReinitialize: it allows the Form to updtade with savedValues after teh form had been initialised
            enableReinitialize
            // to avoid to have the form.errors props fron the Form Component from Formik not populated 
            // with our previously yup error messages before Submit we use and set 
            // the validateOnChange and validateOnBlur methode from The Form Component
            // validateOnChange={false}
            // validateOnBlur={false}
            // 1: Disabling the Submit Button based on the form State without using the dirty prop from formikProps
            // validateOnMount // means validateOnMount={true}
            >
                {/* Integrating a function as children within the main <Formik /> in order to be able to worK its props here called formikProps 
                the fuuction takes props and retrun jsx which in our case is the Form Component*/}
            {   //formikProps is the name that we giove to the Formik component props 
                formikProps => {
                // console.log("🚀 ~ file: V3_YouTubeForm .jsx ~ line 76 ~ YouTubeForm ~ formik", formikProps)
                    return (
                        <Form>

                            <h2 className="youtubeForm__title">Let me Get to Know a bit about You</h2>
                                {/* The Form Component automaticaly handle the : onSubmit={formik.handleSubmit}  event*/}
                            {/* <form onSubmit={formik.handleSubmit}> */}
                            <div className="form-control">
                                <label htmlFor="name">Name<span className="form__starRequired">*</span></label>
                                <Field 
                                // Field handle onChange/onBlur and the value inserted in the input
                                // 1- Field linked up inputs to the Formik Component
                                // 2-Field uses the name attribute value to match up with the Formik State
                                // 3- By Default Field renders an input element
                                type="text" 
                                id="name" 
                                name="nameInput"
                                // Possibility 1
                                // {...formik.getFieldProps('nameInput')} replaces : 
                                // onBlur={formik.handleBlur}
                                // onChange={formik.handleChange}
                                // value={formik.values.nameInput}
                                // Possibility 2 using : {...formik.getFieldProps('nameInput')}
                                // Possibility 3: using : the Field Component
                                />
                                <ErrorMessage name="nameInput" component={TextError}/>
                                {/* <ErrorMessage/> takes care of rendering the error message for the particular field it is attached to */}
                                {/* ErrorMessage handle the conditioning of the rendering error only if the input add been visited an dif the error exists */}
                                {/* {formik.touched.nameInput && formik.errors.nameInput ? (<div className="error" >{formik.errors.nameInput}</div>) : null} */}
                            </div>   

                            <div className="form-control">
                                <label htmlFor="email">Email<span className="form__starRequired">*</span></label>
                                <Field 
                                type="email" 
                                id="email" 
                                name="emailInput"
                                />
                                <ErrorMessage name="emailInput">
                                    {
                                        (errorMsg) => <div className="error">{errorMsg}</div>
                                        // errorMsg prend la valeur emailInput definie dans la const validationSchema     
                                    }
                                </ErrorMessage>
                                {/* {formik.touched.emailInput && formik.errors.emailInput ? (<div className="error" >{formik.errors.emailInput}</div>) : null} */}
                            </div>
                                
                                
                            <div className="form-control">
                                <label htmlFor="channel">Channel<span className="form__starRequired">*</span></label>
                                <Field 
                                type="text" 
                                id="channel" 
                                name="channelInput"         
                                />
                                <ErrorMessage name="channelInput" component={TextError}/>
                                {/* {formik.touched.channelInput && formik.errors.channelInput ? (<div className="error" >{formik.errors.channelInput}</div>) : null} */}
                            </div>
                                
                            <div className="form-control">
                                <label htmlFor="comments">Your Comments<span className="form__starRequired">*</span></label>
                                <Field 
                                    as="textarea"
                                    id="comments"
                                    name="commentsInput"
                                    // we assign teh function validateComments to teh validate prop of the Field Component
                                    validate={validateComments}
                                />
                                <ErrorMessage name="commentsInput" component={TextError}/>
                            </div>
                                
                            <div className="form-control">
                                <label htmlFor="adress">Comapny name</label>
                                <Field 
                                    id="adress"
                                    name="adressInput"
                                >
                                {
                                    (props) => {
                                        // props coming as arguments of the arrow function are used to link the input element render to Formik
                                        // console.log('props from: ', props)
                                        // const {field, form, meta} = props
                                        const {field, meta} = props
                                        return (
                                            <div>
                                                <input type="text" id="adress" {...field}/>
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )   
                                    }
                                }
                                </Field>

                            </div>
                            
                            <div className="form-control">
                                <label htmlFor="facebook">Facebook</label>
                                <Field type="text" id="facebook" name="socialmedia.facebookInput"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="twitter">Twitter</label>
                                <Field type="text" id="twitter" name="socialmedia.twitterInput"/>
                            </div>
                            
                            
                            <div className="form-controlPhNb">
                                <div className="form__primaryPhNb">
                                    <label htmlFor="primaryPhNb" className="labelPhNb">Fix Number</label>
                                    <Field 
                                    type="number"
                                    id="primaryPhNb"
                                    name="phoneNbInput[0]"
                                    />
                                    <ErrorMessage name="phoneNbInput[0]"/>
                                </div>
                                <div className="form__secondaryPhNb">
                                    <label htmlFor="secondaryPhNb" className="labelPhNb">Mobile phone</label>
                                    <Field 
                                    type="number"
                                    id="secondaryPhNb"
                                    name="phoneNbInput[1]"
                                    />
                                    <ErrorMessage name="phoneNbInput[1]"/>
                                </div>
                            </div>
                            
                            <div className="form-controlArray">
                                <label className="labelFieldArray">Click the Icon and Add a Social Network you want us to follow</label>
                                <FieldArray name="extrasInput">
                                    {
                                        fieldArrayProps => {
                                        // console.log("🚀 ~ file: YouTubeForm.jsx ~ line 218 ~ YouTubeForm ~ fieldArrayProps", fieldArrayProps)  
                                        const { form, push , remove} = fieldArrayProps
                                        const {values} = form
                                        const {extrasInput} = values
                                        // console.log(`form Errors: `, form.errors)
                                        // console.log("🚀 ~ file: YouTubeForm.jsx ~ line 223 ~ YouTubeForm ~ extrasInput", extrasInput)
                                        
                                            return (
                                                <div className="socialAdd__MainContainer">
                                                    {
                                                        extrasInput.map((item, index) => (
                                                            <div key={index}>
                                                                {

                                                                        <div className="socialAdd_container">
                                                                            <Field  name={`extrasInput[${index}]`}/>
                                                                            {/* By clicking the add field button we push an empty value into the array which generate a new field index which generate a new Field input on the Front end */}
                                                                            <button className="minusButton2" type="button" onClick={() => push('')}> [ + ] add New Ntwrk</button>
                                                                            {index && (
                                                                                    // By clicking the remove field button we use the remove methode from the props to remove the index from the related input out of the extrasNetwork array which make the Field disapear on Front End 
                                                                                    <button className="plusButton2" type="button" onClick={()=> remove(index)}>[ - ] rmv This Ntwrk</button>
                                                                                )}
                                                                        </div>

                                                                }                                                     
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>
                            <div>
                                <button type="button" onClick={() => formikProps.validateField('commentsInput')}>Validate Comments</button>
                                {/* onClick={() => formikProps('commentsInput')} pusch error mesages of a specific fields in the error formikProps property 
                                but not in the touched formikProps so error messages don t display under the inputs after click*/}
                                <button type="button" onClick={() => formikProps.validateForm()}>Validate Form</button>
                                {/* onClick={() => formikProps('commentsInput')} pusch error mesages of a all Folrm fileds demanding validation in the error formikProps property 
                                but not in the touched formikProps so error messages don t display under the inputs after click*/}
                                <button type="button" onClick={() => formikProps.setFieldTouched('commentsInput')}>Visit Comments</button>
                                {/* To be able to display the errir messages we will use either setFileTouched for a specific Filed 
                                o settouched prop to display push all the error messages from the error prop to the touched property of formikProps */}
                                <button 
                                    type="button" 
                                    onClick={() => formikProps.setTouched(
                                        // Need to specify the fields/input we have implemanted errors and that we want the touched prop from formikProps to get filled with
                                        {
                                            nameInput:true,
                                            emailInput: true,
                                            channelInput: true,
                                            commentsInput: true
                                        }
                                    )}
                                >
                                    Check all Fileds Validation Errors
                                </button>
                            </div>
                            
                            <div className="form__SubmitContainer">
        {/* 0: Disabling the Submit Button based on the form State with isValid */}
        {/* isvalid is a property that let us know if the errors props is empty or not 
                            meaning it let us know if there are errors in the way the field got filled in/meaning is erros props empty or not*/}
                            <button type="submit" className="form__Submit" disabled={!formikProps.isValid}>Submit using isValid Only</button>
        {/* 1: Disabling the Submit Button based on the form State using validateonmount with isValid */}
        {/* NB: Methosde suitable for froms with few and simple validation Rules
        this methode will not come handy if some errors are conditionned by external field complition 
        with big form with complexe validation rules it doesn t allways make sense to complete all validation when loading page or form*/}
                            {/* we make submit button do be disable on page load until all errors are squashed: 
                            by adding validateOnMount={true}/validateOnMount property to the Formik component attributs 
                            which allow the check of all field on refresh and then popul;ate teh error prop form formikProps
                            with all the error message which turns the isValid methode to false  and able our submit button 
                            !formikProps.isValid means formikProps.isValid={false} csue is valid as true as default bolean value*/}
                            {/* <button type="submit" className="form__Submit" disabled={!formikProps.isValid}>Submit</button> */}
        {/* 2: Disabling the Submit Button based on the form State using the dirty prop instaead of the validateOnMount as attribut of the Formik Component*/}
        {/* NB: Drawback : the initial form State is always invalid with this methode
        ex: if the form comes with already filled in Fields teh submit button wont a llow the user to submit teh values of the initial state even if user make a change and corect teh change after  */}
                            {/* dirty props allows us to know if at least on field value at been changed since the form was initialiased
                            combined with isValid it allows us to have a Submit button behavior that become clickable only if
                            there had been a change in the */}
                            <button type="submit" className="form__Submit" disabled={!(formikProps.dirty && formikProps.isValid)}>Submit using isValid and dirty</button>

                            </div>
        {/* 3: Disabling the Submit Button when Form submission is in Progress in the background */}
        {/* NB: making sure that the user can't submit the form several times: very useful with account creation or payement forms
        to avoid multiple payments of teh same product for example */}
                            <div className="form__SubmitContainer">
                                <div >
                                    {/* isbummitting allows form submission when there are no errors
                                    NB : Drawback when there is no errors cause of already required fields files in such case a data recuperation to keep on filling the form
                                    and new fileds not requesting erro validation */}
                                    {/* using the setSubmitting methode to update isSubmitting back to false in order to re enable the submit button after submission */}
                                    <button type="submit" className="form__Submit" disabled={!formikProps.isValid || formikProps.isSubmitting}>Submit with isSubmitting</button>

                                    {/* {
                                        formikProps.isSubmitting===true   
                                        // formikProps.values.nameInput !== null ||
                                        // formikProps.values.emailInput !== null ||
                                        // formikProps.values.channelInput !== null ||
                                        // formikProps.values.commentsInput !== null 
                                        && <div className="from__SubmittedOrNot">None of The Form Data were submitted</div> 
                                    } */}
                                </div>
                            </div>
                            <div className="form__SubmitContainer">
                                <button type="submit" className="form__SubmitMeMoji" onClick={()=> setFormValues(savedDatas)}>Get to know me <Emoji symbol="😉" label="winking face"/></button>
                                <button type="reset" className="form__Reset">Reset Form</button>
                            </div>
                            
                            
                        </Form>  
                    )
                }
            }
        </Formik>
    )
}
export default YouTubeForm