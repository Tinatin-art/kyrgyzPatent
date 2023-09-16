import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'

const TimsPage = () => {
  return (
    <div>
        <Header/>
        <main>
          <div className="container">
            <div className="main-page">
              <Sidebar/>
              <div className='main-content'>
                hello2
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default TimsPage