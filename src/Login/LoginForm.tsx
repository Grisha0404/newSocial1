import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../Reducer/authUsersReducer";
import {AppRootStateType} from "../Redux/redux-store";
import {getUserProfileTC} from "../Reducer/profilePageReducer";

// Shape of form values
interface FormValues {
    email: string;
    password: string;
    rememberMe?: boolean
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
export const InnerForm = () => {
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        // validate: (values: FormValues) => {
        //     let errors: FormikErrors<FormValues> = {};
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!values.email) {
        //         errors.email = 'Invalid email address';
        //     }
        //     return errors;
        // },
        onSubmit: values => {
            const {email, password, rememberMe} = values
            dispatch(loginTC(email, password, rememberMe))
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="email" name="email" onChange={formik.handleChange}
                       value={formik.values.email} placeholder={'Email'}/>
                {/*{touched.email && errors.email && <div>{errors.email}</div>}*/}
            </div>
            <div>
                <input type="password" name="password" onChange={formik.handleChange}
                       value={formik.values.password} placeholder={'password'}/>
                {/*{touched.password && errors.password && <div>{errors.password}</div>}*/}
            </div>
            <div>
                <input type='checkbox' name='rememberMe' onChange={formik.handleChange} style={{width:'50px'}}/>remember me
            </div>
            <button type="submit"
                disabled={status === 'loading'} >
                Sign IN
            </button>
        </form>
    );
};


