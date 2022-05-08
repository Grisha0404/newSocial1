import React from 'react';
import {withFormik, FormikProps, FormikErrors, Form, Field} from 'formik';

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {

}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {touched, errors, isSubmitting} = props;
    return (
        <Form>
            <div>
                <Field type="email" name="email"/>
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <Field type="password" name="password"/>
                {touched.password && errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <Field type='checkbox' name='remember me'/>remember me
            </div>
            <button type="submit" disabled={isSubmitting}>
                Sign IN
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!values.email) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },

    handleSubmit: values => {
        // do submitting things
        console.log(values)
    },
})(InnerForm);

const Login = () => (
    <div>
        <MyForm/>
    </div>
);

export default Login;