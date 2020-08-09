import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'

export const ShelfSection = () => {
    return (
        <>
        <DefaultLayout>
        <div>
            <h2>NO SHELF</h2>
            <h4>We Only Make A Couple Items</h4>
        </div>
        
        <div>
            <img className="image" src="/mind.png" />
        </div>

        <div>
            <Button title="Get It On Shopify"/>
        </div>
        </DefaultLayout>
        <style jsx>{` 
        
        .image {
            max-width: 400px;
        }
       
       `}</style>
    </>
    )
}