import { Space } from "react-zoomable-ui"
import { getStyle } from "../Objects/ClassManager"
import { Card, DescreatCard } from "./card"
import DeliveryMap, { prefixTable } from "./deliverymap"
import { LayerProvider, useLayerContext, useModeContext } from "../context/brandLayers"
import { useState } from "react"
import { Choice, IconButton, MultipleChoice, TextInput } from "./Buttons"
import SvgSizeMinamise from "./icons/SizeMinamise"
import SvgSizeMaxamise from "./icons/SizeMaxamise"
import SvgMiniDetails from "./icons/MiniDetails"
import SvgDetailsOpen from "./icons/DetailsOpen"
import { H1, H5, P1 } from "./TextStyles"
import { MaxamisableCard } from "./MaxamisableCard"
import { Calender } from "./Calender"

const WeekDays=['Su','Mo','Tu','We','Th','Fr','Sa']


export const DMFrame=()=>{
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
    console.log(Prefix)
    // if(Prefix !== undefined)console.log(Prefix(0))
    if(POcode && Prefix && Prefix[0]!==POcode.pref){
        setPOcode({pref:Prefix[0],total:PO})
    }
    if(prefixTable.obj[Prefix]){
        if(PO.length>1)setPOcode({pref:Prefix[0],total:PO,known:true})
        if(prefixTable.obj[Prefix].fc == 'na'){setMessage('we do not currently deliver to that postal region, contact customer service to learn more');return}
        if(prefixTable.obj[Prefix].fc !== from && from !== 'any'){setMessage('the postcode you entered is not fulfilled from the selected fullfilment centre');return}
        let message = 'Delivery is avalible on: '
        if(prefixTable.obj[Prefix].week.Mo)message=message+' Monday'
        if(prefixTable.obj[Prefix].week.Tu)message=message+' Tuesday'
        if(prefixTable.obj[Prefix].week.We)message=message+' Wednesday'
        if(prefixTable.obj[Prefix].week.Th)message=message+' Thursday'
        if(prefixTable.obj[Prefix].week.Fr)message=message+' Friday'
        if(prefixTable.obj[Prefix].ND)message=message+' or next day for an additoinal fee of £'+prefixTable.obj[Prefix].ND
        message=message+' from our '+prefixTable.obj[Prefix].fc+' fullfillment centre.'
        setMessage(message)
    }else{setMessage(undefined)}

}
const ValidateMonth=(array)=>{
    const isWeekDay=(date)=>{
        return WeekDays[date.getDay()] !== 'Sa' && WeekDays[date.getDay()] !== 'Su'?true:false
    }
    let today = new Date()
    let cutoff = new Date()
    cutoff.setDate(today.getDate()+2)
    // console.log(today)
    array.map((date,index)=>{
        if(!isWeekDay(date.date)){//is weekend
            array[index].Status='unavalible'
            array[index].Detail = 'weekend'
        }
        else if(date.date < today){//is in the passed
            array[index].Status='unavalible'
            array[index].Detail = 'passed'
        }
        else if(POcode && POcode.known){//if post code is entered             
            if(prefixTable.obj[POcode.pref].week[WeekDays[date.date.getDay()]] && date.date > cutoff){
            }else if(prefixTable.obj[POcode.pref].ND && isWeekDay(date.date)){
                array[index].Status = 'detail'
                array[index].Detail = '£'+prefixTable.obj[POcode.pref].ND
            }else{
                array[index].Status = 'unavalible'
                array[index].Detail = 'not on this day'
            }           
        }else{
            array[index].Status = 'Medium'
        }

    })
    return array 
}
const [date,setDate]=useState(undefined)
const [MenuOpen,setMenuOpen]=useState(true)
const MenuOpenStyle = {width:'35vw',height:'600px', transitionDuration: '0.5s',alignItems:'flex-end',overflow:'visible'}
const MenuClosedStyle = {width:'60px',height:'60px',transitionDuration: '0.5s'}
    return(
        <MaxamisableCard>
            
        <Space style={{alignItems:'center',padding:'var(--Margin)'}}>
            <div style={{width:'100%',height:'120%',display:'flex',alignItems:'stretch',justifyContent:'center'}}>
            <DeliveryMap from={from} POcode={POcode} day={day} nd={ND}/>

            </div>
        </Space>

        <DescreatCard Shadow absolute='topright' style={MenuOpen?MenuOpenStyle: MenuClosedStyle} overFlow>

            <Card layer="Three" style={{minWidth:'35vw',minHeight:'600px',position:'absolute'}} overFlow>
                <H1>Map Settings</H1>
                <H5>Fulfilled from</H5>
                <MultipleChoice OnSelect={selectFrom}>
                    <Choice fill value={'any'} Default>Anywhere</Choice>
                    <Choice fill value={'Manchester'}>Manchester</Choice>
                    <Choice fill value={'London'}>London</Choice>
                </MultipleChoice>
                {/* <H5>Delivery Day</H5>
                <MultipleChoice OnSelect={selectDay}>
                    <Choice fill value={'any'}Default>Any</Choice>
                    <Choice fill value={'Mo'}>Mo</Choice>
                    <Choice fill value={'Tu'}>Tu</Choice>
                    <Choice fill value={'We'}>We</Choice>
                    <Choice fill value={'Th'}>Th</Choice>
                    <Choice fill value={'Fr'}>Fr</Choice>
                </MultipleChoice> */}
                <H5>Your postcode</H5>
                <TextInput onChange={SelectPO} placeholder="SW12 1AP"/>
                <Calender HideWeekend Validator={ValidateMonth} setState={setDate} Condition={POcode}/>

                <P1 textwrap fill >{message && message}</P1>
            </Card>
                            <LayerProvider layer="Three">
                <IconButton style={{position:'absolute',right:'0'}} onClick={()=>setMenuOpen(!MenuOpen)}>
                {MenuOpen?<SvgMiniDetails/>:<SvgDetailsOpen/>}
                </IconButton>
            </LayerProvider>
            
        </DescreatCard>
        
    </MaxamisableCard>
    )
}