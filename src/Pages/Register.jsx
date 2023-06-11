import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../Context/Firebase-context'


const RegisterPage = () => {
  const firebase = useFirebase()
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const Navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault()
    await firebase.signupUserWithEmailAndPassword(Email, Password)
  }
  useEffect(() => {
    if (firebase.isLoggedIn) {
      console.log(firebase)
      Navigate('/')
    }
  }, [firebase, Navigate])

  return (
    <div className='container' >
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label >Email address</Form.Label>
          <Form.Control onChange={e => setEmail(e.target.value)} value={Email} type="email" placeholder='Enter Email' />
          <Form.Text className="form-text">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} value={Password} type="password" placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type="submit" >
          Create Account</Button>
      </Form>
    </div>
  )
}

export default RegisterPage