// import React from 'react'
// import styled from 'styled-components'


// const Container = styled.div`
// text-align:center;
// height:30px;
// background-color:teal;
// color:white;
// font-weight:bold;
// `

// function Announcement() {
//   return (
//     <Container>Super Deal !!! Grab items under $50</Container>
//   )
// }

// export default Announcement



import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
        width: 100vw;
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: teal;
        color: white;
        font-weight: bolder;
    `

function Announcement() {
  return (
    <Container>
        Super Deal !!! Grab items under $50
    </Container>
  )
}

export default Announcement
