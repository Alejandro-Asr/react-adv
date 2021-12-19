import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components'

import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};


for (const input of formJson) {
    initialValues[ input.name ] = input.value;
    
    if ( !input.validations ) continue;
    
    let schema = Yup.string();
    
    for (const rule of input.validations ) {
        if( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido');
        }
        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `El minimo de caractares es ${ (rule as any).value || 2 }` )
        }
        if ( rule.type === 'email' ){
            schema = schema.email('El formato de email no es correcto')
        }
    }
    
    requiredFields[ input.name ] = schema;
    
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {

    console.log(formJson)

    return (
        <div>
            <h1>Dynamyc Form</h1>
            <Formik
                initialValues={ initialValues }
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={ validationSchema }
            >
                { (formik) => (
                    <Form>
                        { formJson.map( ({ type, name, placeholder, label, options }) => {
                            
                            if( type === "input" || type === "password" || type === "email" ) {
                                return <MyTextInput 
                                        key={ name }
                                        type={  type as any } 
                                        name={ name } 
                                        label={ label } 
                                        placeholder={ placeholder } />
                            }else if ( type === "select" ) {
                                return (
                                    <MySelect 
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value="">Select an Option</option>
                                        {
                                            options?.map( ({ id, label}) => (
                                                <option key={ id } value={ id }>{ label }</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }
                            throw new Error (`El Type: ${ type }, no está soportado.`)
                            
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
