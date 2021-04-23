import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import productsData from '../data/productData';
import '../styles/product-pages.css';

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
            <h1 className='productsTitle'>All Products</h1>
            <div className='productContainer'>
                {products.map((product, index )=> (
                    <div className='productCard' key={index}>
                        <h2>{product.name}</h2>
                        <img className='productImg' src={product.image} alt={product.alt} />
                        <div className='productDetails'>
                            <p className='price'>${product.price}</p>
                            <p className='desc'>{product.description}</p>
                        </div>
                        <Button 
                        primary="true" 
                        css={`
                            top: 420px; 
                            font-size: 14px;
                        `}
                    >
                        Add to Cart
                    </Button>
                    </div>
                ))}
            </div>
        </div>
        </Layout>
    )
}

export default Allproducts

// const ProductsTitle = styled.h1`
//     margin-top: 5%;
//     text-align: center;
// `

// const ProductContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;

//     @media screen and (max-width: 768px) {
//         flex-direction: column;
//     }
// `

// const ProductCard = styled.div`
//     border: 2px solid grey;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 30%;
//     margin: 3% auto;
//     padding: 1%;

//     @media screen and (max-width: 768px) {
//         width: 95%;
//     }
// `

// const ProductImg = styled.img`
//     max-width: 100%;
//     width: 90%;
// `

// const ProductDetails = styled.div`
//     .price {
//         font-size: 1.2rem;
//         font-weight: bold;
//     }
// `