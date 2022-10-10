import { Facebook, Instagram, Twitter, Pinterest } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 65vh;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  ${mobile({ flexDirection: "column", marginTop: "140px" })}
`;
const Decs = styled.div`
  flex: 1;
  margin-left: 10px;

  ${mobile({
    marginLeft: "0px",
    backgroundColor: "lightgrey",
    marginBottom: "5px",
  })}
`;

const Para = styled.p`
  line-height: 30px;
  margin-bottom: 20px;

  ${mobile({ lineHeight: "20px", marginLeft: "10px" })}
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Links = styled.div`
  flex: 1;
  margin-left: 30px;

  ${mobile({
    marginLeft: "0px",
    backgroundColor: "lightgrey",
    marginBottom: "5px",
  })}
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;

  ${mobile({
    fontSize: "15px",
    marginTop: "10px",
    textAlign: "center",
    marginBottom: "0px",
  })}
`;

const Listitems = styled.li`
  line-height: 30px;
  list-style: none;
  cursor: pointer;

  ${mobile({ lineHeight: "20px" })}
`;

const Contact = styled.div`
  flex: 1;
  line-height: 50px;

  ${mobile({ lineHeight: "20px", backgroundColor: "lightgrey" })}
`;

const Address = styled.div`
  ${mobile({ textAlign: "center", marginTop: "6px" })}
`;

const Email = styled.div`
  ${mobile({ textAlign: "center", marginTop: "6px" })}
`;

const Payment = styled.div`
  ${mobile({ textAlign: "center", marginTop: "6px" })}
`;

const Number = styled.div`
  ${mobile({ textAlign: "center", marginTop: "6px" })}
`;

const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;

  ${mobile({ fontSize: "20px" })}
`;
const Item = styled.div`
  ${mobile({ display: "flex", justifyContent: "space-around" })}
`;

const Setitem = styled.div`
  ${mobile({})}
`;

const Footer = () => {
  return (
    <Container>
      <Decs>
        <Logo>BAZZAR</Logo>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic
          ab a omnis impedit molestias, enim aperiam ipsa alias eum ipsam
          obcaecati officiis consectetur incidunt eligendi voluptatem nulla?
          Beatae, voluptates.
        </Para>
        <Icons>
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
        </Icons>
      </Decs>

      <Links>
        <Title>Useful Links</Title>
        <Item>
          <Setitem>
            <Listitems>Home</Listitems>
            <Listitems>Cart</Listitems>
            <Listitems>Men Fashion</Listitems>
            <Listitems>Women Fashion</Listitems>
            <Listitems>Accesories</Listitems>
          </Setitem>
          <Setitem>
            <Listitems>My Account</Listitems>
            <Listitems>Order Tracking</Listitems>
            <Listitems>Wishlist</Listitems>
            <Listitems>Bucket</Listitems>
            <Listitems>Terms</Listitems>
          </Setitem>
        </Item>
      </Links>

      <Contact>
        <Title>Contact</Title>
        <Address>26 Kishanpur Sakuliya</Address>
        <Number>+05946 232393</Number>
        <Email>bazzar@gmail.com</Email>
        <Payment></Payment>
      </Contact>
    </Container>
  );
};

export default Footer;
