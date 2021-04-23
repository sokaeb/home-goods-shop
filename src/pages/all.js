import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import styled from 'styled-components';
import productsData from '../data/productData';


const Allproducts = () => {
    const [ products, setProducts ] = useState(productsData.productsData)
    // console.log(products)

    // useEffect(() => {
    //     const getProducts = () => {
    //         axios
    //             .get('https://ghibliapi.herokuapp.com/films')
    //             .then(res => {
    //                 setProducts(res.data)
    //                 // console.log(products)
    //             })
    //             .catch(err => {
    //                 console.error('Server Error', err)
    //             });
    //     }
    //     getProducts();
    // }, []);

    return (
        <Layout>
        <Helmet bodyAttributes={{ class: 'secondNavStyle' }} />
        <div>
            <ProductsTitle>All Products</ProductsTitle>
            <ProductContainer>
                {products.map((product, index )=> (
                    <ProductCard key={index}>
                        <h2>{product.name}</h2>
                        <ProductImg src={product.image} alt={product.alt} />
                        <ProductDetails>
                            <p className='price'>${product.price}</p>
                            <p className='desc'>{product.description}</p>
                        </ProductDetails>
                        <Button 
                        primary="true" 
                        css={`
                            top: 420px; 
                            font-size: 14px;
                        `}
                    >
                        Add to Cart
                    </Button>
                    </ProductCard>
                ))}
            </ProductContainer>
        </div>
        </Layout>
    )
}

export default Allproducts

const ProductsTitle = styled.h1`
    margin-top: 5%;
    text-align: center;
`

const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const ProductCard = styled.div`
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 3% auto;
    padding: 1%;

    @media screen and (max-width: 768px) {
        width: 95%;
    }
`

const ProductImg = styled.img`
    max-width: 100%;
    width: 90%;
`

const ProductDetails = styled.div`
    .price {
        font-size: 1.2rem;
        font-weight: bold;
    }
`