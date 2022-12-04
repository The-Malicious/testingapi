import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getEmployeId } from '../redux/employeSlice/employeSlice';
import { deleteEmployeData, getEmploye, updateEmployeData } from '../service/api'

const List = ({ employe, getEmployeId }) => {
    const id = employe.employeId

    const [show, setShow] = useState(false);
    const [employeList, setEmployeList] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();
    const edit = (target) => {
        getEmployeId(target)
    }

    const onSubmit = data => {
        updateEmployeData(data, id)
    };


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        getEmploye().then((data) => {
            setEmployeList(data.data)
        })
    }

    const del = (target) => {
        deleteEmployeData(target).then((data) => {
            alert(`${data.message} the user is ${data.data.name}`)
        })
    }


    return (
        <div className='list mt-2'>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <td className='employe_id text-capitalize'>Sl No.</td>
                        <td className='employe_id text-capitalize'>Employe Id</td>
                        <td className='employe_name text-capitalize'>Employe Name</td>
                        <td className='employe_email'>Employe Email</td>
                        <td className='employe_phone'>Employe phone</td>
                        <td >Action</td>
                    </tr>
                    {
                        employeList.map((list, index) => <tr key={list._id}>
                            <td className='employe_id text-capitalize'>{index}.</td>
                            <td className='employe_id text-capitalize'>{list._id}</td>
                            <td className='employe_name text-capitalize'>{list.name}</td>
                            <td className='employe_email'>{list.email}</td>
                            <td className='employe_phone'>{list.phone}</td>
                            <td>
                                <div className='d-flex'>
                                    <span className="edit_btn ms-auto" onClick={() => edit(list._id)}>
                                        <Button onClick={handleShow}>
                                            <i className="bi bi-pen"></i>
                                        </Button>
                                    </span>
                                    <span className="delete_btn btn ms-1" onClick={() => del(list._id)}>
                                        <i className="bi bi-trash3"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update employe details</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <input {...register("name", { required: true })} placeholder="Add employe name" /><br />
                        <input {...register("email")} placeholder="Add employe email" /><br />
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employe: state.employe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeId: (id) => dispatch(getEmployeId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)