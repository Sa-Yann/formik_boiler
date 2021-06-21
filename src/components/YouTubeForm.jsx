import './YouTubeForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    nameInput: 'SaiYann',
    emailInput: '',
    channelInput: ''
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
                <ErrorMessage name="nameInput"/>
                {/* <ErrorMessage/> takes care of rendering the error message for the particular field it is attached to */}
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
                

            <button type="submit">Submit</button>
            </Form>
            
        </Formik>
    )
}
export default YouTubeForm