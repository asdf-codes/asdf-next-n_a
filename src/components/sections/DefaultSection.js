import {DefaultLayout} from '../layouts'
import {Button} from '../atoms'
import {Bubble1} from '../atoms/constSvg/constSvg'

export const DefaultSection = () => {
    return(
        <>
            <div>
            <DefaultLayout>
            <div>
                n_a
            </div>
                {/* <Bubble1/> */}
                <h1>
                    DESIGNED AND SOLD IN <a href='https://613.news/'>613</a>
                </h1>
            <Button title="Get It On Shopify"/>
            </DefaultLayout>
            </div>

            <style jsx>{`   
           
           `}</style>
        </>
    )
}