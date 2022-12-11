import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { updateEmployeData } from '../../service/employeCurd';

const UpdateEmployeModal = ({ show }) => {
    let userId = show.userId
    const handleClose = () => {
        show.setShow(false)
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        updateEmployeData(data, userId).then(() => {
            show.fetchData()
        })
    };


    return (
        <Modal show={show.show} onHide={show.setShow}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input {...register("name")} placeholder="name" />
                    <input {...register("email")} placeholder="email" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default UpdateEmployeModal