import styled from "styled-components"


const Container = styled.div`
    
`
const Image = styled.img`
    
`
const Info = styled.div`
    
`
const Title = styled.h1`
    
`
const Button = styled.button`
    
`

function CategoryItems(items) {
  return (
    <Container>
     <Image src={items.img}/>
     <Info>
        <Title>{items.title}</Title>
     </Info>
     <Button>SHOP NOW</Button>
    </Container>
  )
}

export default CategoryItems
