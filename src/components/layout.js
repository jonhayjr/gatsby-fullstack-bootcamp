import React from 'react'

import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header/>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout