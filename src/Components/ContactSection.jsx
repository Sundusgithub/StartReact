import React from 'react'
import UserForm from './UserForm'

export default function ContactSection() {
  return (
    <div className='container'>
        <h2 className='text-center mt-5 mb-1'>Contact Us</h2>
        <h5 className='text-center mb-5 text-secondary'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, veritatis! </h5>
     <div className="row">
        <col-md-6>
        <img  className='img-fluid' src="https://img.freepik.com/free-vector/error-404-landing-page-illustration_52683-18233.jpg?q=10&h=200" alt="" srcset="" />
        </col-md-6>
        <col-md-6><UserForm/></col-md-6>
     </div>
    </div>
  )
}
