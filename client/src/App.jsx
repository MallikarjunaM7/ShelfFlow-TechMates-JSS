import Dashboard from './Components/Dashboard';
import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contactus from './components/Contactus'
import Updateproduct from './components/Updateproduct'
import Addproduct from './components/Addproduct'
import Login from "./Components/Login"
import BarcodeScanner from "./pages/react"
import SupplierDetails from './components/SupplierDetail';
import ProductDetailPage from './components/ProductDetailPage';
import NotificationPage from './components/NotificationPage';

import HomePage from './Components/Homepage';

import AddByBarcodeScanner from './pages/addStock';
import ProductTable from './components/Moresoldproduct';


function App(){


  return (
    <>
      <Router>
        <Routes>

        <Route path="/supplierdetail" element={<SupplierDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/updateproduct" element={<Updateproduct />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path='/notification' element={<NotificationPage/>}/>
        <Route path='/soldproducts' element={<ProductTable/>}/>
        <Route path='/suppliers' element={<SupplierDetails/>}/>
        <Route path="/Productdetail" element={<ProductDetailPage />} />
        <Route path="/scan" element={<BarcodeScanner />} />
        <Route path="/" element={<Dashboard />} />
        <Route path='/notification' element={<NotificationPage/>}/>
        <Route path="product/:product" element={<Updateproduct/>}/>


        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path='/AddProductDetail' element={<AddByBarcodeScanner/>}/>
        <Route path="/scan" element={<BarcodeScanner />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route path='/notification' element={<NotificationPage/>}/> */}

        </Routes>
      </Router>
    </>
  )


}


export default App
