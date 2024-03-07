import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 200px;
  color: #121212;
  a {
    color: #121212;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 400px;
  background-color: #f6f6f6;
  border-radius: 40px;
  overflow: hidden;
`;
const Bg = styled.div`
  width: 100%;
  height: 380px;
`;
const Text = styled.div`
  padding: 40px 40px;
`;
const ConTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Date = styled.p`
  font-size: 16px;
  color: #707070;
`;

export const Event = () => {
  return (
    <Wrap>
      <Container>
        <Title>이벤트</Title>

        <ConWrap>
          <Con>
            <a href="/">
              <Bg className="eventBanner01"></Bg>
              <Text>
                <ConTitle>2023 서울 청년을 위한 일주일</ConTitle>
                <Date>2023.9.16(토) ~ 9.21(목)</Date>
              </Text>
            </a>
          </Con>

          <Con>
            <a href="/">
              <Bg className="eventBanner02"></Bg>
              <Text>
                <ConTitle>2023년 모바일 스탬프투어</ConTitle>
                <Date>2023.9.1(금) ~ 10.31.(화)</Date>
              </Text>
            </a>
          </Con>

          <Con>
            <a href="/">
              <Bg className="eventBanner03"></Bg>
              <Text>
                <ConTitle>서울교통공사 </ConTitle>
                <Date>2023.8.9.(수) ~ 9.27.(수)</Date>
              </Text>
            </a>
          </Con>
        </ConWrap>
      </Container>
    </Wrap>
  );
};
