import React from 'react'
import Head from 'next/head'

export const DefaultLayout = ({children}) => {
    return(
        <>
            <div>
                <Head>
            <title>No Adjective</title>
            <link rel="icon" href="/favicon.png" />
            <meta
                name="description"
                content=" "
            />
            <meta
                property="og:image"
                content="favicon.png"
            />
            <meta name="og:title" content="NO ADJECTIVE" />
            <meta name="twitter:card" content="summary_large_image" />
                </Head>
            </div>
            <div className="container">
            {children}
            </div>
    
            <style jsx>{`   

                .container {
                    width: min(38rem, 90%);
                    margin: 0 auto;
                    height: 100vh; 
                    display: grid;
                    place-items: center;      
                    text-align: center;             
                }
           
           `}</style>
        </>
        )
}