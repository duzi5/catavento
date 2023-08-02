import styled, { keyframes } from 'styled-components';
import ScrollVideoComponent, { Divy } from "./components/ScrollVideoComponent"
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: yellowgreen;
  }
  50%{ background-color:red}
  100% {
    transform: rotate(1turn);
    background-color: yellowgreen;
  }
`;
const changeBackgroundAnimation = keyframes`
  0%{
    background-color: red;
  }25%{
    background-color: white ;
  }50%{
    background-color: purple;
  }75%{
    background-color: yellow;
  }100%{
    background-color: red;
  }
`

const Palco = styled.div`
  width: 100vw;
  height: 100vh;
  border: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: antiquewhite;
  animation: ${changeBackgroundAnimation} 8s linear infinite;
`



const Sun = styled.div`
  position: relative;

  width: 100px;
  height: 100px;
  background: yellow;
  border-radius: 50%;
 
  justify-content: center;
  align-items: center;

`;

const Planet = styled.div`
  position: absolute;
  top: -80%;
  left: -50%;
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 50%;
  margin: -25px 0 0 -25px; // centralize o "planeta" em relação ao "sol"
  transform-origin: 200px 200px; // move o ponto de transformação para o "sol"
  animation: ${rotation} 4s linear infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`;

// Uso dos componentes
function App() {
  return (
   <Divy>
     <ScrollVideoComponent/>
   </Divy>

   
   
  //  <Palco>
  //    <Sun>
  //     <Planet delay="2s"/>
  //     <Planet delay="3s" />
  //     <Planet  delay = "4s"/>
  //   </Sun>
  //  </Palco>
  );
}

export default App;
