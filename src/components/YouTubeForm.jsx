import './YouTubeForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// formik is used to connect the Form to React
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    nameInput: 'SaiYann',
    emailInput: '',
    channelInput: '',
    commentsInput: '',
    adress: ''
};

const onSubmit =  values => { 
    console.log("🚀 ~ file: YouTubeForm.jsx ~ line 13 ~ YouTubeForm ~ values", values)
    }


const validationSchema = Yup.object({
    nameInput: Yup.string().required('Requiered Field Yup'),
    emailInput: Yup.string().email('Invalid Email Format Yup').required('A valide Email is required'),
    channelInput: Yup.string().required('Existing Channel Required Yup')

})

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
                <ErrorMessage name="emailInput"/>
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
                />
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
                        console.log('props from: ', props)
                        const {field, form, meta} = props
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
                

            <button type="submit">Submit</button>
            </Form>
            
        </Formik>
    )
}
export default YouTubeForm