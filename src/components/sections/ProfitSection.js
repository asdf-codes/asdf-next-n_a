import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'

export const ProfitSection = () => {
    return (
        <>
        <DefaultLayout>
        
        <div id="next">
            <h2>NO PROFIT</h2>
            <h4>$$ For Those Who Need It More </h4>
        </div>

        <div>
            <img className="image" src="/Heart.png" />
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