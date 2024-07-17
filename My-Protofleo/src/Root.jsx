import React from 'react'
import Header from './MainCompnets/Header/Header'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}
