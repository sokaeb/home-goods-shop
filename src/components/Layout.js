import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoData from './Seo';
import { GlobalStyle } from "../styles/GlobalStyles";
import '../styles/header.css';

const Layout = ({ children }) => {
    return (
        <>
        <GlobalStyle />
        <SeoData />
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout
