# Product Dashboard Manager

## Overview

A modern, responsive e-commerce product dashboard built with React, Material-UI, and CSS Modules. This application provides a sleek interface for managing and displaying product inventory with enhanced remove button visibility, advanced filtering capabilities, and a beautiful bluish-purple gradient theme.

## Features

### 🎨 **Modern Design System**
- **Bluish-Purple Gradient Theme**: Elegant color scheme with glassmorphism effects
- **Enhanced Remove Buttons**: Bright red styling with high contrast for better visibility
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Floating card effects and hover interactions
- **Accessibility**: Built with Material-UI for enhanced accessibility

### 📊 **Core Functionality**
- **Product Display**: Clean card-based layout for product information
- **Availability Filtering**: Toggle switch to show only in-stock items
- **Stock Management**: Visual indicators for product availability
- **Product Actions**: Buy and Remove functionality for each product
- **Data-Driven**: Products loaded from JSON configuration file

### 🛠️ **Product Catalog**
- **10 Diverse Products**: Laptop, Phone, Tablet, Wireless Earbuds, Smartwatch, Camera, Monitor, Keyboard, Mouse, Speaker
- **All Products Available**: All items marked as in-stock for immediate display
- **Rich Product Data**: Name, price, and availability status for each item

### 🔧 **Technical Highlights**
- **React 18**: Modern React with hooks and functional components
- **Material-UI v5**: Professional component library with custom theming
- **CSS Modules**: Scoped styling with enhanced button visibility
- **JSON Data Integration**: Products loaded from `db.json` configuration
- **Jest & React Testing Library**: Comprehensive test coverage

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone http://git@github.com:Kip-opp/lab-product-dashboard-vite.git
   cd lab-product-dashboard-vite
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5174` to view the application.

## Enhanced Features

### 🔴 **Improved Remove Button Visibility**
The remove buttons have been enhanced with:
- Bright red background (#ef4444) for high contrast
- White text for clear readability
- Bold font weight and uppercase styling
- Hover effects with shadow and transform animations
- Proper padding and border radius for better appearance

### 📦 **Product Catalog**
The dashboard now includes 10 diverse products loaded from `db.json`:
- **Electronics**: Laptop, Phone, Tablet, Camera, Monitor
- **Audio**: Wireless Earbuds, Speaker
- **Accessories**: Smartwatch, Keyboard, Mouse
- **Availability**: All products are marked as in-stock for immediate display

## Usage

### Product Management
- **View Products**: All products are displayed in a responsive grid layout
- **Filter by Availability**: Use the toggle switch to show only available products
- **Stock Status**: Products display clear availability indicators
- **Product Actions**: Each card includes Buy and Remove buttons

### Design Features
- **Glassmorphism Cards**: Modern frosted glass effect with subtle shadows
- **Gradient Background**: Beautiful bluish-purple gradient theme
- **Hover Effects**: Smooth animations on card interactions
- **Responsive Grid**: Adapts seamlessly to different screen sizes

## Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Individual product display component
│   └── ProductList.jsx      # Product grid container
├── styles/
│   └── ProductCard.module.css  # Scoped styling for product cards
├── App.jsx                  # Main application component
├── App.css                  # Application-level styles
├── index.css               # Global styles and CSS variables
└── main.jsx                # Application entry point
```

## Technology Stack

### Frontend Framework
- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server

### UI & Styling
- **Material-UI (MUI) v5**: Component library with theme customization
- **CSS Modules**: Scoped CSS with modern design patterns
- **CSS-in-JS**: Inline styles for dynamic theming

### Development Tools
- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting

## Customization

### Theme Configuration
The application uses a custom theme defined in `src/App.jsx`. To modify the color scheme:

```javascript
const theme = createTheme({
  palette: {
    primary: { 
      main: '#your-color-here',
      contrastText: '#your-text-color'
    }
  }
});
```

### CSS Variables
Update the CSS variables in `src/index.css` for global styling changes:

```css
:root {
  --modern-accent: #your-accent-color;
  --modern-shadow: your-shadow-definition;
}
```

## Testing

Run the test suite with:

```bash
npm test
```

The application includes comprehensive tests covering:
- Component rendering
- User interactions
- State management
- Conditional rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/branch)
3. Commit your changes (`git commit -m 'Add feature/branch'`)
4. Push to the branch (`git push origin feature/branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the `docs/` folder
- Review the test files for usage examples

---

**Built with ❤️ using React and Material-UI**