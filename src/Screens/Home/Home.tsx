// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './Components/listProduct';




const Home: React.FC = () => {
  return (
      <ProductList/>
  );
};

export default Home;
