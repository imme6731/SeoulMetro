import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { fontSize, pcInnerLayoutSize } from "../GlobalStyled";
import {
  faBars,
  faChevronDown,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LogoImg from "../assets/images/logo_origin.png";

const SHeader = styled.header`
  max-width: 1320px;
  height: auto;
  padding: ${pcInnerLayoutSize.padding};
`;
const UpperHeader = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
`;
const LangWrap = styled.div`
  display: flex;
  align-items: center;
  color: #707070;
`;
const LangBtn = styled.div`
  width: 26px;
  height: 26px;
  font-size: 26px;
  margin-right: 10px;
`;
const Lang = styled.p`
  font-size: ${fontSize.pcDesc};
  margin-right: 8px;
`;
const More = styled.div`
  font-size: 18px;
`;
const Logo = styled.div`
  width: 147px;
  height: 43px;
  img {
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;
const SNB = styled.ul`
  display: flex;
  align-items: center;
  li {
    width: 26px;
    height: 26px;
    margin-left: 35px;
    font-size: 26px;
    line-height: 26px;
    color: #707070;
  }
`;
const LowerHeader = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: mintcream;
`;
const MenuWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #707070;
  font-weight: 500;
  font-size: ${fontSize.pcMenu};
`;

export const Header = () => {
  return (
    <SHeader>
      <UpperHeader>
        <LangWrap>
          <LangBtn>
            <FontAwesomeIcon icon={faGlobe} />
          </LangBtn>
          <Lang>Language</Lang>
          <More>
            <FontAwesomeIcon icon={faChevronDown} />
          </More>
        </LangWrap>
        <Logo>
          <img src={LogoImg} alt="로고이미지" />
        </Logo>
        <SNB>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </SNB>
      </UpperHeader>
      <LowerHeader>
        <MenuWrap>
          <li>이용정보</li>
          <li>안전환경</li>
          <li>시민 참여</li>
          <li>알림마당</li>
          <li>정보공개</li>
          <li>공사소개</li>
        </MenuWrap>
      </LowerHeader>
    </SHeader>
  );
};
