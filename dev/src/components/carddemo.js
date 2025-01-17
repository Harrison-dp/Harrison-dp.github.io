import { useState } from "react"
import { Card } from "./card"
import { Dot, HL, Section } from "./Elements"
import { FP, H1, H3, H4, H5, P1, P3 } from "./TextStyles"
import { ModeProvider, useModeContext } from "../context/brandLayers"
import { Button, Choice, MultipleChoice, PrimaryButton } from "./Buttons"
import { getViewBoxValue, Logo } from "./logo"
import { ClipableLogo } from "./clipboardslogo"

export const DemoCard = ()=>{
    const [CardProps,setCardProps]=useState({})
    const toggledockleft=()=>setCardProps({...CardProps,left:!CardProps.left})
    const toggledockright=()=>setCardProps({...CardProps,right:CardProps.right?false:true})
    const toggledocktop=()=>setCardProps({...CardProps,top:CardProps.top?false:true})
    const toggledockbottom=()=>setCardProps({...CardProps,bottom:CardProps.bottom?false:true})
    const layerChooser=(id,value)=>setCardProps({...CardProps,layer:value})
    const {Mode}=useModeContext()
    const modechoose=(id,value)=>{
        setCardProps({...CardProps,mode:value})}
    console.log(Mode)
    const Segchoose=(id,value)=>setCardProps({...CardProps,Segment:value})
    return(
        <Section horizontal far>
            <Section >
                <H3>What are Layers & Cards?</H3>
                <P3>Part of material based design are our cards. We use cards to create depth, the layer refers to the importance of information being help by the card, and where it sits in the visual hierarch. The most visible difference between layers are the colours used, each layer has a number of properties: Background, Title, Copy, Accent, and Shadow. Below is an example of the first 3 of these properties and how they change across layers, in total there are 8 layers, split between the two modes: Light & Dark. Cards act like their own content frame with padding matching the overall content margin. Where card corners are visible they should be rounded, card should either sit within the margin or extend of the edge of the page.</P3>
                <H4>Demonstration Card</H4>
                <Section hug>
                <H5>Segment</H5>
                <MultipleChoice OnSelect={Segchoose}>
                    <Choice value={undefined} Default>None</Choice>
                    <Choice value={'REA'}>Residential</Choice>
                    <Choice value={'BTR'}>BTR</Choice>
                    <Choice value={'LLS'}>Landlords</Choice>
                    <Choice value={'DEV'}>Developers</Choice>
                    <Choice value={'INT'}>International</Choice>
                    <Choice value={'FFE'}>Contractors</Choice>
                    <Choice value={'BFS'}>Student</Choice>


                </MultipleChoice>
            </Section>
            <Section hug>
                <H5>Layer</H5>
                <MultipleChoice OnSelect={layerChooser}>
                    <Choice value='One' Default>One</Choice>
                    <Choice value='Two'>Two</Choice>
                    <Choice value='Three'>Three</Choice>
                    <Choice value='Four'>Four</Choice>

                </MultipleChoice>
            </Section>
            <Section hug>
                <H5>Mode</H5>
                <MultipleChoice OnSelect={modechoose}>
                    <Choice value={undefined} Default>default</Choice>
                    <Choice value={0}>light</Choice>
                    <Choice value={1}>dark</Choice>
                </MultipleChoice>
            </Section>
            <Section hug>
                <H5>Docked</H5>
                <Section horizontal tight>
                    <PrimaryButton Active={CardProps.left} onClick={toggledockleft}>Left</PrimaryButton>
                    <PrimaryButton Active={CardProps.right} onClick={toggledockright}>Right</PrimaryButton>
                    <PrimaryButton Active={CardProps.top} onClick={toggledocktop}>Top</PrimaryButton>
                    <PrimaryButton Active={CardProps.bottom} onClick={toggledockbottom}>Bottom</PrimaryButton>
                </Section>
           
            </Section>

            </Section>
            <ModeProvider demo mode={CardProps.mode===undefined?Mode.P:CardProps.mode}  report>

            <Card  layer="Two" InnerShadow style={{width:'fill'}} Segment={CardProps.Segment===undefined?'none':CardProps.Segment} report>
                    <Card {...CardProps} Shadow report>
                        <ClipableLogo height='200px' text/>                   
                        {/* <Logo height='200px' text/> */}
                        <H1>Card</H1>
                        <P1>Example of standard text written on any card componed</P1>
                        <HL/>
                        <FP>Example of fine print</FP>
                    </Card>
                   
            </Card>
            </ModeProvider>

        </Section>

    )
}