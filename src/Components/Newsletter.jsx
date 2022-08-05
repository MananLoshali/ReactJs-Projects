import {Send} from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height: 70vh;
    background-color: #fcdde2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${mobile({height:"50vh"})}
`

const Title = styled.h1`
    font-size: 56px;
    margin-bottom: 20px;

    ${mobile({fontSize: "30px"})}
`

const Description = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;

    ${mobile({fontSize: "16px",fontWeight: "200", margin:"0px 10px"})}

`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Input = styled.input`
    width: 30rem;
    height: 34px;
    padding-left: 25px;
    border: none;


    &:focus{
        outline: none;
    }


    ${mobile({width: "150px", marginTop: "20px"})}
`

const Button = styled.button`
    width: 5rem;
    height: 38px;
    padding: 4px;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;


    ${mobile({width: "2rem",marginTop: "20px"})}
`


const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Description>Get Updated of the Sales, Discounts and for New and brand product launch</Description>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
