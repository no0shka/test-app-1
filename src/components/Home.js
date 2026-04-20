import React, { Fragment } from 'react'
import Header from './Header.js'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
        <Header />
        <Outlet />
    </Fragment>
  )
}
