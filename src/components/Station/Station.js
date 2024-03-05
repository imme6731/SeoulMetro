import {
  faAnglesRight,
  faSearch,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import cyberImg from "../../assets/images/cyberstation.png";

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;
const Container = styled.div`
  width: 1320px;
  position: absolute;
  top: -100px;
  display: flex;
  flex-direction: column;
`;
const UpperStation = styled.div`
  height: 100px;
  background-color: #1e3f5c;
  border-radius: 48px 48px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;
const SubwaySel = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  p {
    font-size: 18px;
    margin-left: 15px;
    line-height: 28px;
  }
`;
const Dept = styled.div`
  display: flex;
  align-items: center;
`;
const Arri = styled.div`
  display: flex;
  align-items: center;
`;
const Arrow = styled.div`
  font-size: 24px;
`;
const SearchStation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  p {
    font-size: 18px;
    margin-left: 15px;
    line-height: 24px;
  }
`;
const LowerStation = styled.div`
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

const LeftMenu = styled.div`
  width: 50%;
`;
export const Station = () => {
  return (
    <Wrap>
      <Container>
        <UpperStation>
          <SubwaySel>
            <Dept>
              <FontAwesomeIcon icon={faTrainSubway} />
              <p>출발역을 입력하세요</p>
            </Dept>
            <Arrow>
              <FontAwesomeIcon icon={faAnglesRight} />
            </Arrow>
            <Arri>
              <FontAwesomeIcon icon={faTrainSubway} />
              <p>도착역을 입력하세요</p>
            </Arri>
          </SubwaySel>

          <SearchStation>
            <FontAwesomeIcon icon={faSearch} />
            <p>노선 검색</p>
          </SearchStation>
        </UpperStation>
        <LowerStation>
          <RightMenu>
            <img src={cyberImg} alt="사이버스테이션" />
            <h3>사이버 스테이션</h3>
          </RightMenu>
          <LeftMenu></LeftMenu>
        </LowerStation>
      </Container>
    </Wrap>
  );
};
