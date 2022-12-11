import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteAll } from '../../redux/delete/deleteSlice'
import { deleteEmploye, detailsEmploye, showEmploye, updateEmployeData } from '../../service/employeCurd'
import Header from '../header/Header'
import Details from './Details'
import UpdateEmployeModal from './UpdateEmployeModal'

const List = ({select}) => {
    const [employeList, setEmployeList] = useState([])
    const [employeDetails, setEmployeDetails] = useState([])
    const [render, setRender] = useState(false)
    const [userId, setUserId] = useState()

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const handleShow = () => setShow(true);
    const handleOpen = () => setOpen(true);


    useEffect(() => {
        fetchData();
        getEmployeData()
    }, [render])


    const fetchData = () => {
        showEmploye().then(data => {
            setEmployeList(data)
        })
    }

    const edit = (id) => {
        setUserId(id)
        handleShow()
    }

    const details = (id) => {
        setUserId(id)
        handleOpen()
        getEmployeData(id)
    }

    const getEmployeData = (id) =>{
        detailsEmploye(id).then((data)=>setEmployeDetails(data))
    }

    const del = (id) => {
        deleteEmploye(id).then(() => fetchData())
    }

    const handleChange = (e) => {
        select(e)
    }
    

    
    return (
        <div>
            <Header render={setRender} employeList={employeList.length} />
            <div className="list">
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <td>select</td>
                            <td className='employe_endex text-capitalize'>index</td>
                            <td className='employe_id text-capitalize'>employe Id</td>
                            <td className='employe_name text-capitalize'>employe Name</td>
                            <td className='employe_email'>employe email</td>
                            <td className='employe_phone'>employe phone</td>
                            <td >Action</td>
                        </tr>
                        {
                            employeList?.map((list, index) => <tr key={list._id}>
                                <td>
                                    <input type="checkbox" onChange={(e)=>handleChange(list._id)} />
                                </td>
                                <td className='employe_id text-capitalize'>{index}.</td>
                                <td className='employe_id text-capitalize'>{list._id}</td>
                                <td className='employe_name text-capitalize'>{list.name}</td>
                                <td className='employe_email'>{list.email}</td>
                                <td className='employe_phone'>{list.phone}</td>
                                <td>
                                    <div className='d-flex'>
                                        <span className="edit_btn ms-auto">
                                            <Button className='btn' onClick={() => details(list._id)}>
                                                <i className="bi bi-eye"></i>
                                            </Button>
                                        </span>
                                        <span className="edit_btn ms-1">
                                            <Button className='btn' onClick={() => edit(list._id)}>
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
            </div>
            <UpdateEmployeModal show={{ show, setShow, userId, fetchData }} />
            <Details show={{ open, setOpen, userId, employeDetails }} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        deleteState : state.allDelete
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        select : (target) => dispatch(deleteAll(target))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)