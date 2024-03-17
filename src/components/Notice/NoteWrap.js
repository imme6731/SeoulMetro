import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/pc.css";
import { useState } from "react";
import { TapMenuArr } from "./TapMenuArr";

const SNoteWrap = styled.div`
  width: 70%;
  max-width: 1300px;
  border: 1px solid #e8e8e8;
  border-radius: 40px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: none;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 25px 0;
    margin-bottom: 25px;
  }
`;
const MenuWrap = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media screen and (max-width: 425px) {
    padding: unset;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;
const Menus = styled.ul`
  display: flex;
  font-size: 20px;
  line-height: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 38px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 34px;
  }
`;
const Menu = styled.li`
  width: 125px;
  text-align: center;
  border-right: 1px solid #e8e8e8;
  box-sizing: border-box;
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
  @media screen and (max-width: 1024px) {
    width: 110px;
  }
  @media screen and (max-width: 425px) {
    width: 88px;
  }
`;

const MoreBtn = styled.div`
  font-size: 22px;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;
const ListWrap = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Mark = styled.div`
  width: 70px;
  height: 40px;
  background-color: #1e3f5c;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin-right: 40px;

  @media screen and (max-width: 425px) {
    width: 55px;
    height: 35px;
    border-radius: 18px;
    line-height: 35px;
    font-size: 14px;
    margin-right: 15px;
  }
`;
const Text = styled.div`
  width: 100%;
  a {
    display: flex;
    justify-content: space-between;
  }
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
const SubTitle = styled.p`
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1460px) {
    max-width: 400px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 300px;
  }
  @media screen and (max-width: 425px) {
    max-width: 270px;
  }
`;
const Date = styled.p`
  color: #707070;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NoteWrap = () => {
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <SNoteWrap>
      <MenuWrap>
        <Menus>
          {TapMenuArr.map((tap, index) => (
            <Menu
              className={index === currentTab ? "isActive" : ""}
              onClick={() => selectMenuHandler(index)}
            >
              {tap.menu}
            </Menu>
          ))}
        </Menus>
        <MoreBtn>
          <a href="/">
            <FontAwesomeIcon icon={faPlus} />
          </a>
        </MoreBtn>
      </MenuWrap>
      <ListWrap>
        {TapMenuArr[currentTab].content.map((not) => (
          <List key={not.id}>
            <Mark>{TapMenuArr[currentTab].menu.slice(0, 2)}</Mark>
            <Text>
              <a href="/">
                <SubTitle>{not.text}</SubTitle>
                <Date>{not.date}</Date>
              </a>
            </Text>
          </List>
        ))}
      </ListWrap>
    </SNoteWrap>
  );
};
