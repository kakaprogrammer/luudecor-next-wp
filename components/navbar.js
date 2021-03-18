import Link from 'next/link';
import styled, {css} from 'styled-components';
import {menuData} from '../data'; 
import {default as Bars} from '../public/images/bars.svg';


const Nav = styled.nav`
    height: 60px;
    padding: 0 16px;
    top: 0;
    width: 100%;
    //background-color: #f7931e;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 100;

`;

const Logo = styled.div`
    text-align:center;
    padding: 5px;
    border-radius: 2px;
    background-color: #fff;
    cursor: pointer;

    & > img {
        object-fit: content;
        height: 30px;
    }
`;

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    /* background-color: gray; */
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: white;
    transform: translate(-50%, 35%);
    &:hover path {
    fill: white;
  } 

  }
`;

const BurgerImageStyle = styled.svg`
    rect {
      stroke: grey;
    }    
    &:hover {
      rect {
        stroke: black;
      }
    }      
`;


const NavMenu = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavMenuLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 100%;
  text-decoration: none
`;


export default function Navbar() {
  return (
      
    <Nav>
      <Link href="/">
        <Logo>
            <img src="https://luudecor.com/wp-content/uploads/2020/05/luudecor1.png" alt="luudecor" />
        </Logo>
      </Link>
      
      <MenuBars>
        <BurgerImageStyle viewBox="0 0 32 32" width="32" height="32" fill="none">   
          <rect x="15" y="5" width="17" height="3" rx="1" fill="white"/>
          <rect x="4" y="15" width="28" height="3" rx="1" fill="white"/>
          <rect x="10" y="25" width="22" height="3" rx="1" fill="white"/>
        </BurgerImageStyle>
      </MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <Link href={item.link}  key={index}>
            <NavMenuLinks>
                {item.title}
            </NavMenuLinks></Link>
        ))}
      </NavMenu>      .
    </Nav>
  )
}