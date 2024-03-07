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
  const serciveArr = [
    { id: "1", imgName: delayImg, text: "간편지연증명서" },
    { id: "2", imgName: checkImg, text: "실시간 운행정보" },
    { id: "3", imgName: lostItemImg, text: "유실물 찾기" },
    { id: "4", imgName: ticketImg, text: "운임 안내" },
    { id: "5", imgName: disabledImg, text: "교통약자 배려시설" },
    { id: "6", imgName: vendingImg, text: "이용고객 편의시설" },
    { id: "7", imgName: liftImg, text: "승강설비 가동현황" },
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
