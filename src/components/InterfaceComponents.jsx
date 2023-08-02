import styled, { keyframes} from "styled-components"



const fadeIn = keyframes`
    0% { opacity: 0%}
    100% { opacity: 100%}
`

const holeIn = keyframes`
    0% { opacity: 0%; transform: scale(0)}
    100% { opacity: 100%; transform: scale(1)}
`

const holeOut = keyframes`
    0% { opacity: 100%; transform: scale(1)}
    100% {opacity:0%; transform: scale(0) }
`
const rotate = keyframes`
  from {
    transform: translate(200px, 0);
  }

  25% {
    transform: translate(0, 200px);
  }

  50% {
    transform: translate(-200px, 0);
  }

  75% {
    transform: translate(0, -200px);
  }

  to {
    transform: translate(200px, 0);
  }
`;

const Divy = styled.div`
    width: 300px;
    height: 300px;
    background-color: slateblue;
    animation: ${rotate} 2s linear infinite;
`

export {Divy}

