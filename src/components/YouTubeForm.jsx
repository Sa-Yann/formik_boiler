import './YouTubeForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    nameInput: '',
    emailInput: '',
    channelInput: ''
};

const onSubmit =  values => { 
    // console.log("🚀 ~ file: YouTubeForm.jsx ~ line 13 ~ YouTubeForm ~ values", values)
    }

const validate = values => {
//Validating: values.nameImput values.emailInput values.channelInput
    let errors ={}
    // errors.nameImput errors.emailInput errors.channelInput
    if(!values.nameInput) {
        errors.nameInput= 'Requiered Field';
    }
    if(!values.emailInput) {
        errors.emailInput= 'Requiered Field';
    } 
    else if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( values.emailInput ) === true) {
        errors.emailInput= 'Invalid Email Format';
    }
    if(!values.channelInput) {
        errors.channelInput= 'Existing Channel Required'
    }
    
    return errors
}

const validationSchema = Yup.object({
    nameInput: Yup.string().required('Requiered Field Yup'),
    emailInput: Yup.string().email('Invalid Email Format Yup').required('A valide Email is required'),
    channelInput: Yup.string().required('Existing Channel Required Yup')

})

function YouTubeForm () {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    });

    // console.log('Form values:', formik.values),
    // console.log('Form errors:', formik.errors)
    console.log('checking Visited Fields Formik onBlur/formik.touched methode: ', formik.touched)

    return (
        <div className="youtubeForm">
            
            <h2 className="youtubeForm__title">YouTube Form</h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                name="nameInput"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.nameInput}
                />
                {formik.touched.nameInput && formik.errors.nameInput ? (<div className="error" >{formik.errors.nameInput}</div>) : null}
            </div>   

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="emailInput"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.emailInput}
                />
                {formik.touched.emailInput && formik.errors.emailInput ? (<div className="error" >{formik.errors.emailInput}</div>) : null}
            </div>
                

            <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <input 
                type="text" 
                id="channel" 
                name="channelInput"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.channelInput}
                />
                {formik.touched.channelInput && formik.errors.channelInput ? (<div className="error" >{formik.errors.channelInput}</div>) : null}
            </div>
                

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default YouTubeForm