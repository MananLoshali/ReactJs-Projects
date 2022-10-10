import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5),
      url("https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600")
    )
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: "100%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

  ${mobile({ fontSize: "15px" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  ${mobile({ width: "20px", padding: "5px", margin: "5px 0px" })}
`;

const Agreement = styled.span`
  font-size: 22px;
  margin: 20px 0px;

  ${mobile({ fontSize: "12px", margin: "10px 0px" })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;

  ${mobile({ width: "100%", padding: "5px " })}
`;

const Message = styled.p`
  color: red;
  font-weight: bold;
  font-size: medium;
`;

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const firstName = fname;
    // const lastName = lname;
    // const useremail = email;
    // const userPassword = password;
    // const confirmPassword = cpassword;
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(password);
    console.log(cpassword);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setMsg(errorMessage);
        // ..
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="first name"
            onChange={(e) => setFname(e.target.value)}
            autoFocus
          />
          <Input
            type="text"
            placeholder="last name"
            onChange={(e) => setLname(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setcpassword(e.target.value)}
          />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ab.
          </Agreement>
          <Button type="submit">CREATE</Button>
          <Message>{msg}</Message>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
