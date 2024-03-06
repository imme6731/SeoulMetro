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
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
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
`;
const LeftMenu = styled.div`
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
`;

export const LowerStation = () => {
  return (
    <SLowerStation>
      <RightMenu>
        <img src={cyberImg} alt="사이버스테이션" />
        <StationBtn>
          <a href="/">
            <h3>사이버 스테이션</h3>
            <Button>바로가기</Button>
          </a>
        </StationBtn>
      </RightMenu>
      <LeftMenu>
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
      </LeftMenu>
    </SLowerStation>
  );
};
