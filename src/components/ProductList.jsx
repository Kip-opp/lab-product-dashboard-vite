import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography } from '@mui/material';


const ProductList = ({ products, onDelete }) => {
  // TODO: Check if the product list is empty and display a message if needed
if (!products || products.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        No products available.
      </Typography>
    );
  }

  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    
    </div>
  );
};

export default ProductList;
