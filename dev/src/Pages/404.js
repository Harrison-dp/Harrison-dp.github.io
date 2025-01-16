import { Card } from "../componants/card"
import { P1, Statment } from "../componants/TextStyles"

export const FourZeroFour = ()=>{
    document.title = '404: Page Not Found'
    return(
        <Card className='main'>
            <Statment>404</Statment>
            <P1>Page not fount</P1>
        </Card>
    )
}