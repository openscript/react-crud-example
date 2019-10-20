import React from 'react'
import './Modal.css'

interface Props {
  open?: boolean;
}

const Modal: React.FC<Props> = (props) => {
  const classNames = `Modal${props.open ? ' Modal-open' : ''}`;
  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

export default Modal;
