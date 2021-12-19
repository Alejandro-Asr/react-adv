import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import { DynamicForm,
         FormikBasicPage,
         RegisterPage,
         RegisterFormikPage,
         FormikYupPage, 
         FormikComponents, 
         FormikAbstraction } from '../03-forms/pages';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                    </ul>
                </nav>
                
                <Routes>
                    <Route path="register" element={  
                       <RegisterPage /> 
                    } />
                    <Route path="formik-basic" element={ 
                        <FormikBasicPage />
                    } />
                    <Route path="formik-yup" element={ 
                        <FormikYupPage />
                    } />
                    <Route path="formik-components" element={ 
                        <FormikComponents />
                    } />
                    <Route path="formik-abstraction" element={ 
                        <FormikAbstraction />
                    } />
                    <Route path="formik-register" element={ 
                        <RegisterFormikPage />
                    } />
                    <Route path="dynamic-form" element={ 
                        <DynamicForm />
                    } />
                    <Route path="users" element={ <h1>Users page</h1> } />
                    <Route path="about" element={ <h1>About page</h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/about" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
