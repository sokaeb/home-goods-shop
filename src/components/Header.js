import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { BiHomeSmile } from 'react-icons/bi';
import { navData } from '../data/NavData';
import { Button } from '../components/Button';

const Header = () => {
    return (
        <Nav className='nav'>
            <NavLink to='/'><BrandDiv><Logo /><p className='brand'>HOMESPACE</p></BrandDiv></NavLink>
            <Bars />
            <NavMenu>
                {navData.map((item, index) => (
                    <NavLink to={item.link} key={index}>{item.title}</NavLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button primary='true' to='/all'>Shop</Button>
            </NavBtn>
        </Nav>

    )
}

export default Header

const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1300px) / 2);
    z-index: 100;
    position: relative;

`

const NavLink = styled(Link)`
    color: #fff;
    text-shadow: 1px 1px 5px #000;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: rgb(242, 106, 46);
    }

    p.brand {
        font-size: 1.5rem;
        text-shadow: none;
    }
`

const BrandDiv = styled.div`
    display: flex;
    align-items: flex-end;
`

const Logo = styled(BiHomeSmile)`
    font-size: 2.5rem;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`