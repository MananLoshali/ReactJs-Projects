// import styled from "styled-components";
// import { sliderImages } from "../data";
// import ArrowRight from "@mui/icons-material/ArrowRight";
// import ArrowLeft from "@mui/icons-material/ArrowLeft";
// import { useState } from "react";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   position: relative;
// `;

// const Arrow = styled.div`
//   width: 9px;
//   height: 9px;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100vw;
//   display: flex;
//   transform: translate(${(props) => props.slide * -100} vw);
// `;

// const Silde = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;
// const ImgContainer = styled.div`
//   flex: 1;
//   width: 100vw;
//   height: 100%;
//   margin-left: 50px;
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;
// const Img = styled.img`
//   height: 80%;
//   width: 80%;
// `;

// const Title = styled.h1`
//   font-size: 67px;
// `;

// const Description = styled.p`
//   margin: 50px 0px;
//   letter-spacing: 3px;
//   font-weight: 500;
//   font-size: 20px;
// `;

// const Button = styled.button`
//   background-color: transparent;
//   padding: 10px;
//   font-size: 20px;
//   cursor: pointer;
// `;

// function Slider() {
//   const [slide, setSlide] = useState(0);

//   const handleClick = (direction) => {
//     console.log("Pressed");
//     if (direction === "left") {
//       setSlide(slide > 0 ? slide - 1 : 2);
//     } else {
//       setSlide(slide < 2 ? slide + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")} >
//         <ArrowLeft />
//       </Arrow>
//       <Wrapper slide={slide}>
//         {sliderImages.map((element) => (
//           <Silde bg={element.bg} key={element.id}>
//             <ImgContainer>
//               <Img src={element.img} />
//             </ImgContainer>
//             <InfoContainer>
//               <Title>{element.title}</Title>
//               <Description>{element.desc}</Description>
//               <Button>SHOP NOW</Button>
//             </InfoContainer>
//           </Silde>
//         ))}
//       </Wrapper>
//       <Arrow direction="right">
//         <ArrowRight />
//       </Arrow>
//     </Container>
//   );
// }

// export default Slider;

import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderImages } from "../data";
import { mobile } from "../responsive";

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({})}
`;

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
`;

const Slides = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  transform: translateX(${(props) => props.slides * -100} vw);
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #${(props) => props.bg};

  ${mobile({})}
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ flex: 2 })}
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const Image = styled.img`
  width: 70%;
  height: 80%;
  /* background-image: url(${(props) => props.src}); */

  ${mobile({ height: "250px", width: "180px" })}
`;

const Title = styled.h1`
  color: brown;
  font-size: 4rem;

  ${mobile({ fontSize: "2rem" })}
`;

const Description = styled.p`
  color: green;
  letter-spacing: 0.2rem;
  line-height: 1.5rem;

  ${mobile({ letterSpacing: 0, lineHeight: "1rem" })}
`;

const Button = styled.button`
  color: red;
  width: 20%;
  height: 10%;
  border-radius: 20px;
  font-size: 1rem;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;

  ${mobile({ width: "100px" })}
`;

function Slider() {
  const [slide, setSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
      //slide > 0 ? slide - 1 : 2
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  };

  return (
    <OuterContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Slides slides={slide}>
        {sliderImages.map((items) => (
          <Container key={items.id}>
            <Wrapper bg={items.bg}>
              <ImageContainer>
                <Image src={items.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{items.title}</Title>
                <Description>{items.desc}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Wrapper>
          </Container>
        ))}
      </Slides>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </OuterContainer>
  );
}

export default Slider;
