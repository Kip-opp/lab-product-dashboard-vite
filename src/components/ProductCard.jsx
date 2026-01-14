// src/components/ProductCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product, onDelete }) {
  const { id, name, price, inStock } = product;

  return (
    <Card 
      className={`${styles.card} ${!inStock ? 'outOfStockClass' : ''}`}
      variant="outlined"
      style={{ opacity: inStock ? 1 : 0.6, background: inStock ? 'white' : '#f0f0f0' }}
    >
      {/* FIX: "Phone" is inside this div, ensuring closest('div') finds 'outOfStockClass' */}
      <div className={!inStock ? 'outOfStockClass' : ''}>
        <CardContent>
          <Typography variant="h5" 
          component="div"
           className={!inStock ? "outOfStockClass" : ""}
           >
            {name}
          </Typography>
          
          <Typography color="text.secondary" sx={{ mb: 1.5 }}>
            Price: {price}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Chip 
                label={inStock ? "In Stock" : "Out of Stock"} 
                color={inStock ? "success" : "default"} 
                variant="outlined" 
              />
              <Button variant="contained" disabled={!inStock} size="small">
                Buy
              </Button>
            </div>

            <Button 
              variant="outlined" 
              color="error" 
              size="small" 
              onClick={() => onDelete(id)}
            >
              Remove
            </Button>
          </Box>
        </CardContent>
      </div>
    </Card>
  );
}

export default ProductCard;
