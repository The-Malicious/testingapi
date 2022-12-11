import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addEmploye, deleteEmploye, showEmploye } from '../../service/employeCurd';

const Header = ({ render, employeList,deleteState }) => {
    const select = deleteState.allSelect
    const [allEmployeList, setAllEmployeList] = useState([])
    const [reload, setReload] = useState(true)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchData();
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        addEmploye(data).then(() => {
            render((prestate) => !prestate)
        });
    };



    const fetchData = () => {
        showEmploye().then(data => {
            setAllEmployeList(data)
        })
    }

    const allDelete = () => {
        select.forEach((item)=>{
            deleteEmploye(item)
        })
    }


    return (
        <div className='heading d-flex align-items-center'>
            <span className="icon"></span>
            <span className="title">Employe list</span>
            <span className='ms-auto'>total employe : {employeList}</span>
            <span className="btn_sec ms-1">
                <Button onClick={allDelete}>
                    all delete
                </Button>
                <Button onClick={handleShow} className="ms-2">
                    add employe
                </Button>
            </span>
            <Modal show={show} onHide={handleClose}>
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
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        deleteState : state.allDelete
    }
}

export default connect(mapStateToProps)(Header)