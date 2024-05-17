import { View, Text } from 'react-native'
import * as Yup from 'yup'

import useAuthContext from '../hooks/use-auth-context'

import Screen from '../components/Screen'

import { FormikButton, FormikInput, FormikForm } from '../components/Formik'

const initialValues = {
  email: 'meineemail@gmail.com',
  password: '!MeinPasswort1234!'
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

const Signin = ({ navigation }) => {
  const { login } = useAuthContext()
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values)
    } catch (error) {
      console.error(error)
    }
    setSubmitting(false)
  }
  return (
    <Screen>
      <Text>Signin</Text>
      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormikInput name="email" placeholder="Email" />
        <FormikInput name="password" placeholder="Password" />
        <View>
          <Text>Forgot password?</Text>
          <Text onPress={() => navigation.navigate('Register')}>Don't have an account? Signup</Text>
        </View>
        <FormikButton>Signin</FormikButton>
      </FormikForm>
    </Screen>
  )
}

export default Signin