import { View, Text } from 'react-native'
import * as Yup from 'yup'

import useAuthContext from '../hooks/use-auth-context'

import Screen from '../components/Screen'

import { FormikButton, FormikInput, FormikForm } from '../components/Formik'

const initialValues = {
  username: '',
  email: '',
  password: '',
}  

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
})

const Signup = ({ navigation }) => {
  const { signup } = useAuthContext()
  const onSubmit = async (values) => {};
  return (
    <Screen>
      <Text>Signup</Text>
      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormikInput name="username" label="Username" />
        <FormikInput name="email" label="Email" />
        <FormikInput name="password" label="Password" secureTextEntry />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Already have an account?</Text>
          <Text onPress={() => navigation.navigate('Login')}>Signin</Text>
        </View>
        <FormikButton>Signup</FormikButton>
      </FormikForm>
    </Screen>
  )
}

export default Signup