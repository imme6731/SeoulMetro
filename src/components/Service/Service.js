import { styled } from "styled-components";
import delayImg from "../../assets/images/delay.png";
import checkImg from "../../assets/images/metro_check.png";
import lostItemImg from "../../assets/images/driver.png";
import ticketImg from "../../assets/images/ticket.png";
import disabledImg from "../../assets/images/disabledperson.png";
import vendingImg from "../../assets/images/vending-machine.png";
import liftImg from "../../assets/images/lift.png";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 200px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 40px;
  color: #121212;
  font-weight: 500;
  b {
    font-weight: 700;
  }
  margin-bottom: 80px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 160px;
  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ImgCon = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 40px;
  margin-bottom: 20px;
  img {
    width: 70px;
  }
`;
const SubTitle = styled.p`
  font-size: 16px;
  color: #121212;
`;
export const Service = () => {
  return (
    <Wrap>
      <Container>
        <Title>
          서울교통공사 <b>서비스</b>
        </Title>
        <ConWrap>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={delayImg} alt="간편지연증명서" />
              </ImgCon>
              <SubTitle>간편지연증명서</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={checkImg} alt="실시간운행정보" />
              </ImgCon>
              <SubTitle>실시간 운행정보</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={lostItemImg} alt="유실물찾기" />
              </ImgCon>
              <SubTitle>유실물 찾기</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={ticketImg} alt="운임안내" />
              </ImgCon>
              <SubTitle>운임 안내</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={disabledImg} alt="교통약자배려시설" />
              </ImgCon>
              <SubTitle>교통약자 배려시설</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={vendingImg} alt="이용고객편의시설" />
              </ImgCon>
              <SubTitle>이용고객 편의시설</SubTitle>
            </a>
          </Con>
          <Con>
            <a href="/">
              <ImgCon>
                <img src={liftImg} alt="승강설비가동현황" />
              </ImgCon>
              <SubTitle>승강설비 가동현황</SubTitle>
            </a>
          </Con>
        </ConWrap>
      </Container>
    </Wrap>
  );
};
