import React from 'react';
import './YouTubeForm.css';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
// formik is used to connect the Form to React
import * as Yup from 'yup';
import TextError from './TextError';

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

const onSubmit =  values => { 
    console.log("🚀 ~ file: YouTubeForm.jsx ~ line 13 ~ YouTubeForm ~ Form Data", values)
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // to avoid to have the form.errors props fron the Form Component from Formik not populated 
            // with our previously yup error messages before Submit we use and set 
            // the validateOnChange and validateOnBlur methode from The Form Component
            validateOnChange={false}
            validateOnBlur={false}
            >
            
            <Form>
            <h2 className="youtubeForm__title">YouTube Form</h2>
                {/* The Form Component automaticaly handle the : onSubmit={formik.handleSubmit}  event*/}
            {/* <form onSubmit={formik.handleSubmit}> */}
            <div className="form-control">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="channel">Channel</label>
                <Field 
                type="text" 
                id="channel" 
                name="channelInput"         
                />
                <ErrorMessage name="channelInput"/>
                {/* {formik.touched.channelInput && formik.errors.channelInput ? (<div className="error" >{formik.errors.channelInput}</div>) : null} */}
            </div>

            <div className="form-control">
                <label htmlFor="comments">Your Comments</label>
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
                <label htmlFor="adress">Your Adress</label>
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
                        console.log(`form Errors: `, form.errors)
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
                                                    
                                                    // extrasInput.lenght >= 2  ? (
                                                    //     <div className="socialAdd_container">
                                                    //         <Field  name={`extrasInput[${index}]`}/>
                                                    //         <button className="minusButton2" type="button" onClick={() => push('')}> [ + ] add Ntwrk</button>
                                                    //         {
                                                    //             index && (
                                                    //                 <button className="plusButton2" type="button" onClick={()=> remove(index)}>[ - ] rmv Ntwrk</button>
                                                    //             )
                                                    //         }
                                                            
                                                    //     </div>
                                                    // ) : (
                                                    //     <div className="socialAdd_container">
                                                    //         <Field  name={`extrasInput[${index}]`}/>
                                                    //         <button className="minusButton2" type="button" onClick={() => push('')}> [ + ] add Ntwrk</button>
                                                    //         {
                                                    //             index && (
                                                    //                 <button className="plusButton2" type="button" onClick={()=> remove(index)}>[ - ] rmv Ntwrk</button>
                                                    //             )
                                                    //         }
                                                    //     </div>
                                                    // )
                                                    // index === null ? (
                                                    //     <div>
                                                    //     <   Field  name={`extrasInput[${index}]`}/>
                                                    //     <   button className="minusButton2" type="button" onClick={() => push('')}> [ + ] add  Another Ntwrk</button>
                                                    //     </div>
                                                    
                                                    // ) : (
                                                    //     <div>
                                                    //         <Field  name={`extrasInput[${index}]`}/>
                                                    //         <button className="minusButton2" type="button" onClick={() => push('')}> [ + ] add Another Ntwrk</button>
                                                    //         <button className="plusButton2" type="button" onClick={()=> remove(index)}>[ - ] rmv This Ntwrk</button>
                                                    //     </div>
                                                    // )
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
           
            <button type="submit">Submit</button>
            </Form>
            
        </Formik>
    )
}
export default YouTubeForm