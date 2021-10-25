import React,{useState} from 'react';
import {Button} from '../Shared/Button/Button'
import './Banner.scss';
import { Modal } from 'react-bootstrap';

export const Banner=(props)=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {buttonText,bannerTitle,bannerSubTitle} = props;

  return (
    <div className="banner text-center">
       <h1>{bannerTitle}</h1>
       {bannerSubTitle== ''?
       <p>{bannerSubTitle}</p>
        : ''}
      <Button buttonText={buttonText}  onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
               Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
    </div>
    )};