import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'
import utilStyles from '../../styles/utils.module.css'

export const AdjectiveSection = () => {
    return (
        <>
        <div 
            className={`div ${utilStyles.widthL} ${utilStyles.center} ${utilStyles.height40}`}>
        <div>
        <h2>NO ADJECTIVE</h2>
        <h4> Decription Is Unnecessary</h4>
        </div>

        {/* <div>
            <img className="image" src="/weird.png" />
        </div> */}

        
        </div>
        <style jsx>{`   
            .flex {
                display: flex;
            }

            .image {
            max-width: 400px;
             }
            
            
       
       `}</style>
    </>
    )
}