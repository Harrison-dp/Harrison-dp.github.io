import { useEffect, useState } from "react"
import { Card, DescreatCard } from "../components/card"
import { DemoCard } from "../components/carddemo"
import DeliveryMap, { prefixTable } from "../components/deliverymap"
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { Slogan } from "../components/Slogan"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "../components/TextStyles"
import { ModeProvider, useLayerContext, useModeContext } from "../context/brandLayers"
import { Choice, MultipleChoice, TextInput } from "../components/Buttons"

export const DeliveryMapPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
document.title = 'Company Values'
const {layerProps}=useLayerContext()
const {Mode}=useModeContext()
const [day,setDay]=useState('any')
const [from,setFrom]=useState('any')
const [POcode,setPOcode]=useState(undefined)
const [ND,setND]=useState(false)
const [message,setMessage]=useState(undefined)
const selectFrom=(id,value)=>setFrom(value)
const selectDay=(id,value)=>setDay(value)
const SelectPO=(e)=>{
    let PO = e.target.value.toUpperCase()
    // console.log(PO)
    if(PO.length == 0)setPOcode(undefined)
    const Prefix = PO.match(/^[a-zA-Z]+/)
    // console.log(Prefix)
    // if(Prefix !== undefined)console.log(Prefix(0))
    if(Prefix && Prefix[0]!==POcode)setPOcode({pref:Prefix[0],total:PO})
    if(prefixTable[Prefix]){
        if(prefixTable[Prefix].fc == 'na'){setMessage('we do not currently deliver to that postal region, contact customer service to learn more');return}
        if(prefixTable[Prefix].fc !== from && from !== 'any'){setMessage('the postcode you entered is not fulfilled from the selected fullfilment centre');return}
        let message = 'Delivery is avalible on: '
        if(prefixTable[Prefix].week.Mo)message=message+' Monday'
        if(prefixTable[Prefix].week.Tu)message=message+' Tuesday'
        if(prefixTable[Prefix].week.We)message=message+' Wednesday'
        if(prefixTable[Prefix].week.Th)message=message+' Thursday'
        if(prefixTable[Prefix].week.Fr)message=message+' Friday'
        if(prefixTable[Prefix].ND)message=message+' or next day for an additoinal fee'
        message=message+' from our '+prefixTable[Prefix].fc+' fullfillment centre.'
        setMessage(message)
    }else{setMessage(undefined)}

}


return(
    <Card>
        <g style={{position:'absolute'}}>
            <Card layer="Three" hug absolute='topright' style={{maximumWidth:'30%'}}>
                <H1>Map Settings</H1>
                <H5>Fulfilled from</H5>
                <MultipleChoice OnSelect={selectFrom}>
                    <Choice fill value={'any'} Default>Anywhere</Choice>
                    <Choice fill value={'Manchester'}>Manchester</Choice>
                    <Choice fill value={'London'}>London</Choice>
                </MultipleChoice>
                <H5>Delivery Day</H5>
                <MultipleChoice OnSelect={selectDay}>
                    <Choice fill value={'any'}Default>Any</Choice>
                    <Choice fill value={'Mo'}>Mo</Choice>
                    <Choice fill value={'Tu'}>Tu</Choice>
                    <Choice fill value={'We'}>We</Choice>
                    <Choice fill value={'Th'}>Th</Choice>
                    <Choice fill value={'Fr'}>Fr</Choice>
                </MultipleChoice>
                <H5>Your postcode</H5>
                <TextInput onChange={SelectPO} placeholder="SW12 1AP"/>
                <P1 textwrap fill >{message && message}</P1>
        </Card>
        </g>
        
        <DeliveryMap from={from} POcode={POcode} day={day} nd={ND}/>

    </Card>

    )
}