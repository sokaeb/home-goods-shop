import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button } from './Button';

const Products = ({heading}) => {
const data = useStaticQuery(graphql`
    query ProductsQuery {
        allProductsJson {
            edges {
                node {
                    alt
                    button
                    name
                    img {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    link
                }
            }
        }
    }
`)

function getProducts(data) {
    const productsArray = []
    data.allProductsJson.edges.forEach((item, index) => {
        productsArray.push(
            <ProductCard key={index}>
                <ProductImg image={item.node.img.childImageSharp.gatsbyImageData} alt={item.node.alt} />
                <ProductDetail>
                    <ProductText>
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </ProductText>
                    <Button 
                        to={item.node.link} 
                        primary="true" 
                        css={`
                            position: absolute; 
                            top: 420px; 
                            font-size: 14px;
                        `}
                    >
                        {item.node.button}
                    </Button>

                </ProductDetail>
            </ProductCard>
        )
    })

    return productsArray
}

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>{getProducts(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Products

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #000;
    color: #fff;
`
const ProductsHeading = styled.div`
 font-size: clamp(1.2rem, 5vw, 3rem);
 text-align: center;
 margin-bottom: 5rem;
 color: #fff;
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const ProductImg = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%)
    }
`

const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

const ProductText = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ProductTitle = styled.div`
    font-weight: 400;
    font-size
`
