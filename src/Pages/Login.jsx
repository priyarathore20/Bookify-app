import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFirebase } from '../Context/Firebase-context'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  const firebase = useFirebase()
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const Navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault()
    await firebase.LoginUserWithEmailAndPassword(Email, Password)
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
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} value={Password} type="password" placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type="submit" >
          Login</Button>
      </Form>
      <h2 className='or-heading'>OR</h2>
      <Button variant='danger' type="submit" onClick={firebase.signinWithGoogle}>
        Signin With Google</Button>
    </div>
  )
}

export default LoginPage