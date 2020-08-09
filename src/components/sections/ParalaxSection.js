import * as React from 'react'



export const ParalaxSection = () => {
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
        <div className="App">
        <section className="hero">
        <img
          src="tlen.png"
          alt="test"
          className="parallax"
          style={{
            transform: `translateY(${offset * -2}px)`
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">OTTAWA </h1>
          <h2 className="sub-headline" style={{
            transform: `translateX(${offset * -2}px)`
          }}>we do everything related to art</h2>
        </div>
      </section>
      <p className="word" style={{
            transform: `translateY(${offset * -1}px)`
          }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        consequatur quisquam accusamus nobis repellat, velit sequi et autem
        tenetur aliquid eum cupiditate ipsa. Est odit quas maiores voluptatem a
        dolores? 
      </p>
      <img
          src="tlen.png"
          
          style={{
            transform: `translateY(${offset * -2}px)`,
            zIndex: -3
          }}
        />
      {/* Make space to scroll */}
      <section className="overflow" />
    </div>
            
            <style jsx>{`  

                .word {
                    margin: 0 4rem;
                    mix-blend-mode: exclusion;
                    z-index: 2;
                    color: white
                }

/* layout */
                .hero {
                width: 100%;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
                }

                .text-wrapper {
                text-align: center;
                }

                .headline {
                font-size: 6rem;
                color: white;
                mix-blend-mode: difference;
                margin: 0;
                line-height: 1;
                }

                /* .headline::first-letter {
                font-size: 20rem;
                } */

                .sub-headline {
                font-size: 6rem;
                text-transform: uppercase;
                color: white;
                mix-blend-mode: exclusion;
                }

                .parallax {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -1;
                }

                .overflow {
                height: 200vh;
                }

/* Helper Function */


/* Parallax Styles */

           
           `}</style>
        </>
    )
}