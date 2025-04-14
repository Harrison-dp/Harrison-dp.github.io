import { useModeContext } from "../context/brandLayers";
import { brand, layerProps, properties } from "./brand";
const getRadiusClasses = (self,br,props)=>{
    let byDefault=['Card','descreat_card']
    if(!byDefault.includes(self))return ' '
    let borderclasses = ' '
    // if(props.report)console.log(br)
    if(byDefault.includes(self)&&!br&&!props.top&&!props.bottom&&!props.left&&!props.right)return ' all_br'
    if((!props.top && !props.left) && (['top','left','topLeft',undefined].includes(br)))borderclasses=borderclasses+' tl_br'
    if((!props.top && !props.right) && ['top','right','topRight',undefined].includes(br))borderclasses=borderclasses+' tr_br'
    if((!props.bottom && !props.left) && ['bottom','left','bottomLeft',undefined].includes(br))borderclasses=borderclasses+' bl_br'
    if((!props.bottom && !props.right) && ['bottom','right','bottomRight',undefined].includes(br))borderclasses=borderclasses+' br_br'
    return borderclasses
}


export const getClasses = (self,props={})=>{
    // if(props.identify)console.log(props)
    let Classes = self
    if(props.Shadow)Classes= Classes+' Shadow_'+props.ParentLayer+'_'+props.Mode.Title
    if(props.InnerShadow)Classes= Classes+' Inner_Shadow_'+props.MyLayer+'_'+props.Mode.Title

    Classes = Classes+ getRadiusClasses(self,props.BorderRadius&&props.BorderRadius,props)
    if(props.onClick)Classes = Classes+' hover_interaction'
    if(props.horizontal)Classes = Classes+' cd_lr' ;else{Classes = Classes+' cd_tb'}
    if(props.left && props.left === true)Classes = Classes+' docked_left'
    if(props.right && props.right === true)Classes = Classes+' docked_right'
    if(props.top && props.top === true)Classes = Classes+' docked_top'
    if(props.bottom && props.bottom === true)Classes = Classes+' docked_bottom'
    if(!props.overFlow && !props.hScroll && !props.vScroll)Classes= Classes+' hide_overflow'
    if(props.overFlow)Classes = Classes+' show_overflow'
    if(props.far)Classes=Classes+' relationship_far'
    else if(props.touching)Classes=Classes+' touching_content'
    if(props.hug)Classes=Classes+' hug_content'
    if(props.tightPadding)Classes=Classes+' padding_tight'
    if(props.hScroll)Classes=Classes+' h_scroll'
    if(props.far)Classes=Classes+' relationship_far'
    if(props.tight)Classes=Classes+' gap_tight'
    if(props.spread)Classes=Classes+' gap_spread'
    if(props.jSpread)Classes=Classes+' justify_spread'
    if(props.wrap)Classes=Classes+' flex_wrap'
    if(props.fill)Classes=Classes+' fill_fixed'
    if(props.WidthA)Classes=Classes+' Width_auto'
    if(props.absolute=='topright')Classes=Classes+' AB_top_right'
    if(props.textwrap)Classes=Classes+' text_wrap'

    if(props.className)Classes=Classes+' '+props.className
    if(props.AICenter)Classes=Classes+' AICentre';else Classes=Classes+' AIStretch'

    return Classes
}

export const getStyle = (styles,layerProp=new properties('One'))=>{
    // console.log(props)
    let Style = {
    }
    if(styles.CopyColor){Style.color = layerProp.Copy}
    if(styles.TitleColor){Style.color = layerProp.Title}
    if(styles.AccentColor){Style.color = layerProp.Accent}
    if(styles.Background){Style.background = layerProp.Background}
    if(styles.Accent){Style.background = layerProp.Accent}
    if(styles.AccentFill){Style.fill = layerProp.Accent}
    if(styles.TitleFill){Style.fill = layerProp.Title}
    Style={...styles,...Style}
    return Style
}