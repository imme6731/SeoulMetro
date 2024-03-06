import { styled } from "styled-components";
import onlineImg from "../../assets/images/online_support.png";
import FAQImg from "../../assets/images/FAQ.png";

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
const Note = styled.div`
  width: 70%;
  max-width: 1300px;
  height: 500px;
  border: 1px solid #e8e8e8;
  border-radius: 40px;
`;
const BtnWrap = styled.ul`
  width: 25%;
  max-width: 330px;
  height: 500px;
  border: 1px solid #e8e8e8;
  border-radius: 40px;
  img {
    width: 80px;
    margin-bottom: 25px;
  }
  li {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 16px;
      font-weight: 500;
      color: #121212;
    }
  }
  & li:first-child {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export const Notice = () => {
  return (
    <Wrap>
      <Container>
        <Title>
          서울교통공사 <b>소식</b>
        </Title>
        <ConWrap>
          <Note></Note>
          <BtnWrap>
            <li>
              <a href="/">
                <img src={onlineImg} alt="고객의소리" />
                <p>고객의 소리</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={FAQImg} alt="자주묻는질문" />
                <p>자주 묻는 질문</p>
              </a>
            </li>
          </BtnWrap>
        </ConWrap>
      </Container>
    </Wrap>
  );
};
