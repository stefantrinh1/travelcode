import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'


export default function Layout({children}) {

    return (
        <>
            <Navigation />
                
    
                {children}

            <Footer />
        </>
    )
}
