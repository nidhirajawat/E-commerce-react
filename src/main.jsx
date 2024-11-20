// import React from 'react';
// import { createRoot } from 'react-dom/client';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
// import App from './App.jsx';
// import 'swiper/css';

// // Bootstrap CSS and JS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// // Fonts and Icons
// import './assets/css/icofont.min.css';
// import './assets/css/animate.css';
// import './assets/css/style.min.css';
 
// createRoot(document.getElementById('root')).render(
//   <App/>
// );





import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

// Importing pages
import Home from './components/home/Home.jsx';
import Blog from './components/blog/Blog.jsx';
import Shop from './components/shop/Shop.jsx';
import SingleProduct from './components/shop/SingleProduct.jsx';
import CartPage from './components/shop/CartPage.jsx';

// Swiper CSS
import 'swiper/css';

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Fonts and Icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

// Set up routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main layout
    children: [
      { path: '', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:id', element: <SingleProduct /> },
      { path: 'cart-page', element: <CartPage /> },
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
