import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterPage = () => {
  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label >Email address</Form.Label>
          <Form.Control type="email" placeholder='Enter Email' />
          <Form.Text className="form-text">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Password</Form.Label>
          <Form.Control type="password" placeholder='Password' />
        </Form.Group>
        <Form.Group className="mb-3 form-check" controlId='formBasicCheckbox'>
          <Form.Check type="checkbox" label='Check Me Out' />
          <Form.Label>Check me out</Form.Label>
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default RegisterPage