import { styled } from "styled-components";
import cyberImg from "../../assets/images/cyberstation.png";
import subwayImg from "../../assets/images/subway.png";
import clockImg from "../../assets/images/clock.png";
import mapImg from "../../assets/images/map.png";
import metromapImg from "../../assets/images/metro_map.png";

const SLowerStation = styled.div`
  height: 300px;
  background-color: #fff;
  border-radius: 0 0 48px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  box-shadow: 0px 0px 10px #989898;
  @media screen and (max-width: 1460px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1024px) {
    height: 416px;
    flex-direction: column;
    justify-content: unset;
    padding: 60px 0;
  }
  @media screen and (max-width: 425px) {
    height: 275px;
    padding: 55px 0;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  img {
    width: 128px;
    margin-right: 25px;
  }
  h3 {
    font-size: 36px;
    font-weight: 500;
    color: #121212;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 100px;
    img {
      width: 110px;
      margin-right: 40px;
    }
    h3 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 55px;
    img {
      width: 80px;
      margin-right: 15px;
    }
    h3 {
      font-size: 22px;
    }
  }
`;
const StationBtn = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
`;
const Button = styled.div`
  width: 160px;
  height: 60px;
  background-color: #1e3f5c;
  border-radius: 30px;
  line-height: 60px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    height: 54px;
    border-radius: 27px;
    line-height: 54px;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    height: 42px;
    font-size: 14px;
    line-height: 42px;
  }
`;
const RightMenu = styled.div`
  width: 50%;
  color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    h2 {
      margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }
`;
const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  ul {
    &:first-child {
      margin-right: 25px;
    }
    li {
      a {
        display: flex;
        align-items: center;
        color: #121212;
      }
      &:first-child {
        margin-bottom: 25px;
      }
    }
  }
  img {
    width: 60px;
    margin-right: 25px;
  }

  @media screen and (max-width: 1024px) {
    ul {
      &:first-child {
        margin-right: 30px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 35px;
      margin-right: 15px;
    }
    p {
      font-size: 14px;
    }
    ul {
      li {
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export const LowerStation = () => {
  return (
    <SLowerStation>
      <LeftMenu>
        <img src={cyberImg} alt="사이버스테이션" />
        <StationBtn>
          <a href="/">
            <h3>사이버 스테이션</h3>
            <Button>바로가기</Button>
          </a>
        </StationBtn>
      </LeftMenu>
      <RightMenu>
        <h2>관련 메뉴</h2>
        <MenuBtn>
          <ul>
            <li>
              <a href="/">
                <img src={metromapImg} alt="노선도" />
                <p>노선도</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={mapImg} alt="주변지역안내" />
                <p>주변지역안내</p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">
                <img src={clockImg} alt="열차시간표" />
                <p>열차시간표</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={subwayImg} alt="역이용안내" />
                <p>역이용안내</p>
              </a>
            </li>
          </ul>
        </MenuBtn>
      </RightMenu>
    </SLowerStation>
  );
};
