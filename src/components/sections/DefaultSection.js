import utilStyles from '../../styles/utils.module.css'
import {useEffect, useState} from 'react'


export const DefaultSection = () => {

    const [offset, setOffset] = useState(0);

    useEffect(()=> {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [offset])


    return(
        <>
            <div 
            className={`${utilStyles.widthL} ${utilStyles.center} ${utilStyles.height100}`}
            >
            
            <div className={`${utilStyles.z1}`}style={{
                transform: `translateY(${offset }px)`
              }}>
                n_a
            </div>

            {/* <div className={`blackbox ${utilStyles.center}`}
            style={{
                transform: `translateY(${offset }px)`
              }}> */}
 
                <h1 style={{
            transform: `translateY(${offset * -2}px)`
          }}>
                    LIKE NOTHING YOU'VE WORE
                </h1>

                

                           
            </div>

            <a className={`${utilStyles.z1}`}style={{
                transform: `translateY(${offset }px)`
              }}>
                Scroll
            </a>

            

            <style jsx>{`   
                .blackbox {
                    width: 100%;
                    height: 40vh;
                    background-color: black;
                    overflow: hidden;
                }
                
                h1 {
                    color: white;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-weight: 700;
                    text-align: center;
                }


           `}</style>
        </>
    )
}