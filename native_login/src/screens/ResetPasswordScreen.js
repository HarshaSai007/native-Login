import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { firebase } from '../../config'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')

  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Reset Password Link Sent TO Your Email')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Reset Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive an email with a password reset link."
      />
      <Button
        mode="contained"
        onPress={changePassword}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}
