import { styled } from "styled-components";
import "../../assets/css/pc.css";
import { MainBanner } from "./MainBanner";

const Section = styled.div`
  width: 100%;
  height: 870px;
  @media screen and (max-width: 425px) {
    height: 500px;
  }
`;
const SectionWrap = styled.div`
  width: 100%;
  height: 870px;
  background-color: #888;
  position: relative;
  @media screen and (max-width: 425px) {
    height: 500px;
  }
`;
const TitleWrap = styled.div`
  position: absolute;
  left: 10.417%;
  top: 120px;
  color: #1e3f5c;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 72px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
    line-height: 36px;
  }
  br {
    display: none;
  }
  @media screen and (max-width: 1460px) {
    top: 100px;
    h3 {
      font-size: 46px;
      line-height: 60px;
    }
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
      line-height: 56px;
    }
    p {
      font-size: 20px;
      margin-bottom: 25px;
      line-height: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    left: 20px;
    h3 {
      max-width: 400px;
    }
  }
  @media screen and (max-width: 425px) {
    left: 20px;
    top: 45px;
    h3 {
      font-size: 28px;
      margin-bottom: 15px;
      line-height: 40px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
      line-height: 20px;
    }
    br {
      display: block;
    }
  }
`;
const MarkImg = styled.div``;
const Bg = styled.div``;

export const Main = () => {
  return (
    <Section>
      <SectionWrap>
        <TitleWrap>
          <h3>
            안전한 도시철도,
            <br /> 편리한 교통 서비스
          </h3>
          <p>서울교통공사가 도시교통의 미래를 만들어갑니다.</p>
          <MarkImg className="mainTxtLogo"></MarkImg>
        </TitleWrap>
        <MainBanner />
        <Bg className="mainImg"></Bg>
      </SectionWrap>
    </Section>
  );
};
