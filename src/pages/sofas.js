import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import sofaData from '../data/productData';
import '../styles/product-pages.css';

const Sofas = () => {
    const [ sofas, setSofas ] = useState(sofaData.sofaData)

    return (
        <Layout>
        <Helmet bodyAttributes={{ class: 'secondNavStyle' }} />
        <div>
            <h1 className='productsTitle'>Sofas</h1>
            <div className='productContainer'>
                {sofas.map((sofa, index )=> (
                    <div className='productCard' key={index}>
                        <h2>{sofa.name}</h2>
                        <img className='productImg' src={sofa.image} alt={sofa.alt} />
                        <div className='productDetails'>
                            <p className='price'>${sofa.price}</p>
                            <p className='desc'>{sofa.description}</p>
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

export default Sofas