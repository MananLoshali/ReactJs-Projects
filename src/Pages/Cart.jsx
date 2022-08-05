import styled from "styled-components"
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
`

const Title = styled.h1`
    text-align: center;
    margin: 20px;
    font-weight: 500;

    ${mobile({fontSize:"15px"})}
`

const Titles = styled.h1`
    font-weight: 500;
    margin-bottom: 20px;

    ${mobile({fontSize:"20px",textAlign:"center",marginTop:"10px"})}

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Buttona = styled.button`
    margin-left: 30px;
    width: 200px;
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: bold;

    ${mobile({height:"30px",padding:"0px",fontSize:"10px",marginRight:"10px"})}

`
const Middle = styled.div`
     ${mobile({display:"none",flexDirection:"column"})}
`
const Para = styled.span`
    text-decoration: underline;
    margin: 10px;
`
const Buttonb = styled.button`
    margin-right: 30px;
    width: 180px;
    padding: 15px;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;

    ${mobile({height:"30px",padding:"0px",fontSize:"10px"})}
`

const InsideContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;

    ${mobile({flexDirection:"column"})}

`

const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;


`

const ProductContainer = styled.div`
    display: flex;
    margin-top: 50px;
    
`

const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
`

const Image = styled.img`
    width: 170px;
    height: 170px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductDetails = styled.div``

const Product = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const Heading = styled.h5`
    margin: 0px 20px;
`

const Name = styled.p``

const Color = styled.div``

const Summary = styled.div`
    width: 30%;
    height: 300px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    ${mobile({width:"90%"})}

`

const OrderDetails = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 10px 10px;
`

const Button = styled.button`
    background-color: black;
    color: white;
    font-weight: 500;
    font-size: 20px;
    margin: 20px 10px;
    padding: 10px;
    cursor: pointer;

    ${mobile({fontSize:"15px",width:"200px", marginLeft:"70px"})}


`

const PriceType = styled.p`
    font-size: 16px;
`

const Amount = styled.p`
    font-size: 16px;
`

const Total = styled.h2`
    font-weight: 600px;

    ${mobile({fontSize:"20px"})}

`

const TAmount = styled.h2`
    ${mobile({fontSize:"20px"})}

`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>YOUR CART</Title>
        <Wrapper>
            <Buttona>CONTINUE SHOPPING</Buttona>
            <Middle>
                <Para>Shopping Bag(2)</Para>
                <Para>Your Wishlist(0)</Para>
            </Middle>
            <Buttonb>CHECKOUT NOW</Buttonb>
        </Wrapper>
        <InsideContainer>
            <OuterContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                </ImageContainer>
                <Details>
                    <ProductDetails>
                        <Product>
                            <Heading>Product</Heading>
                            <Name>BADIYA SHOES</Name>
                        </Product>
                        <Product>
                            <Heading>ID</Heading>
                            <Name>98549985</Name>
                        </Product>
                        <Color color="black"></Color>
                        <Product>
                            <Heading>Size</Heading>
                            <Name>9</Name>
                        </Product>
                    </ProductDetails>
                </Details>
            </ProductContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                </ImageContainer>
                <Details>
                    <ProductDetails>
                        <Product>
                            <Heading>Product</Heading>
                            <Name>BADIYA SHOES</Name>
                        </Product>
                        <Product>
                            <Heading>ID</Heading>
                            <Name>98549985</Name>
                        </Product>
                        <Color color="black"></Color>
                        <Product>
                            <Heading>Size</Heading>
                            <Name>9</Name>
                        </Product>
                    </ProductDetails>
                </Details>
            </ProductContainer>
            </OuterContainer>
            <Summary>
                <Titles>ORDER SUMMARY</Titles>

                <OrderDetails>
                    <PriceType>SubTotal</PriceType>
                    <Amount>$1000</Amount>
                </OrderDetails>

                <OrderDetails>
                    <PriceType>Shipping</PriceType>
                    <Amount>$20</Amount>
                </OrderDetails>

                <OrderDetails>
                    <PriceType>Shipping Discount</PriceType>
                    <Amount>$20</Amount>
                </OrderDetails>

                <OrderDetails>
                    <Total>Total</Total>
                    <TAmount>$1000</TAmount>
                </OrderDetails>

                <Button>ORDER NOW</Button>
            </Summary>
        </InsideContainer>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart
