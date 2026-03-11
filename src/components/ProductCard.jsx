// src/components/ProductCard.jsx
import { Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product, onDelete }) {
  const { id, name, price, inStock } = product;

  return (
    <Card 
      className={`${styles.card} ${!inStock ? styles.outOfStock : ''} ${styles.cardGlass}`}
      variant="outlined"
      style={{ 
        opacity: inStock ? 1 : 0.6, 
        background: inStock ? 'rgba(255, 255, 255, 0.9)' : 'rgba(240, 240, 240, 0.8)',
        border: inStock ? '1px solid rgba(102, 126, 234, 0.2)' : '1px solid rgba(100, 100, 100, 0.3)'
      }}
    >
      {/* FIX: "Phone" is inside this div, ensuring closest('div') finds 'outOfStockClass' */}
      <div className={!inStock ? styles.outOfStock : ''}>
        <CardContent>
          <Typography variant="h5" 
          component="div"
           className={!inStock ? styles.outOfStock : ""}
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
