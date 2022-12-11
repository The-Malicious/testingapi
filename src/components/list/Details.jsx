import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const Details = ({ show }) => {
    let details = show.employeDetails
    
    const handleClose = () => {
        show.setOpen(false)
    };

    return (
        <Modal show={show.open} onHide={show.setOpen}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    details?.map((user) => <div key={user._id}>
                        <h5>Name : {user.name}</h5>
                        <h5>Email : {user.email}</h5>
                    </div>)
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Details