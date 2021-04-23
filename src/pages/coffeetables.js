import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import coffeetableData from '../data/productData';
import '../styles/product-pages.css';

const Coffeetables = () => {
    const [ coffeetables, setCoffeetables ] = useState(coffeetableData.coffeetableData)

    return (
       <Layout>
        <Helmet bodyAttributes={{ class: 'secondNavStyle' }} />
        <div>
            <h1 className='productsTitle'>Coffee Tables</h1>
            <div className='productContainer'>
                {coffeetables.map((coffeetable, index )=> (
                    <div className='productCard' key={index}>
                        <h2>{coffeetable.name}</h2>
                        <img className='productImg' src={coffeetable.image} alt={coffeetable.alt} />
                        <div className='productDetails'>
                            <p className='price'>${coffeetable.price}</p>
                            <p className='desc'>{coffeetable.description}</p>
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

export default Coffeetables

