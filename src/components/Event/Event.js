import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 200px;
  color: #121212;
  a {
    color: #121212;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 100px;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1460px) {
    width: auto;
    max-width: none;
    padding: 0 80px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
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

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Con = styled.div`
  width: 400px;
  background-color: #f6f6f6;
  border-radius: 40px;
  overflow: hidden;

  @media screen and (max-width: 1460px) {
    width: 360px;
  }
  @media screen and (max-width: 1320px) {
    width: 320px;
  }
  @media screen and (max-width: 1200px) {
    width: 290px;
  }
  @media screen and (max-width: 1110px) {
    width: 270px;
  }
  @media screen and (max-width: 1024px) {
    &:last-child {
      display: none;
    }
    width: 350px;
  }
  @media screen and (max-width: 920px) {
    width: 300px;
  }
  @media screen and (max-width: 840px) {
    width: 270px;
  }
  @media screen and (max-width: 740px) {
    &:last-child {
      display: block;
      margin-bottom: 0;
    }
    width: 320px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 425px) {
    &:last-child {
      display: block;
      margin-bottom: 0;
    }
    width: 270px;
    margin-bottom: 40px;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 380px;
  @media screen and (max-width: 1460px) {
    height: 350px;
  }
  @media screen and (max-width: 1320px) {
    height: 310px;
  }
  @media screen and (max-width: 1200px) {
    height: 280px;
  }
  @media screen and (max-width: 1110px) {
    height: 260px;
  }
  @media screen and (max-width: 1024px) {
    height: 340px;
  }
  @media screen and (max-width: 920px) {
    height: 290px;
  }
  @media screen and (max-width: 840px) {
    height: 260px;
  }
  @media screen and (max-width: 740px) {
    height: 310px;
  }
  @media screen and (max-width: 425px) {
    height: 260px;
  }
`;
const Text = styled.div`
  padding: 40px 40px;

  @media screen and (max-width: 425px) {
    padding: 25px 25px;
  }
`;
const ConTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1320px) {
    width: 100%;
    max-width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
const Date = styled.p`
  font-size: 16px;
  color: #707070;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
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
                <ConTitle>서울교통공사 지하철 사진 공모전</ConTitle>
                <Date>2023.8.9.(수) ~ 9.27.(수)</Date>
              </Text>
            </a>
          </Con>
        </ConWrap>
      </Container>
    </Wrap>
  );
};
