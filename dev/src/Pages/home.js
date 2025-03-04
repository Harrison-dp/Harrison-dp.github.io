import { Card } from "../components/card"
import { Section } from "../components/Elements"
import { HorizontalScroller } from "../components/horizontalscroller"
import Svg2Countertop from "../components/icons/Countertop"
import SvgCupon from "../components/icons/Cupon"
import { LinkCard } from "../components/linkcard"
import { H1, H2 } from "../components/TextStyles"
import { SharePointLinks } from "../context/SharePointLinks"
import { FormLinks } from "../context/FormLinks"


export const Home = ({...props})=>{
    document.title = 'Guidlines: Home'

    return(
        <Section fill layer="Two" left right top AICenter far>
            <Section className='main'>
                <H1>Welcome to the David Phillips intranet</H1>
            </Section>


                <HorizontalScroller title='Form links'>
                    {FormLinks.map(({Title,Description,Icon,URL})=>{
                        return(
                            <LinkCard 
                                style={{width:'fit-content',hight:'-webkit-fill-available'}}
                                title={Title}
                                description={Description}
                                icon={Icon}
                                url={URL}
                            />
                        )
                    })}
                </HorizontalScroller>

           
       
        <Card className='main' AICenter Shadow>
                <H2>Home Page</H2>
            </Card>
            <Section className='main' overFlow>
                <Section horizontal overFlow>
                    <LinkCard fill Shadow
                        title='SharePoint'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Office'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow 
                        title='iDesign'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='PODFather'
                        icon={<Svg2Countertop/>}
                    />
                </Section>
                <Section horizontal overFlow>
                    <LinkCard Shadow
                        title='Team Viewer'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Org Search'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Sales Forecast'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='ARG Dynamics'
                        icon={<Svg2Countertop/>}
                    />
                </Section>
                <Section horizontal overFlow>
                    <LinkCard Shadow
                        title='Dynicamics NAV'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Teams'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Stripe'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Zetadocs Expenses'
                        icon={<Svg2Countertop/>}
                    />
                </Section>
                <Section horizontal overFlow>
                    <LinkCard Shadow
                        title='Zetadocs Approvals'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='SSRS'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='StaffCircle'
                        icon={<Svg2Countertop/>}
                    />
                    <LinkCard Shadow
                        title='Employee Perks'
                        icon={<SvgCupon/>}
                    />
                </Section>
                
            </Section>
            <HorizontalScroller title='SharePoint links'>
                    {SharePointLinks.map(({Title,Description,Icon,URL})=>{
                        return(
                            <LinkCard
                                title={Title}
                                description={Description}
                                icon={Icon}
                                url={URL}
                            />
                        )
                    })}
                </HorizontalScroller>
        </Section>
    )
}