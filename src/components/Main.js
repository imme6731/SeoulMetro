import { styled } from "styled-components";
import "../assets/css/pc.css";

const Section = styled.div`
  width: 100%;
  height: 87vh;
`;
const SectionWrap = styled.div`
  width: 100%;
  height: 87vh;
  background-color: #888;
`;
const TitleWrap = styled.div`
  position: absolute;
  left: 10.417%;
  top: 23.9%;
  color: #1e3f5c;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
  }
`;
const MarkImg = styled.div``;
const Bg = styled.div``;

export const Main = () => {
  return (
    <Section>
      <SectionWrap>
        <TitleWrap>
          <h3>안전한 도시철도, 편리한 교통 서비스</h3>
          <p>서울교통공사가 도시교통의 미래를 만들어갑니다.</p>
          <MarkImg className="mainTxtLogo"></MarkImg>
        </TitleWrap>
        <Bg className="mainImg"></Bg>
      </SectionWrap>
    </Section>
  );
};
