import React from "react";
import styled, { keyframes } from "styled-components";



const rotate2 = keyframes`
  0%{
    transform: rotate(0deg);
  }100%{
    transform: rotate(360deg);
  }

`
export const Divy = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: slateblue;
    animation: normal infinite 4s ${rotate2};
`




function ScrollVideoComponent() {
  return (

      <video autoPlay >
        <source src="video.mp4" type="video/mp4"></source>
      </video>

  );
}

export default ScrollVideoComponent;
