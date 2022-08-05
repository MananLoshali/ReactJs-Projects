import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Product from "../Components/Product"


const Container = styled.div`
    overflow: hidden;
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
`

const Filteritems = styled.div`
     margin: 20px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.h2`
    font-weight: 500;
    margin-right: 20px;
    
`

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
`
const Options = styled.option`
    padding: 10px;

`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <Filteritems>

            <FilterContainer>
            <Filter>Filter Products:</Filter>
            <Select>
                <Options disabled selected>Color</Options>
                <Options>White</Options>
                <Options>Black</Options>
                <Options>Green</Options>
                <Options>Blue</Options>
                <Options>Red</Options>
                <Options>Orange</Options>
            </Select>
            <Select>
                <Options disabled selected>Size</Options>
                <Options>S</Options>
                <Options>M</Options>
                <Options>L</Options>
                <Options>XL</Options>
                <Options>XXL</Options>
                
            </Select>
            </FilterContainer>

            <FilterContainer>
            <Filter>Sort Products:</Filter>
            <Select>
                <Options disabled selected>Newest</Options>
                <Options>Price(asc)</Options>
                <Options>Price(asc)</Options>
                
                
            </Select>
            </FilterContainer>

        </Filteritems>
        <Product/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
