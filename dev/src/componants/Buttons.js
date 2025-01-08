import { Children, cloneElement, createContext, useContext, useState } from "react"
import { useLayerContext, useModeContext } from "../context/brandLayers"
import { getClasses } from "../Objects/ClassManager"
import { H5, P1 } from "./TextStyles"

const ActivationTypes={
    link:{
        run:(props)=>{

        }
    },
    Set:{
        run:(props)=>{
            // console.log(props.function)
            props.function(props.new)
        }
    },
    route:{}
}



export const Button = ({children,type,onClick=undefined,...props})=>{
    const press=()=>{
        // console.log(ActivationTypes[type].run(props))
        ActivationTypes[type].run(props)
    }
    const {layer,layerProps} = useLayerContext()
    return(
        <button className='reset default_button' onClick={onClick} style={{backgroundColor: layerProps.Background}}>
            <P1>{children}</P1>
        </button>
    )
}

export const PrimaryButton=({children,type,onClick=undefined,...props})=>{
    const {Mode}=useModeContext()
    const {layerProps}=useLayerContext()
    const buttonLayerProps = Mode.Absolute[layerProps.Accent]

    return(
        <button onClick={onClick} className='reset default_button primary_button' style={{background:props.Active?layerProps.Accent:layerProps.Background,outline:layerProps.Accent+'var(--Strock) solid'}}>
            <H5>{children}</H5>
        </button>
    )
}

const ChoiceContext = createContext()

export const MultipleChoice = ({children,OnSelect=()=>{},...props})=>{
    const {layerProps} = useLayerContext()
    const [Selected,SetSelected]=useState()
    const Secetionfunction=(id,value)=>{
        OnSelect(id,value)
        SetSelected(id)
    }



    props.horizontal=true
    return(
        <ChoiceContext.Provider value={{Selected:Selected}}>
            <div class={getClasses('multiple_choice_holder',props)}style={{background:layerProps.Background,outline:layerProps.Accent+'var(--Strock) solid'}}>
                {Children.map(children,(child,index)=>{
                    let Choicefunction=()=>{Secetionfunction(index,child.props.value)}
                    let newChild = cloneElement(child,{id:index,onClick:Choicefunction})
                    return newChild
                })}
                {/* {children} */}
            </div>
        </ChoiceContext.Provider>

    )
}
export const useChoiceContext = ()=>useContext(ChoiceContext)

export const Choice = ({children,id,...props})=>{
    const {layerProps} = useLayerContext()
    const {Selected}=useChoiceContext()
    let Active = Selected===id||(props.Default&&Selected==undefined)?true:false
    return(
        <button onClick={props.onClick} class={getClasses('multiple_choice_option',props)} style={{background:Active?layerProps.Accent:layerProps.Background}}>
            <H5>{children}</H5>
        </button>
    )
}

export const TickBox = ({children,Active,OnClick,...props})=>{

    return(
        <section onClick={OnClick} class={getClasses('tick_box',props)}>

            <H5>{children}</H5>
        </section>
    )
}