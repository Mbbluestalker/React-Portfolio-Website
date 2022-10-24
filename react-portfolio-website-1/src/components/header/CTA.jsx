import React from 'react'
import CV from '../../assets/AKOREDE_OLAWOLE_RESUME(new).docx.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Cv</a>
      <a href="#contact" className='btn btn-primary'>Hire Me</a>
    </div>
  )
}

export default CTA