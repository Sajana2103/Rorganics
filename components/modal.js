import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { SplitText } from 'gsap/dist/SplitText';


const Modal = ({ modalOpen, pageName, openModal, setModalOpen }) => {
  const modalRef = useRef()
  const modalWrapperRef = useRef()
  const modalTl = useRef()
  let splitTextTl = useRef()
  let splitText = useRef()

 

 
  useEffect(() => {
    if(modalWrapperRef.current){
      gsap.registerPlugin(ScrollTrigger,SplitText,ScrollToPlugin)
      modalRef.current = document.querySelector('#modal-content')
      if(modalOpen ){
        setupSplits()
        console.log('modal open modalcomp',modalRef.current)
      } else{
        console.log('modal open modalcomp',modalOpen)
      }
    }
  },[modalOpen,pageName.pageName])
  if (!modalTl.current && modalOpen) {
    modalTl.current = gsap.timeline({ defaults: { duration: 0.4, ease: 'Power4.easeIn' } })
    modalTl.current
    .pause()
    .fromTo('#portal', { display: 'none' }, { display: 'block', duration: 0 })
    .fromTo('.modal-wrapper', { opacity: 0 }, { opacity: 1 })
  }
  if (!modalOpen && modalTl.current) {
    modalTl.current.reverse()
    // return null
  } else if (modalOpen && modalTl.current) {

    modalTl.current.play(0)
    gsap.to(modalRef.current,{scrollTo:0})
  }

  let page
  switch (pageName.pageName) {
    case 'press-release':
      page = ''
      break;
    case 'contact':
      page = ''
      break;
    case 'services':
      page =''
      break;
    default: <div></div>
  }
  console.log(page, modalOpen)
  return ReactDOM.createPortal(
    <div ref={modalWrapperRef} className="modal-wrapper" id="modal-black-area" onClick={(e) => {
      console.log('Modal component pagename: ', e)
      if (e.target.id === 'modal-black-area') {

        if (pageName.location === 'home') openModal()
        else setModalOpen(false)
      }
    }}>
      <div className="modal-container">
        <div className="modalCloseBtnWrapper" id="modal-close" onClick={(e) => {
      console.log('Modal component pagename: ', e)
      if (e.target.id === 'modal-close') {

        if (pageName.location === 'home') openModal()
        else setModalOpen(false)
      }
    }}>
          <div className="modalClose">Close</div> <div className="modalCloseX">X</div>
        </div>
        <div ref={modalRef} className="modal" id="modal-content">

          {page}
        </div>
      </div>
    </div>
    , document.getElementById('portal'))
}
export default Modal