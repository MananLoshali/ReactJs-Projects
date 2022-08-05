import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5),url("https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600")) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;  
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

  ${mobile({fontSize:"15px"})}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`


const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  ${mobile({minWidth:"120%", padding:"5px",margin:"5px 0px"})}
`

const Agreement = styled.span`
  font-size: 22px;
  margin: 20px 0px;

  ${mobile({fontSize:"12px",margin:"10px 0px"})}
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;

  ${mobile({width:"80%",padding:"5px "})}
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="pasword"/>
                <Input placeholder="confirm password"/>
                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab.</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
