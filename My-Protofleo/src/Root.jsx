import React from 'react'
import Header from './MainCompnets/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './MainCompnets/Footer/Footer'
import NavFooter from './MainCompnets/NavFooter/NavFooter'

export default function () {
  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    <NavFooter/>
    </>
  )
}
