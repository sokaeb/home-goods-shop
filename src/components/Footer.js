import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiShoppingBag } from 'react-icons/fi';

const Footer = () => {

    return (
        <FooterContainer>
            <BagContainer>
                    <Bag />
                    <p>View Bag</p>
            </BagContainer>
            <FooterLinksContainer>
                    <FooterText>
                        <h1>HOMESPACE</h1>
                        <p>Create your dream home.</p>
                    </FooterText>

                    <FooterLinkItems>
                        <FooterLinkTitle>About HOMESPACE</FooterLinkTitle>
                        <FooterLink to="/">Our Story</FooterLink>
                        <FooterLink to="/">Inspiration</FooterLink>
                        <FooterLink to="/">Sustainability</FooterLink>
                        <FooterLink to="/">Product News</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksContainer>

                <FooterLinksContainer>
                <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Pinterest</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Help</FooterLinkTitle>
                        <FooterLink to="/">FAQ</FooterLink>
                        <FooterLink to="/">Contact Us</FooterLink>
                        <FooterLink to="/">Customer Service</FooterLink>
                        <FooterLink to="/">Return Policy</FooterLink>
                        <FooterLink to="/">Feedback</FooterLink>
                    </FooterLinkItems>
            </FooterLinksContainer>
        </FooterContainer>  
    )
}

export default Footer


const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2 );
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const FooterLinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const FooterText = styled.div`
    padding: 0 2rem;
    text-align: center;

    h1 {
        margin-bottom: 3rem;
        color: #000;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 5%;
        
        h1 {
            margin-bottom: 1rem;
            font-size: 20px;
        }
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const BagContainer =  styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 5%;
        margin-top: -5%;
    }
`

const Bag = styled(FiShoppingBag)`
    margin-right: 1%;
`