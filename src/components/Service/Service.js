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

  @media screen and (max-width: 1024px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 100px;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1460px) {
    width: auto;
    max-width: none;
    padding: 0 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
const Title = styled.h2`
  font-size: 40px;
  color: #121212;
  font-weight: 500;
  b {
    font-weight: 700;
  }
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 65px;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1460px) {
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 24px;
  }
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

  @media screen and (max-width: 1024px) {
    width: 140px;
  }
  @media screen and (max-width: 780px) {
    &:last-child {
      display: none;
    }
  }
  @media screen and (max-width: 520px) {
    width: 120px;
  }
  @media screen and (max-width: 425px) {
    width: 100px;
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

  @media screen and (max-width: 1024px) {
    height: 140px;
    border-radius: 36px;
    img {
      width: 60px;
    }
  }
  @media screen and (max-width: 520px) {
    height: 120px;
    img {
      width: 55px;
    }
  }
  @media screen and (max-width: 425px) {
    height: 100px;
    border-radius: 20px;
    img {
      width: 50px;
    }
  }
`;
const SubTitle = styled.p`
  font-size: 16px;
  color: #121212;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 18px;
    word-break: keep-all;
  }
`;
export const Service = () => {
  const serciveArr = [
    { id: "0", imgName: delayImg, text: "간편지연증명서" },
    { id: "1", imgName: checkImg, text: "실시간 운행정보" },
    { id: "2", imgName: lostItemImg, text: "유실물 찾기" },
    { id: "3", imgName: ticketImg, text: "운임 안내" },
    { id: "4", imgName: disabledImg, text: "교통약자 배려시설" },
    { id: "5", imgName: vendingImg, text: "이용고객 편의시설" },
    { id: "6", imgName: liftImg, text: "승강설비 가동현황" },
  ];

  return (
    <Wrap>
      <Container>
        <Title>
          서울교통공사 <b>서비스</b>
        </Title>
        <ConWrap>
          {serciveArr.map((ser) => (
            <Con key={ser.id}>
              <a href="/">
                <ImgCon>
                  <img src={ser.imgName} alt={ser.text} />
                </ImgCon>
                <SubTitle>{ser.text}</SubTitle>
              </a>
            </Con>
          ))}
        </ConWrap>
      </Container>
    </Wrap>
  );
};
