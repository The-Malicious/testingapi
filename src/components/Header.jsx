import React, { useState } from 'react'
import AddUserModal from './AddUserModal'


const Header = () => {
  

  return (
    <div className="heading d-flex justify-content-between">
      <div className="title d-flex align-items-center">
        <span className="icon">
          <i className="bi bi-person-workspace"></i>
        </span>
        <span className="title ms-3">
          <h4 className='text-capitalize'>employe list</h4>
        </span>
      </div>
      <div className="btn_sec">
        <AddUserModal/>
      </div>
    </div>
  )
}

export default Header