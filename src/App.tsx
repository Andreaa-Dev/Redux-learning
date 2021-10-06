import styled from "styled-components"
import flower from "./Img/flower.jpeg"
import Movie from "./Components/Movie"


const BackGround = styled.div`
background: url(${flower});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
`
function App() {
  return (
    <BackGround>
      <h1>Movie</h1>
      <Movie/>
    </BackGround>
  );
}

export default App;
