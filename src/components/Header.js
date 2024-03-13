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
  padding: ${pcInnerLayoutSize.padding};

  @media screen and (max-width: 1460px) {
    padding: 0 200px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 25px;
  }
`;
const UpperHeader = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
  border-bottom: 1px solid #e8e8e8;
  @media screen and (max-width: 1024px) {
    border-bottom: none;
    padding: 20px 0;
  }
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
  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
`;
const Lang = styled.p`
  font-size: ${fontSize.pcDesc};
  margin-right: 8px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const More = styled.div`
  font-size: 18px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const Logo = styled.div`
  width: 147px;
  height: 43px;
  img {
    width: 100%;
    height: 100%;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    width: 123px;
    height: 36px;
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
    &:first-child {
      margin-left: 0;
    }

    @media screen and (max-width: 1024px) {
      width: 24px;
      height: 24px;
      margin-left: 20px;
    }
  }
  a {
    color: #707070;
  }
`;
const LowerHeader = styled.div`
  width: 100%;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: mintcream; */
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const MenuWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #707070;
  font-weight: 500;
  font-size: ${fontSize.pcMenu};
  a {
    color: #707070;
  }
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
          <a href="/">
            <img src={LogoImg} alt="로고이미지" />
          </a>
        </Logo>
        <SNB>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </SNB>
      </UpperHeader>
      <LowerHeader>
        <MenuWrap>
          <li>
            <a href="/">이용정보</a>
          </li>
          <li>
            <a href="/">안전환경</a>
          </li>
          <li>
            <a href="/">시민참여</a>
          </li>
          <li>
            <a href="/">알림마당</a>
          </li>
          <li>
            <a href="/">정보공개</a>
          </li>
          <li>
            <a href="/">공사소개</a>
          </li>
        </MenuWrap>
      </LowerHeader>
    </SHeader>
  );
};
