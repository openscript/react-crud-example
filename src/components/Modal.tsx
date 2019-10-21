import React from 'react'
import './Modal.css'

interface Props {
  open?: boolean;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <>
      {props.open ? (
        <div className='Modal'>
          {props.children}
        </div>
      ) : null}
    </>
  )
}

export default Modal;
