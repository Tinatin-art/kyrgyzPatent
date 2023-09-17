import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MainPage = () => {
  const categoryData  = useSelector((state) => ({
    ...state?.categories
  
  }));


  const onButtonClick = (pdfUrl) => {
    console.log(pdfUrl)

    fetch(`${pdfUrl}`).then(response => {
      response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      window.open(fileURL, '_blank')
      })
  })

   
  }

  return (
    <div>
        <Header/>
        <main>
          <div className="container">
            <div className="main-page">
              <Sidebar/>
              <div className='main-content'>
                  <div >
                    {
                       categoryData && categoryData?.categoryData.map((item, key) => (
                        <div
                          className='card' 
                          key={key}
                        >
                          <button onClick={() => onButtonClick(item?.pdfLink)}>
                          <h2 className='user-auth-link'>{item?.title}</h2>
                          </button>
                        </div>
                      ))
                    }
                  </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage