import { Space } from "react-zoomable-ui"
import { getStyle } from "../Objects/ClassManager"
import { Card, DescreatCard } from "./card"
import DeliveryMap, { PrefixExcetions, prefixTable } from "./deliverymap"
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

function getLettersBeforeFirstNumber(str) {
    const match = str.match(/^[^\d]*/);
    return match ? match[0] : '';
}

export function ValidatePOcode(str){
    str = str.toUpperCase()
    if(str.length == 0)return undefined
    const Prefix = str.match(/^[^\d]*/);
    if(!Prefix[0])return undefined
    let Found =false
    if(prefixTable.obj[Prefix[0]])Found = true
    let hasExceltions = false
    let zone = false
    let week = false
    if(Found){
        hasExceltions = prefixTable.obj[Prefix[0]].exceptions
        zone =  prefixTable.obj[Prefix[0]].zone
        week = prefixTable.obj[Prefix[0]].week
        if(hasExceltions){
            PrefixExcetions.array.filter((ex)=>ex.code == Prefix[0]).map((ex)=>{
                if(str.startsWith(ex.ecode)){
                    zone = ex.zone
                    week = ex.week
                }
            })
        }
    }
    return({Prefix:Prefix[0],total:str,Found,hasExceltions,zone,week})
}
const isWeekDay=(date)=>{
    return WeekDays[date.getDay()] !== 'Sa' && WeekDays[date.getDay()] !== 'Su'?true:false
}
export const ValidateDate=(date,POcode,REPORT=false)=>{
    let today = new Date()
    let cutoff = new Date()
    if(REPORT)console.log(date)
    if(REPORT)console.log(POcode)

    cutoff.setDate(today.getDate()+2)
    if(!isWeekDay(date)){//is weekend
        if(REPORT)console.log('is weeken')

        return{Status:'unavalible',Detail:'weekend'}
    }
    else if(date < today){//is in the passed
        if(REPORT)console.log('is passed')
        return{Status:'unavalible',Detail:'passed'}
    }
    else if(POcode && POcode.Found){//if post code is entered
        if(REPORT)console.log('po found')
        let object = prefixTable.obj[POcode.Prefix]
        if(POcode.hasExceltions){
            PrefixExcetions.array.filter((ex)=>ex.code == POcode.Prefix).map((ex)=>{
                if(REPORT)console.log('mapping')  
                if(REPORT)console.log(ex)  

                if(POcode.total.startsWith(ex.ecode)){
                    object = ex
                    console.log('found exception')
                }
            })
        }    
        if(REPORT)console.log('exep handkle')   
        if(REPORT)console.log(POcode)  
        if(REPORT)console.log(object)  

        if(object.week[WeekDays[date.getDay()]] && date > cutoff){
            if(REPORT)console.log('return good')
            return{Status:'Good',Detail:''}

        }else if(object.ND && isWeekDay(date)){
            if(object.week[WeekDays[date.getDay()]]){
                if(REPORT)console.log('is cossed')
                return{Status:'Good',Detail:''}
            }else{return{Status:'detail',Detail:'£'+object.ND}
        }

        }else{
            if(REPORT)console.log('is not day')
            return{Status:'unavalible',Detail:'not on this day'}

        }           
    }else{
        if(REPORT)console.log('else')

        return{Status:'Medium',Detail:''}
    }
    if(REPORT)console.log('here?')

}
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
    let Validated = ValidatePOcode(e.target.value)
    if(POcode !== Validated)setPOcode(Validated)

    if(Validated && Validated.Found){
        let object = prefixTable.obj[Validated.Prefix]
        if(Validated.hasExceltions){
            PrefixExcetions.array.filter((ex)=>ex.code == Validated.Prefix).map((ex)=>{
                if(Validated.total.startsWith(ex.ecode)){
                    object = ex    
                }
            })
        }      
        if(object.fc == 'na'){setMessage('we do not currently deliver to that postal region, contact customer service to learn more');return}
        if(object.fc !== from && from !== 'any'){setMessage('the postcode you entered is not fulfilled from the selected fullfilment centre');return}
        let message = 'Delivery is avalible on: '
        if(object.week.Mo)message=message+' Monday'
        if(object.week.Tu)message=message+' Tuesday'
        if(object.week.We)message=message+' Wednesday'
        if(object.week.Th)message=message+' Thursday'
        if(object.week.Fr)message=message+' Friday'
        if(object.ND)message=message+' or next day for an additoinal fee of £'+prefixTable.obj[Validated.Prefix].ND
        message=message+' from our '+object.fc+' fullfillment centre.'
        setMessage(message)
    }else{setMessage(undefined)}

}


const ValidateMonth=(array)=>{
    let today = new Date()
    let cutoff = new Date()
    cutoff.setDate(today.getDate()+2)
    array.map((date,index)=>{
        array[index] = {...array[index],...ValidateDate(date.date,POcode)}
        

    })
    return array 
}
const [date,setDate]=useState(undefined)
const [MenuOpen,setMenuOpen]=useState(true)
const MenuOpenStyle = {width:'fit-content',height:'fit-content', transitionDuration: '0.5s',alignItems:'flex-end',overflow:'visible'}
const MenuClosedStyle = {width:'60px',height:'60px',transitionDuration: '0.5s'}
    return(
        <MaxamisableCard>
            
        <Space style={{alignItems:'center',padding:'var(--Margin)'}}>
            <div style={{width:'100%',height:'120%',display:'flex',alignItems:'stretch',justifyContent:'center'}}>
            <DeliveryMap from={from} POcode={POcode} day={day} date={date} nd={ND}/>

            </div>
        </Space>

        <DescreatCard Shadow absolute='topright' style={MenuOpen?MenuOpenStyle: MenuClosedStyle} overFlow>

            <Card layer="Three" style={{mxWidth:'35vw',height:'fit-content',width:'fit-content'}} overFlow>
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