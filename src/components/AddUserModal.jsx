import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { addEmployeData } from '../service/api';

const AddUserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    addEmployeData(data).then((data)=>alert(data.data.name, data.data.email))
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add employe
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new employe</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <input {...register("name", { required: true })} placeholder="Add employe name" /><br/>
            <input {...register("email")} placeholder="Add employe email"/><br/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddUserModal