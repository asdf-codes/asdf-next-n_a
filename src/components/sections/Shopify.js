import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'
import utilStyles from '../../styles/utils.module.css'

export const Shopify = () => {
    return (
        <>
        <div 
            className={`div ${utilStyles.widthL} ${utilStyles.center} ${utilStyles.height40}`}>
        

        {/* <div>
            <img className="image" src="/weird.png" />
        </div> */}

        <div className="flex">
        <div >
            <Button title="Get It On Shopify"/>
        </div>
        <div>
            <Button title="Read Our Story"/>
        </div>
        </div>
        </div>
        <style jsx>{`   
            .flex {
                display: flex;
                gap: 1rem;
            }

            .div {
                margin-bottom: 30vh;
            }
            
       
       `}</style>
    </>
    )
}