import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';

const products = [
    {id:1, name:'Plant', description: 'Abelia', price:'$5', image: 'https://www.thespruce.com/thmb/vOlwMCmMlotN46efo3Oo0BbpGV8=/600x400/abelia-growing-guide-5216289-hero-bcca3a9260ae44109c507904c233de62.jpg'},
    {id:2, name:'Plant', description: 'Baby Toes', price:'$10', image: 'https://www.thespruce.com/thmb/6-sEs6JJRLuE-4QeFSzUdpS5BXA=/600x400/baby-toes-succulents-profile-5181590-hero-6f9965cac18e456ab261355fb3c92a29.JPG' }
    
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
            ))}
        </Grid>

    </main>
    )
 


}

export default Products;