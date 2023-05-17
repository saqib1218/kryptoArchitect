import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = (props: any) => {
   return (
      <div>
         <Header />
         {props.children}
         <Footer />
      </div>
   )
}

export default Layout