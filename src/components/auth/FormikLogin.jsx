import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { loginSchema } from '../schema/schemaLogin';
import { handleSubmit } from '../hook/handleSubmit';
import LoadingComponent from '../loading/LoadingComponent';


function FormikLogin() {

    const setNavigate = useNavigate()

    const initialCredentials = {
        email: "",
        password: "",
    }
    

    return (
        <Formik
            initialValues = { initialCredentials }

            validationSchema = { loginSchema }

            onSubmit = {(values, { setSubmitting }) => handleSubmit(values, { setSubmitting, setNavigate })}
        >
            { props => 
                {
                    const {
                    touched,
                    errors,
                    isSubmitting,
                    } = props

                    return (
                        <Form className='form-login'>
                        <div className='form-login-box'>
                        <label htmlFor="email" className='form-login-box-label'>Correo electronico</label>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            className="form-login-box-input"
                        />
                        {
                            errors.email && touched.email && 
                            (
                            <div className='w-100 form-text d-flex justify-content-center align-items-center'>
                                <p className='text-danger'>{errors.email}</p>
                            </div>
                            )
                        }
                        </div>

                        <div className='form-login-box'>
                        <label htmlFor="Password" className='form-login-box-label'>Contraseña</label>
                        <Field 
                            id="password" 
                            type="password" 
                            name="password"  
                            className="form-login-box-input"
                        />
                        {
                            errors.password && touched.password && 
                            (
                            <div className='w-100 d-flex form-text justify-content-center align-items-center'>
                                <p className='text-danger'>{errors.password}</p>
                            </div>
                            )
                        }
                        </div>
                        <button type="submit" className='form-login-button'>
                        {
                            isSubmitting 
                            ? 
                            <LoadingComponent/> 
                            : 
                            'Acceder'
                        }
                        </button>
                        
                    </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikLogin