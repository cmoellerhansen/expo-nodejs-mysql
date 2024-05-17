import { Button, CheckBox, Input, Text } from '@rneui/themed';
import { Formik, useFormikContext } from 'formik';

export const FormikInput = ({ name, ...props }) => {
    const { handleChange, handleBlur, values, errors, touched } = useFormikContext();

    return (
        <Input
            value={values[name]}
            onChangeText={handleChange(name)}
            {...props}
        />
    );
};

export const FormikCheckbox = ({ name, ...props }) => {
    const { handleChange, handleBlur, values } = useFormikContext();

    return (
        <CheckBox
            checked={values[name]}
            onPress={() => handleChange(name)(!values[name])}
            onBlur={handleBlur(name)}
            {...props}
        />
    );
}

export const FormikButton = ({ children, ...props }) => {
    const { isSubmitting, handleSubmit } = useFormikContext();
    return (
        <Button onPress={handleSubmit} disabled={isSubmitting} {...props}>
            {children}
        </Button>
    );
}

export const FormikForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
};