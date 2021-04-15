import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Email from "../components/Email";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Products heading="Our Products" />
      <Email />
    </Layout>
  )
    
}

export default IndexPage
