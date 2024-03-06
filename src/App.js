import { styled } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { Station } from "./components/Station/Station";
import { Service } from "./components/Service/Service";
import { Notice } from "./components/Notice/Notice";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #555; */
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
        <Station />
        <Service />
        <Notice />
      </Container>
    </Wrap>
  );
};

export default App;
