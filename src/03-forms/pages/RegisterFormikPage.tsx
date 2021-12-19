import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik</h1> 
            <Formik
                initialValues={{
                    name        : '',
                    email       : '',
                    password1   : '',
                    password2   : ''
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={ 
                    Yup.object({
                        name: Yup.string()
                                      .min(2, 'Debe tener 2 caracteres como minimo')
                                      .max(15, 'Debe tener un maximo de 15 caracteres')
                                      .required('Requerido'),
                        email: Yup.string()
                                  .required('Requerido')
                                  .email('El formato de email no es correcto'),
                        password1: Yup.string()
                                  .min( 6, 'Debe tener 6 caracteres como minimo')
                                  .required('Requerido'),
                        password2: Yup.string()
                                      .oneOf([ Yup.ref('password1')], 'Las constraseñas no son iguales')
                                      .required('Requerido')
                    })
                }
            >
                { ({ handleReset }) => (
                    <Form noValidate>
                        <MyTextInput 
                                label="Name" 
                                name="name"
                                placeholder="Name"
                        />
                        <MyTextInput 
                                label="Email Adrress" 
                                name="email"
                                placeholder="Email Adrress"
                                type="email"
                        />
                        <MyTextInput 
                                label="Password" 
                                name="password1"
                                placeholder="Password"
                                type="password"
                        />
                        <MyTextInput 
                                label="Confirm Password" 
                                name="password2"
                                placeholder="Password"
                                type="password"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={  handleReset }>Reset</button>
                    </Form>

                )}
                
            </Formik>
        </div>
        // <div>
        //     <h1>Register Formik</h1>
        //     <form onSubmit={ handleSubmit } noValidate>

        //         <label htmlFor="name">Name</label>
        //         <input type="text" { ...getFieldProps('name') } />
        //         { touched.name &&  errors.name && <span>{ errors.name }</span> }

        //         <label htmlFor="email">Email</label>
        //         <input type="email" { ...getFieldProps('email') } />
        //         { touched.email && errors.email && <span>{ errors.email }</span> }

        //         <label htmlFor="password1">Password 1</label>
        //         <input type="password" { ...getFieldProps('password1') } />
        //         { touched.password1 && errors.password1 && <span>{ errors.password1 }</span> }

        //         <label htmlFor="password2">Password 2</label>
        //         <input type="password" { ...getFieldProps('password2') } />
        //         { touched.password2 && errors.password2 && <span>{ errors.password2 }</span> }

        //         <button type="submit">Create</button>
        //         <button type="button" onClick={  () => resetForm() }>Reset</button>

        //     </form>
        // </div>
    )

    // return (
    //     <div>
    //         <h1>Register Formik Page</h1>
    //         <form noValidate onSubmit={ onSubmit }>
    //             <input 
    //                 type="text"
    //                 placeholder="name"
    //                 name="name"
    //                 value={ name }
    //                 onChange={ onChange }
    //                 className={`${ name.trim().length <= 0 && 'has-error' }`}
    //             />
    //             { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }
    //             <input 
    //                 type="email"
    //                 placeholder="email"
    //                 name="email"
    //                 value={ email }
    //                 onChange={ onChange }
    //                 className={`${ !isValidEmail(email) && 'has-error' }`}
    //             />
    //             { !isValidEmail(email) && <span>El email no es correcto</span> }
    //             <input 
    //                 type="password"
    //                 placeholder="password"
    //                 name="password1"
    //                 value={ password1 }
    //                 onChange={ onChange }
    //             />
    //             { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
    //             { password1.trim().length < 6 && password1.trim().length > 0 && <span>El password tiene que tener 6 caracteres o más </span> }
    //             <input 
    //                 type="password"
    //                 placeholder="Repeat Password"
    //                 name="password2"
    //                 value={ password2 }
    //                 onChange={ onChange }
    //             />
    //             { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
    //             { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser identicas </span> }
    //             <button type="submit">Create</button>
    //             <button type="button" onClick={ resetForm }>Reset</button>
    //         </form>
    //     </div>
    // )
}

