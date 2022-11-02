import React from 'react'
import './App.css'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Menu from './components/Menu'
import Categories from './components/Categories'

function App() {
  return (
    <BrowserRouter>
          <Menu/>
         <Routes>
           <Route path = {`/`} element ={<home/>}/>
           <Route path = {`/Home`} element ={<Home/>}/>
           <Route path = {`/categories`} element ={<Categories/>}/>

           <Route path = {`/products`} element ={<Products/>}/>
         </Routes>
    </BrowserRouter>
  )
}

export default App

