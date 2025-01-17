import { Card } from "../components/card"
import { H1 } from "../components/TextStyles"

export const Home = ({...props})=>{
    document.title = 'Guidlines: Home'

    return(
        <Card className='main'>
            <H1>Home Page</H1>
        </Card>
    )
}