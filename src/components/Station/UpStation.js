import {
  faAnglesRight,
  faSearch,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const UpperStation = styled.div`
  height: 100px;
  background-color: #1e3f5c;
  border-radius: 48px 48px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media screen and (max-width: 1460px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 1024px) {
    height: 224px;
    flex-direction: column;
    justify-content: unset;
    padding: 0;
    background-color: #6e90ae;
  }
  @media screen and (max-width: 425px) {
    height: 200px;
  }
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
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 16px;
      margin-left: 20px;
    }
  }
`;
const Dept = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 22px 40px;
    border-bottom: 0.5px solid #95a7b7;
    box-sizing: border-box;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 40px;
  }
`;
const Arri = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 22px 40px;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 40px;
  }
`;
const Arrow = styled.div`
  font-size: 24px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const SearchStation = styled.div`
  font-size: 24px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    p {
      font-size: 18px;
      margin-left: 15px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    background-color: #1e3f5c;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    height: 64px;
  }
`;

export const UpStation = () => {
  return (
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
        <a href="/">
          <FontAwesomeIcon icon={faSearch} />
          <p>노선 검색</p>
        </a>
      </SearchStation>
    </UpperStation>
  );
};
