import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import twitIcon from "../assets/images/icon_sns_twit.png";
import facebookIcon from "../assets/images/icon_sns_facebook.png";
import instaIcon from "../assets/images/icon_sns_instagram.png";
import blogIcon from "../assets/images/icon_sns_blog.png";
import waMark from "../assets/images/mark_wa.png";

const SFooter = styled.footer`
  width: 100%;
  background-color: #121212;
`;
const UpperFooter = styled.div`
  border-bottom: 0.5px solid #fff;
  padding: 60px 250px;
  display: flex;
  justify-content: space-between;
`;
const ListFooter = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 35px;
    font-size: 16px;
    font-weight: 300;
    color: #d0d0d0;
    &:first-child {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
const DownList = styled.div`
  display: flex;
  font-size: 16px;
  p {
    margin-right: 15px;
  }
`;

const LowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 250px;
`;
const InfoWrap = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 15px;
    color: #d0d0d0;
    margin-bottom: 40px;
  }
`;
const Txt = styled.h4`
  font-size: 15px;
  color: #d0d0d0;
  margin-bottom: 20px;
`;
const Copyright = styled.div`
  color: #d0d0d0;
  font-size: 15px;
  font-weight: 300;
`;
const SNSWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const SNSList = styled.ul`
  display: flex;
  margin-bottom: 40px;
  li {
    a > img {
      width: 35px;
      margin-left: 20px;
    }
  }
`;
const Mark = styled.img`
  width: 75px;
`;

export const Footer = () => {
  return (
    <SFooter>
      <UpperFooter>
        <ListFooter>
          <li>개인정보처리방침</li>
          <li>여객운송약관</li>
          <li>사규 제·개정 및 폐기 예고</li>
          <li>관련 법령 및 사규</li>
          <li>업무추진비 사용내역</li>
          <li>찾아오시는 길</li>
        </ListFooter>

        <DownList>
          <p>유관기관</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </DownList>
      </UpperFooter>

      <LowerFooter>
        <InfoWrap>
          <h3>대표전화 1577-1234</h3>
          <p>04806 서울특별시 성동구 천호대로 346</p>
          <Txt>
            청렴한 오늘의 당신이 발전하는 내일의 서울교통공사를 만들어갑니다.
          </Txt>
          <Copyright>Copyright 2024. imme6731 All right reserved.</Copyright>
        </InfoWrap>

        <SNSWrap>
          <SNSList>
            <li>
              <a href="/">
                <img src={twitIcon} alt="트위터" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={facebookIcon} alt="페이스북" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instaIcon} alt="인스타" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={blogIcon} alt="블로그" />
              </a>
            </li>
          </SNSList>
          <Mark src={waMark} alt="wa mark" />
        </SNSWrap>
      </LowerFooter>
    </SFooter>
  );
};
