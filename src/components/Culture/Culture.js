import { styled } from "styled-components";
import webIcon from "../../assets/images/web.png";
import exprIcon from "../../assets/images/todo.png";
import travelIcon from "../../assets/images/travel.png";
import artIcon from "../../assets/images/art.png";
import musicIcon from "../../assets/images/music.png";

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
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 65px;
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
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }
`;
const Con = styled.div`
  width: 260px;
  border-radius: 40px;
  border: 1px solid #cbcbcb;
  padding: 45px 0;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    width: 240px;
    padding: 40px 0;
  }
`;
const Img = styled.img`
  width: 120px;
  margin-bottom: 45px;

  @media screen and (max-width: 1024px) {
    width: 100px;
    margin-bottom: 40px;
  }
`;
const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
const Desc = styled.p`
  max-width: 180px;
  font-size: 18px;
  color: #9d9d9d;
  text-align: center;
  word-break: keep-all;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    max-width: 160px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Culture = () => {
  const cultureArr = [
    {
      id: "0",
      imgName: webIcon,
      title: "서울교통공사 웹진",
      desc: "시민들의 일상을 지키는 서울교통공사 웹진",
    },
    {
      id: "1",
      imgName: exprIcon,
      title: "서울교통공사 견학",
      desc: "차량사업소를 체험해보세요",
    },
    {
      id: "2",
      imgName: travelIcon,
      title: "지하철 여행",
      desc: "볼거리와 먹거리 있는 지하철 여행",
    },
    {
      id: "3",
      imgName: artIcon,
      title: "미술관 대관",
      desc: "메트로 미술관에서 전시 신청을 받습니다",
    },
    {
      id: "4",
      imgName: musicIcon,
      title: "예술마당 공연",
      desc: "누구나 자유로운 지하철 예술공연",
    },
  ];

  return (
    <Wrap>
      <Container>
        <Title>문화 서비스</Title>

        <ConWrap>
          {cultureArr.map((cul) => (
            <Con key={cul.id}>
              <a href="/">
                <Img src={cul.imgName} alt={cul.title} />
                <SubTitle>{cul.title}</SubTitle>
                <Desc>{cul.desc}</Desc>
              </a>
            </Con>
          ))}
        </ConWrap>
      </Container>
    </Wrap>
  );
};
