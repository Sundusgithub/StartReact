import React from 'react'
import UserForm from './UserForm'

export default function ContactSection() {
  return (
    <div className='container'>
        <h2 className='text-center mt-5 mb-1'>Contact Us</h2>
        <h5 className='text-center mb-5 text-secondary'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, veritatis! </h5>
     <div className="row">
        <div className='col-md-6'>
        <img  className='img-fluid' src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-1.jpg" alt="" srcSet="" />
        </div>
        <div className='col-md-6'><UserForm/></div>
     </div>
    </div>
  )
}
