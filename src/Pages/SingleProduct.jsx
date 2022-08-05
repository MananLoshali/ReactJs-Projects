import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`
    margin-bottom: 90px;
`

const Wrapper = styled.div`
    display: flex;

    ${mobile({flexDirection:"column"})}

`

const Left = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 80%;
    height: 80%;

`

const Select = styled.select`
    padding: 10px;

    ${mobile({padding:"5px",height:"30px"})}
`

const Options = styled.option``

const Bgcolor = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin-right: 10px;
    cursor: pointer;


    ${mobile({width:"20px",height:"20px"})}
`

const Length = styled.div`
    height: 40px;
    display: flex;
`

const Heading = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-right: 10px;

    ${mobile({fontSize:"20px",margin:"0px 20px"})}
`

const Colors = styled.div`
    display: flex;
    width: 200px;
    margin-bottom: 40px;

    
`

const Title = styled.p`
    margin-top: 30px;
    font-weight: 500;
    font-size: 40px;

    ${mobile({fontSize:"20px", marginLeft:"20px"})}

`
const Desc = styled.p`
    margin-top: 30px;
    font-size: 20px;

    ${mobile({fontSize:"13px",margin:" 10px 20px"})}

`

const Price = styled.div`
    margin-top: 30px;
    font-size: 50px;
    font-weight: 300;


    ${mobile({fontSize:"20px",margin:"10px 20px"})}
`

const Category = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

const Products = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    ${mobile({width:"80%"})}

`

const Amount = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;

    ${mobile({marginRight:"80px",marginLeft:"10px"})}
`

const Quantity =styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20%;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    font-weight: 500;
    color: red;
    cursor: pointer;
    border: 2px solid teal;
    padding: 15px;
    font-size: .8rem;

    ${mobile({padding:"5px",width:"50px"})}
`

const SingleProduct = () => {
  return (
    <Container>
     <Announcement/>
     <Navbar/>
     <Wrapper>
        <Left>

            <Image src = "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"/>
        </Left>
        <Right>
            <Title>LUX COZZI</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere explicabo temporibus, laboriosam magnam velit eum eos corrupti repudiandae totam quod quam similique, molestiae dolore ad excepturi aliquid animi saepe.
            </Desc>
            <Price>$50</Price>
           <Category>
            <Colors>
                <Heading>Color</Heading>
                <Bgcolor color = "black" />
                <Bgcolor color = "blue"/>
                <Bgcolor color = "green"/>
            </Colors>
            <Length>
                <Heading>Size:</Heading>
                <Select> 
                    <Options disabled selected> Size</Options>
                    <Options>S</Options>
                    <Options>M</Options>
                    <Options>L</Options>

                </Select>
            </Length>
           </Category>

           <Products>
                <Amount>
                    <Remove/>
                    <Quantity>1</Quantity>
                    <Add/>
                </Amount>

                <Button>Add To Cart</Button>
           </Products>
        </Right>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default SingleProduct
