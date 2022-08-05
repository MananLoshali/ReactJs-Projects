// import React from 'react'
// import Announcement from '../Components/Announcement';
// import Slider from '../Components/Slider'
// // import { Container } from '../Components/Navbar'

// import Navbar from '../Components/Navbar'



// const Home = () => {
//  return(<>
// <Announcement/>
//      <Navbar/>
//      <Slider/>
//      </>
//    );      
   
  
// }

// export default Home





import React from 'react'
import Announcement from '../Components/Announcement'
import Category from '../Components/Category'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Product from '../Components/Product'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Announcement/>
    <Navbar/> 
     <Slider/>
     <Category/>
     <Product/>
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default Home
