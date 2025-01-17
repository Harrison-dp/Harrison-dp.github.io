import React, { Children, cloneElement } from 'react';
import '../styling/textstyles.css'
import QuotationMark from './quotation';
import { brand, layerProps, mode, properties } from '../Objects/brand';
import { Section } from './Elements';
import { getClasses, getStyle } from '../Objects/ClassManager';
import { useLayerContext } from '../context/brandLayers';

const ColorText = (use,layerProps)=>{return({color:layerProps[use]})}


export const T = ({children,layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h1 {...props}
        class={getClasses('title',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</h1>
    )
}
export const ST = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props}
        class={getClasses('sub_title',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</p>
    )
}
export const H1 = ({children,layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h1 
        {...props}
        className={getClasses('',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</h1>
    )
}
export const H2 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h2 
        {...props}
        className={getClasses('',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</h2>
    )
}
export const H3 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h3 
        {...props} 
        className={getClasses('',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</h3>
    )
}
export const H4 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h4 
        {...props} 
        className={getClasses('',props)} style={{
            color:layerProps.Title,
            ...props.style
        }}>{children}</h4>
    )
}
export const H5 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h5 
        {...props} 
        className={getClasses('',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</h5>
    )
}
export const Quote = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <div>
        <QuotationMark AccentFill layerProp={layerProp}/>
        <p 
            {...props} 
            className={getClasses('Quote',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
        </div>
    )
}
export const P1 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props} 
        className={getClasses('p1',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
    )
}
export const P2 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props} 
        className={getClasses('p2',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
    )
}
export const P3 = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props} 
        className={getClasses('p3',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
    )
}
export const Source = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props} 
        className={getClasses('Quote_Source',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
    )
}
export const FP = ({children,layer='One',layerProp=undefined, ...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <p 
        {...props} 
        className={getClasses('fineprint',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</p>
    )
}
export const Statment = ({children,layer='One',layerProp=undefined,...props})=>{
    const {layerProps} = useLayerContext()
    return(
        <h1
        {...props} 
        className={getClasses('statment_text',props)} style={{
            color:layerProps.Copy,
            ...props.style
        }}>{children}</h1>
    )
}
export const BulletPoint = ({children,layer='One',layerProp=undefined,...props})=><Section content_direction='lr'>{cloneElement(children,{children:'— ',className:'Bullet'})}{children}</Section>