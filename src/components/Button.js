import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#F26A2E' : 'none')};
    white-space: nowrap;
    padding: ${( { big } ) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({big}) => (big ? '20px' : '16px')};
    font-weight: ${({bold}) => (bold ? 'bold' : 'none')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration:none;
    transition: 0.3s;
    border-radius: ${({round}) => (round ? '50px' : 'none')};
    /* border: ${({ border }) => (border ? '2px solid #F26A2E' : 'none')}; */

    &:hover {
    background: ${({ primary }) => (primary ? '#000' : '#F26A2E')};
    }

`