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
`;
const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  position: absolute;
  top: -100px;
  display: flex;
  flex-direction: column;
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
