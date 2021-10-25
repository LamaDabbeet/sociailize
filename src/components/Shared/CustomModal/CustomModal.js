import React,{useState} from 'react';
import { Modal} from 'react-bootstrap';
import { Button} from '../Button/Button'
import './CustomModal.scss';

export const CustomModal=(props)=> {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const {triggerButtonText,modalText,modalButtonText}=props;
    return (
      <React.Fragment>  
        <Button buttonText={triggerButtonText} onClick={handleShow}>
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center"><div className="text-center">{modalText}</div></Modal.Body>
        <Modal.Footer>
            <Button buttonText={modalButtonText} onClick={handleClose}></Button>
        </Modal.Footer>
        </Modal>
     </React.Fragment>
   )};