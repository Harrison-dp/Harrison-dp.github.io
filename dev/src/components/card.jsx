import { brand, mode, properties } from '../Objects/brand';
import '../styling/card.css'

import React, { Children, cloneElement } from 'react';
import { H2 } from './TextStyles';
import { getClasses, getStyle } from '../Objects/ClassManager';
import { getXColor, LayerProvider, useLayerContext, useModeContext } from '../context/brandLayers';

export const Card = ({children,layer='One',content_direction='tb',style={},id=false,segment=undefined,...props})=> {
    const {Mode}=useModeContext()
    const layerProps=Mode.GetLayerProps(layer,segment)
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    props.MyLayer=layer
    id&&console.log(layerProps)

    props.MyLayer=layerProps.RelativeName
    props.Background = !props.Background? true:props.Background
return(
        <section className={getClasses('Card',props)} style={{backgroundColor: layerProps.Background,...style}} onClick={props.onClick&&props.onClick}>
            <LayerProvider layer={layer} Segment={props.Segment}>
            {children}
            </LayerProvider>
        </section>
    )
}

export const DescreatCard=({children,...props})=>{
    const {Mode}=useModeContext()
    const {layerProps}=useLayerContext()
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    return(
        <section {...props}className={getClasses('descreat_card',props)} style={props.style&&props.style}>
            {children}
        </section>
    )
}





