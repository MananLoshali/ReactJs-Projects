// import React from "react";
// import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search";

// const Container = styled.div`
//   color: red;
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 1;

//   display: flex;
//   align-items: center;
// `;
// const Center = styled.div`
//   flex: 1;
//   display: flex;
// `;

// const Right = styled.div`
//   flex: 1;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   border: 1px solid brown;
//   margin-left: 9px;
//   display: flex;
//   align-items: center;
// `;

// const Input = styled.input`
//   border: none;
// `;

// const MenuItems = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 13px;
// `;

// const Logo = styled.h1`
//   text-align: center;
// `;

// function Navbar() {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>HIN</Language>
//           <SearchContainer>
//             {" "}
//             <Input />
//             <SearchIcon />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <MenuItems>REGISTER</MenuItems>
//           <MenuItems>SIGNIN</MenuItems>
//         </Center>
//         <Right>
//           <Logo>MANAN</Logo>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Navbar;

import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: blanchedalmond;

  ${mobile({ height: "50px" })}
`;

const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const ContainerCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h5`
  cursor: pointer;

  :hover {
    color: orangered;
  }

  ${mobile({ fontSize: "12px" })}
`;

const Name = styled.h1`
  color: #ff4800;

  ${mobile({ fontSize: "25px" })}
`;

function Navbar() {
  return (
    <Container>
      <ContainerLeft>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <Heading>Register</Heading>
        </Link>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Heading>Login</Heading>
        </Link>
      </ContainerLeft>

      <ContainerCenter>
        <Name>BAZZAR</Name>
      </ContainerCenter>

      <ContainerRight>
        <Heading>
          <ShoppingCart />
        </Heading>
      </ContainerRight>
    </Container>
  );
}

export default Navbar;
