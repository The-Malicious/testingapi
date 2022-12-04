import React from 'react'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Header from './components/Header'
import List from './components/List'

const App = () => {

  




  return (
    <div className='employe_list_sec vh-100 d-flex justify-content-center align-items-center'>
      <Col xl={5} className="col-12 mx-auto p-4 employe_list">
        <Header />
        <hr />
        <List />
      </Col>
    </div>
  )
}

export default App