import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'

export default function UserForm() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  // const demo =(val) => console.log(val)
  const userLogin =(e) =>{
e.preventDefault();

const payload = {email,password}
console.log(payload)
  }
  return (
    <>
      
    <Form onSubmit={userLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
         {email}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    </>
  )
}
