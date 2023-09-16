import React, { useRef } from 'react'
import axios from "axios";
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useReactToPrint } from 'react-to-print';


const MainPage = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('https://www.entnet.org/wp-content/uploads/2021/04/Instructions-for-Adding-Your-Logo-2.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
}

// const componentRef = useRef();
// const handlePrint = useReactToPrint({
//  content: () => componentRef.current,
//  documentTitle: 'Visitor Pass',
//  onAfterPrint: () => console.log('Printed PDF successfully!'),
// });




  return (
    <div>
        <Header/>
        <main>
          <div className="container">
            <div className="main-page">
              <Sidebar/>
              <div className='main-content'>
                <button onClick={onButtonClick}>
                Товарные знаки Download PDF
                </button>
                <div className='sheet'>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores iste doloribus magni laborum voluptatem, quam voluptas. Fugiat odio perspiciatis dignissimos consequuntur vero beatae dolores voluptates, voluptatum saepe nisi, nulla praesentium. Ipsum itaque, aut harum deleniti eius veritatis nobis. Quia culpa corporis cumque quod. Reprehenderit dicta iste, veritatis, doloremque saepe illo, corporis maiores nihil minus tempore sed. Dolor earum aliquid minima iure asperiores. Voluptates quod sint asperiores cum nihil dolores fuga amet alias. Nihil voluptates eius velit voluptas odio, ratione, iure ipsa quidem laudantium fugit ad sequi facilis dolores officiis? Illum id tempora ut eius deserunt. Exercitationem nisi deleniti tempore repellat voluptate non numquam voluptatum, vitae harum eveniet aut vel voluptatibus recusandae, enim dolorum. Beatae, eligendi? Eaque blanditiis inventore voluptates incidunt, porro culpa similique asperiores ad, velit laborum reiciendis placeat eos consequuntur neque molestiae rem facilis itaque quidem. Iure nesciunt autem dicta? Nemo, quibusdam odit quis, asperiores vel enim doloribus natus quia, in id fugit ut aliquam nisi sint assumenda pariatur ducimus? Quis enim odit magni ipsa tempora distinctio placeat. Officiis quasi ipsum praesentium ipsa, eligendi pariatur fugit illo voluptate provident cupiditate quibusdam iusto perferendis repellat nesciunt unde, natus deserunt ratione quaerat illum excepturi, vel nihil animi sit in. Illo?
                  </div>
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