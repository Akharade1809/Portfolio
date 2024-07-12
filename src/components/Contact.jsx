import React from 'react'
import { CONTACT } from '../constants'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='my-20 text-center text-4xl'>Contact Me</h2>
        <div className="text-center tracking-tighter">
            <p className='my-4 text-2xl font-semibold'> Arjun Kharade</p> 
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4 flex justify-center items-center'>
                <FaPhoneAlt className='mr-2' />
                {CONTACT.phoneNo}
            </p>
            <p className='my-4 flex justify-center items-center'>
                <FaEnvelope className='mr-2' />
                <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
            </p>
        </div>
    </div>
  )
}

export default Contact
