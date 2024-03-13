import { styled } from "styled-components";
import { UpStation } from "./UpStation";
import { LowerStation } from "./LowerStation";

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  @media screen and (max-width: 1024px) {
    height: 760px;
    margin-top: 50px;
    margin-bottom: 150px;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  position: absolute;
  top: -100px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1460px) {
    max-width: 960px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 25px;
    max-width: 960px;
    top: 0;
  }
`;

export const Station = () => {
  return (
    <Wrap>
      <Container>
        <UpStation />
        <LowerStation />
      </Container>
    </Wrap>
  );
};
