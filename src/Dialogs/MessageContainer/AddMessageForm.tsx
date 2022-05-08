import React from "react";
import {Field, Form, Formik} from "formik";

type AddMessageFormType = {
    callBack: (messageTitle: string) => void
}

interface MyFormValues {
    messageTitle: string;
}

export const AddMessageForm: React.FC<AddMessageFormType> = React.memo((props) => {
    const initialValues: MyFormValues = {messageTitle: ''};

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    props.callBack(values.messageTitle)
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <Field id="messageTitle" name="messageTitle" placeholder="new message"/>
                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    );
});