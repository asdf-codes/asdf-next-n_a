export const Button = ({title}) =>{
    return(
    <>
        <div>
            <a href="https://noadjective-com.myshopify.com/">
                {title}
            </a>
        </div>

        <style jsx>{`  
            a {
                color: black;
                
                border: 2px solid black;
                font-size: 24px;
                border-radius: 100px;
                height: 40px;
                width: 200px;
                transition: 0.3s;
                cursor: pointer;
                padding: 0.5rem;
                
    mix-blend-mode: exclusion;
            } 

            a:hover {
                color: white;
                background-color: black;
                mix-blend-mode: exclusion;
                border: 2px solid #000000;
                font-size: 24px;
                border-radius: 100px;
                height: 40px;
                width: 200px;
                
            } 
       
       `}</style>
    </>
    )
}