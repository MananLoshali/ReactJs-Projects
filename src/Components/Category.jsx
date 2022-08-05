import styled from "styled-components"
import {category} from '../data'
import { mobile } from "../responsive"
import CategoryItems from './CategoryItems'


const OuterContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({flexDirection: "column"})}
`



function Category() {
  return (
   <OuterContainer>
   {category.map(items=>(
    <CategoryItems items={items}/>
   ))}
   </OuterContainer>
  )
}

export default Category
