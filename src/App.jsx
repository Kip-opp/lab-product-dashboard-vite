 // src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Box, FormControlLabel, Switch, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Modern bluish-purple theme
const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h2: { 
      fontWeight: 700, 
      letterSpacing: '-0.02em', 
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    h5: {
      fontWeight: 600,
      color: '#1a1a1a'
    }
  },
  shape: { borderRadius: 16 },
  palette: {
    primary: { 
      main: '#667eea',
      contrastText: '#ffffff'
    },
    background: { 
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.9)'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 24,
          padding: '10px 24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
            transform: 'translateY(-2px)'
          }
        },
        outlined: {
          borderColor: '#667eea',
          color: '#667eea',
          '&:hover': {
            borderColor: '#5a6fd8',
            color: '#5a6fd8',
            background: 'rgba(102, 126, 234, 0.1)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: { 
          fontWeight: 600, 
          borderRadius: 12,
          border: '1px solid rgba(102, 126, 234, 0.3)'
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#667eea',
        },
        track: {
          backgroundColor: '#667eea',
          opacity: 0.3
        }
      }
    }
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
