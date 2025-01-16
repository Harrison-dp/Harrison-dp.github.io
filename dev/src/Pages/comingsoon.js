import { Card } from "../componants/card"
import { P1, Statment } from "../componants/TextStyles"

export const ComingSoon = ()=>{
    document.title = 'Coming Soon'
    return(
        <Card className="main" far Shadow>
            <Statment>Coming Soon</Statment>
            <P1>This page is not yet finished.</P1>
        </Card>
    )
}