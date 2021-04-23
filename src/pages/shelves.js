import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import shelfData from '../data/productData';
import '../styles/product-pages.css';

const Shelves = () => {
    const [ shelves, setShelves ] = useState(shelfData.shelfData)

    return (
         <Layout>
         <Helmet bodyAttributes={{ class: 'secondNavStyle' }} />
        <div>
            <h1 className='productsTitle'>Shelves</h1>
            <div className='productContainer'>
                {shelves.map((shelf, index )=> (
                    <div className='productCard' key={index}>
                        <h2>{shelf.name}</h2>
                        <img className='productImg' src={shelf.image} alt={shelf.alt} />
                        <div className='productDetails'>
                            <p className='price'>${shelf.price}</p>
                            <p className='desc'>{shelf.description}</p>
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

export default Shelves
