export const Button = ({title}) => {
    return(
    <>
        <div>
            <a href="https://www.figma.com">
                {title}
            </a>
        </div>

        <style jsx>{`  
            a {
                color: black;
                background-color: white;
                border: 2px solid #000000;
                font-size: 24px;
                border-radius: 100px;
                height: 40px;
                width: 200px;
                transition: 0.3s;
                cursor: pointer;
                padding: 0.5rem;
            } 

            a:hover {
                color: white;
                background-color: black;
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