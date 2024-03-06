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
  font-size: 24px;
  p {
    font-size: 18px;
    margin-left: 15px;
    line-height: 24px;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
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
