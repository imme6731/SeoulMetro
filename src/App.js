import { styled } from "styled-components";
import { Header } from "./components/Header";
import Example from "./hooks/MediaQuery";
import { pcBaseLayoutSize, pcInnerLayoutSize } from "./GlobalStyled";
import { Main } from "./components/Main";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
  position: relative;
`;

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
`;

export const App = () => {
  return (
    <Wrap>
      <Container>
        <Header />
        <Main />
        <Example />
      </Container>
    </Wrap>
  );
};

export default App;
