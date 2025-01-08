import React, { Children, cloneElement } from 'react';
import { brand, mode, properties } from '../Objects/brand';
import '../styling/card.css'
import { getClasses, getStyle } from '../Objects/ClassManager';
import { Icon } from './Icons';
import { FP, H5 } from './TextStyles';
import { Card } from './card';
import { useLayerContext, useModeContext } from '../context/brandLayers';

export const Section = ({children,layer='One',...props})=>{
    const layerProps = useLayerContext()
    return(
        <section className={getClasses('Section',props)}id={props.id&& props.id} style={props.style&&props.style}>{children}</section>
    )
}
export const HL = ({layer='One',layerProp})=>{
    const {layerProps}=useLayerContext()
    return (<div className='hline' style={{backgroundColor:layerProps.Accent}}/>)
}
export const VL = ({layer='One',layerProp})=>{
    const {layerProps}=useLayerContext()
    return (<div className='vline' style={{backgroundColor:layerProps.Accent}}/>)
}

export const CardButton = ({icon,title,subtitle,action,...props})=>{
    const RunAction = ()=>{
        window.open(action.url,'_blank')
    }
    return(
        <button type='button'class='reset'onClick={RunAction}>
            <Card layer='One' tight hug horizontal AICenter width='415px'>
                <Icon name={icon}/>
                <Section tight hug>
                <H5>{title}</H5>
                <FP>{subtitle}</FP>
                </Section>
            </Card>
        </button>
    )
}

export const Dot=({...props})=>{
    const {layerProps}=useLayerContext()
    const {Mode}=useModeContext()
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    return(
        <div onClick={props.onClick} className={getClasses('Dot',props)} style={{backgroundColor:layerProps.Background,...props.style}}>
            {props.icon&&props.icon}
        </div>
    )
}