import {Route, Routes} from 'react-router-dom'
import { Navbar } from "../pages/navbar/Navbar"
import { Home } from '../pages/home/Home'
import { Footer } from '../pages/footer/Footer'
import { Products } from '../pages/product/Products'
import { Description } from '../pages/description/Description'
import { Public } from './Public'
import { Private } from './Private'
import { Cart } from '../pages/cart/Cart'
import { AuthPage } from '../pages/auth/AuthPage'
import { Favourite } from '../pages/favourite/Favourite'
import { Checkout } from '../pages/checkout/Checkout'

export const Router = () => {
    return <>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/allProducts' element={<Products/>}> </Route>
            <Route path='/earing' element={<Products/>}> </Route>
            <Route path='/bracelet' element={<Products/>}> </Route>
            <Route path='/chain' element={<Products/>}> </Route>
            <Route path='/description' element={<Description/>}> </Route>
            <Route path='/auth' element={<Public> <AuthPage/> </Public>}> </Route>
            <Route path='/cart' element={<Cart/>}> </Route>
            <Route path='/favourite' element={<Private> <Favourite/> </Private> }> </Route>
            <Route path='/checkout' element={<Private> <Checkout/> </Private> }> </Route>

        </Routes>

        <Footer/>
    </>
}