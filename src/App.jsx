 // src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Box, FormControlLabel, Switch, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Apple-inspired Theme
const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h2: { fontWeight: 600, letterSpacing: '-0.02em', color: '#1D1D1F' },
  },
  shape: { borderRadius: 12 },
  palette: {
    primary: { main: '#0071E3' }, // Apple Blue
    background: { default: '#F5F5F7' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // No all-caps
          fontWeight: 500,
          borderRadius: 20,
          padding: '6px 20px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, borderRadius: 8 },
      },
    },
  },
});


const App = () => {
  // TODO: Define initial product data
  // NOTE: Data MUST match the test file expectations (Laptop, Phone, exact prices as strings)
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  // TODO: Implement state to manage filtering
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Helper to remove product (required for the "Remove" button test)
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // TODO: Implement logic to filter products based on availability
  const displayedProducts = showInStockOnly 
    ? products.filter(product => product.inStock) 
    : products;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      {/* TODO: Add 'Product Dashboard' title here */}
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Product Dashboard
      </Typography>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <FormControlLabel
          control={
            <Switch 
              checked={showInStockOnly}
              onChange={() => setShowInStockOnly(!showInStockOnly)}
              color="primary"
            />
          }
          label={<Typography sx={{ fontWeight: 500, color: '#86868B' }}>Available Now</Typography>}
        />
      </Box>

      {/* TODO: Render the ProductList component and pass filtered products */}
      {/* Passing handleDelete so the child components can remove items */}
      <ProductList products={displayedProducts} onDelete={handleDelete} />
      
    </Container>
    </ThemeProvider>
  );
};

export default App;
