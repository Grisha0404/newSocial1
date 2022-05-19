import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../Reducer/authUsersReducer";
import {AppRootStateType} from "../Redux/redux-store";

// Shape of form values
type FormikErrorType = {
    email?: string
    password?: string
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
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or less';
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="email" placeholder={'Email'} {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
            </div>
            <div>
                <input type="password" placeholder={'password'}{...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}
            </div>
            <div>
                <input type='checkbox' style={{width: '50px'}} {...formik.getFieldProps('rememberMe')}/>remember me
            </div>
            <button type="submit"
                    disabled={status === 'loading'}>
                Sign IN
            </button>
        </form>
    );
};


