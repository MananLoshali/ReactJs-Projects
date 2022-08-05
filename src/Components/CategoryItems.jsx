import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    margin-bottom: 20px;
    background-color: white;
    color: grey;
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
`

const CategoryItems = ({items}) =>{
  return (
    <Container>
     <Image src={items.img}/>
     <Info>
        <Title>{items.title}</Title>
        <Button>SHOP NOW</Button>
     </Info>
    </Container>
  )
}

export default CategoryItems
