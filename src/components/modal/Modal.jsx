import React, { useEffect, useRef, useState } from 'react'
import {ImCross} from 'react-icons/im'
import "./modal.scss"

const Modal = (props) => {
    const [active, setActive] = useState(false)

    useEffect(()=>{
        setActive(props.active)
    }, [props.active])
  return (
    <div id={props.id} className={`modal ${active ? 'active': ''}`}>
        {props.children}
    </div>
  )
}

export const ModalContent = (props) =>{
    const contentRef= useRef(null)
    const closeModal=()=>{
        contentRef.current.parentNode.classList.remove('active')
        if(props.onClose) props.onClose
    }

    return(
        <div className='modal__content' ref={contentRef}>
            {props.children}
            <div className='modal__content__close' onClick={closeModal}>
                <ImCross/>
            </div>
        </div>
    )
}

export default Modal