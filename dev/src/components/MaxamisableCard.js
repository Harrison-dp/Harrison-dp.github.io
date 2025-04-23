import { useState } from "react"
import { Card, DescreatCard } from "./card"
import { LayerProvider } from "../context/brandLayers"
import { IconButton } from "./Buttons"
import SvgSizeMinamise from "./icons/SizeMinamise"
import SvgSizeMaxamise from "./icons/SizeMaxamise"

export const MaxamisableCard =({children,height='90vh',...props})=>{
    const [FullScreen,setFullScreen]=useState(false)
    const [hover,setHover]=useState(false)
    const fullScreenStyle = {position:'fixed',margin:'var(--Gap)',left:'0',right:'0',top:'0',bottom:'0',zIndex:'3'}
    const regularStyle = {height: height, position: "relative" ,zIndex:'0'}
    return(
        <DescreatCard className='main' style={{width:'-webkit-fill-available'}} overFlow>
                    <Card style={FullScreen?fullScreenStyle: regularStyle} Shadow AICentre id={true} className={FullScreen?'':'main'} overFlow>
                        {children}
                        <DescreatCard style={{position:'absolute',left:'var(--Gap)',top:'var(--Gap)',transitionDuration: '0.5s'}}Shadow={hover?true:false} >
                            <LayerProvider >
                                <IconButton onClick={()=>{setFullScreen(!FullScreen);setHover(false)}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                                    {FullScreen?<SvgSizeMinamise/>:<SvgSizeMaxamise/>}
                                </IconButton>
                            </LayerProvider>
                        </DescreatCard>
                    </Card>
        </DescreatCard>

        
    )
}