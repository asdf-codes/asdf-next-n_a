import React from 'react'
import {Button} from '../atoms'
import {DefaultLayout} from '../layouts'
import utilStyles from '../../styles/utils.module.css'

export const ShelfSection = () => {
    return (
        <>
        <div 
            className={`${utilStyles.widthL} ${utilStyles.center} ${utilStyles.height40}`}>
        <div className="textDiv">
            <span className="bigtext">NO</span>
            <span className="smalltext">SHELF</span>
        </div>
        
        
        
        </div>
        <style jsx>{` 

            .textDiv {
                background-color: black;
                cursor: pointer;
            }

            .textDiv:hover {
                background-color: white;
            }


            .bigtext {
                padding-top: 1rem;
                font-family: Helvetica;
                font-style: normal;
                font-weight: bold;
                font-size: 139.977px;
                line-height: 78.49%;
                color: black;
                /* or 110px */
                text-align: center;
                text-transform: uppercase;
                text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,2px 2px 0 #fff;
                display: block;
                
            }

        
       
            .smalltext { 
                font-family: Helvetica;
                font-style: normal;
                font-weight: bold;
                font-size: 62px;
                line-height: 90.99%;
                text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,2px 2px 0 #000;
                /* or 48px */
                text-align: center;
                text-transform: uppercase;
                padding: 0 0.2rem;
                color: #FFFFFF;
            }


       `}</style>
    </>
    )
}