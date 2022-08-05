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
import Slider from '../Components/Slider'

function Home() {
  return (
    <>
    <Announcement/>
    <Navbar/> 
     <Slider/>
     <Category/>
    </>
  )
}

export default Home
