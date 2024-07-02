import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NotFound from './components/NotFound';
import Product from './components/Admin/Product';
import Orders from './components/Admin/Orders';
import Dashboard from './components/Admin/Dashboard';
import Payments from './components/Admin/Payments';
import Customers from './components/Admin/Customers';
import Settings from './components/Admin/Settings';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin'>
          <Route path='products' element={<Product />} />
          <Route path='orders' element={<Orders />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='payments' element={<Payments />} />
          <Route path='customers' element={<Customers />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;