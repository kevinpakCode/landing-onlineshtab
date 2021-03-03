import {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'




export const ModalContent = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect( () => {}, [show])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div  className="cpn-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </div>
      </Modal>
    </>
  )
}


export const ModalBtn = (props) => {
  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <a href={props.className??'#'} className={props.className??''} onClick={handleShow}>{props.children}</a>
    </>
  )
}
