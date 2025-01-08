import { brand, mode, properties } from '../Objects/brand';
import '../styling/card.css'

import React, { Children, cloneElement } from 'react';
import { H2 } from './TextStyles';
import { getClasses, getStyle } from '../Objects/ClassManager';
import { LayerProvider, useLayerContext, useModeContext } from '../context/brandLayers';

export const Card = ({children,layer='One',content_direction='tb',...props})=> {
    const {Mode,mode}=useModeContext()
    const {layerProps}=useLayerContext()
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    props.MyLayer=layer
    // if(props.report)console.log(props)
    // console.log(Mode.Layers[layer])
    props.Background = !props.Background? true:props.Background
return(
        <section className={getClasses('Card',props)} style={{backgroundColor: Mode.Layers[layer]?Mode.Layers[layer].Background:Mode.Layers.One.Background,...props.style}} onClick={props.onClick&&props.onClick}>
            <LayerProvider layer={layer}>
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
        <section className={getClasses('descreat_card',props)} style={props.style&&props.style}>
            {children}
        </section>
    )
}





