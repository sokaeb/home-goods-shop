import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import lampData from '../data/productData';
import '../styles/product-pages.css';

const Lamps = () => {
    const [ lamps, setLamps ] = useState(lampData.lampData)

    return (
        <Layout>
        <Helmet bodyAttributes={{ class: 'secondNavStyle' }} />
        <div>
            <h1 className='productsTitle'>Lamps</h1>
            <div className='productContainer'>
                {lamps.map((lamp, index )=> (
                    <div className='productCard' key={index}>
                        <h2>{lamp.name}</h2>
                        <img className='productImg' src={lamp.image} alt={lamp.alt} />
                        <div className='productDetails'>
                            <p className='price'>${lamp.price}</p>
                            <p className='desc'>{lamp.description}</p>
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

export default Lamps
