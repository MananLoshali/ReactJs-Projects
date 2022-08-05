import styled from 'styled-components'
import ProductItem from './ProductItem'
import Navbar from './Navbar'
import {popularProducts} from '../data'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Product = () => {
  return (
    
    <Container>
      <Navbar/>
        {popularProducts.map((items)=>(
            <ProductItem items={items} key={items.id}/>
        ))}
      
    </Container>
  )
}

export default Product
