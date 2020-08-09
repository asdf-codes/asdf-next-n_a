import {IconShop} from '../electrons'

export default function Footer() {
    return(
    <>     
        
            
            <a href="https://noadjective-com.myshopify.com/">
            <div className="hello">         
                <IconShop/>
             <div>Shopify</div>
             </div>
             </a>
        

        <style jsx>{`  
        
        .hello {
                    width: 100%; 
                    
                    justify-content: center;
                }

                a {
                    
                    border: none;
                    background-color: black;
                    color: white;
                    
                    cursor: pointer;
                    padding: 2rem;
                    min-width: 125px;    
                    
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 21px;
                    font-weight: 400;   
                    text-align: center;
                    transition: 0.3s;
                    width:  100%;
                    position: fixed;
                    bottom: 0;
                    
                    justify-content: center;
                    display: flex;
                }

                a:hover {
                    background: linear-gradient(134.11deg, #6F6F6F 1.51%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #525252 0%, rgba(255, 255, 255, 0) 100%), #6A6A6A;
                    
                }

       `}</style>
    </>
    )
}