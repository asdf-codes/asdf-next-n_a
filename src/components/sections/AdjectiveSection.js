import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'

export const AdjectiveSection = () => {
    return (
        <>
        <DefaultLayout>
        <div>
        <h2>NO ADJECTIVE</h2>
        <h4> Decription Is Unnecessary</h4>
        </div>

        <div>
            <img className="image" src="/weird.png" />
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