// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
