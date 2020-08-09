import React from 'react'
import {Button} from '../atoms'
import utilStyles from '../../styles/utils.module.css'

export const ProfitSection = () => {
    return (
        <>
        <div 
            className={` div ${utilStyles.widthL} ${utilStyles.center} ${utilStyles.height40}`}>
        <div className="textDiv">
            <div className='textContainer'>
            <span className="bigtext">NO</span>
            <span className="smalltext">PROFIT</span>
            </div>
        </div>
        <div className="textDiv">
            <div className='textContainer'>
            <span className="bigtext">NO</span>
            <span className="smalltextx">SHELF</span>
            </div>
        </div>
        
        
        </div>
        <style jsx>{` 

            .div {
                display: flex;
                justify-content: center;
            }

            .textDiv {
                background-color: black;
                cursor: pointer;
                transition: 0.3s;
                border: 2px solid white;
                height: 22vh;
            }

            .textDiv:hover {
                background-color: white;
            }

            .textContainer {
                padding: 1rem;
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
                font-size: 55px;
                line-height: 90.99%;
                text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,2px 2px 0 #000;
                /* or 48px */
                text-align: center;
                text-transform: uppercase;
                padding: 0 0.2rem;
                color: #FFFFFF;
            }

            .smalltextx { 
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