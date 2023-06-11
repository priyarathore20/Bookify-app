import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useFirebase } from "../Context/Firebase-context"


const ListIngPage = () => {
  const [Name, setName] = useState()
  const [isbnNumber, setIsbnNumber] = useState()
  const [Price, setPrice] = useState()
  const [coverPhoto, setCoverPhoto] = useState()
  const firebase = useFirebase()

  const HandleSubmit = (e) => {
    e.preventDefault()
    firebase.HandleCreateNewListing(Name, isbnNumber, Price, coverPhoto)
  }
  return (
    <div className='container' >
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label >Enter Book Name </Form.Label>
          <Form.Control onChange={e => setName(e.target.value)} value={Name} type="text" placeholder='Book Name' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >ISBN</Form.Label>
          <Form.Control onChange={e => setIsbnNumber(e.target.value)} value={isbnNumber} type="text" placeholder='ISBN Number' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Price</Form.Label>
          <Form.Control onChange={e => setPrice(e.target.value)} value={Price} type="number" placeholder='Enter Price' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Upload Cover Photo</Form.Label>
          <Form.Control onChange={e => setCoverPhoto(e.target.files[0])} value={coverPhoto} type="file" />
        </Form.Group>
        <Button variant='success' type="submit" >
          Create</Button>
      </Form>
    </div>
  )
}

export default ListIngPage