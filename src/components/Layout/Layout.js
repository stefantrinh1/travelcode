import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Context from "../Context"

export default function Layout({children}) {
    const context = React.useContext(Context)

    return (
        <>
            <Navigation />
                
                {console.log(context)}
                {children}

            <Footer />
        </>
    )
}
