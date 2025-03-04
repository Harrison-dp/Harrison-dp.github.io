import { Children, cloneElement } from "react"
import { Card, DescreatCard } from "./card"
import { Section } from "./Elements"
import { Icons } from "./icons/index"
import SvgMiniArrowLeft from "./icons/MiniArrowLeft"
import SvgMiniArrowRight from "./icons/MiniArrowRight"
import { H2, P1 } from "./TextStyles"
 
export const HorizontalScroller = ({props,title,children})=>{
    return(
         <Section AICenter overFlow>
            <Section className='main' horizontal jSpread AICenter>
                <H2>{title}</H2>
                <Section tight horizontal hug>
                    <button><SvgMiniArrowLeft Inactive/></button>
                    <button><SvgMiniArrowRight Inactive/></button>
                </Section>
              
            </Section>
            <Section layer="Two"  hScroll style={{overflowY:'visible'}} >
                    <Section horizontal overFlow hug style={{padding:'0 calc(50vw - 540px)'}}>
                         {children.length>0?Children.map(children,(child,index)=>{

                            let newItem = cloneElement(child,{id:index,useRefs:index,style:{height:'-webkit-fill-available'}})
                            return (
                                <DescreatCard Shadow style={{minWidth:'25vw', }}>
                                {newItem}
                                </DescreatCard>
                            )
                        }):<P1>No Items In This Section</P1>}
                    </Section>
                
            </Section>
        </Section>
    )
}