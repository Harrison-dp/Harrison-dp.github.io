import { renderToString } from "react-dom/server"
import { Card, DescreatCard } from "../components/card"
import { DemoCard } from "../components/carddemo"
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { Icons } from "../components/icons/index"
import { Slogan } from "../components/Slogan"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "../components/TextStyles"
import { ModeProvider, useModeContext } from "../context/brandLayers"

export const IconsPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
    document.title = 'Guidlines: Icons'
    // document.addEventListener('copy', function(e) {
    //     console.log(e)
    //     // e.clipboardData is initially empty, but we can set it to the
    //     // data that we want copied onto the clipboard.
    //     e.clipboardData.setData('text/plain', renderToString(Icons.array[0].element));
    //     e.clipboardData.setData('text/html', renderToString(Icons.array[0].element));
      
    //     // This is necessary to prevent the current document selection from
    //     // being written to the clipboard.
    //     e.preventDefault();
    //   });
    const {Mode}=useModeContext()
    const addToClipBoard =(icon)=>{
        navigator.clipboard.write(renderToString(icon.element)).then(() => {
            alert(icon.name+' Icon added to clipboard');
        }).catch(err => {
            alert('Failed to copy '+icon.name+' Icon.');
            console.error('Failed to copy Icon: ', err);
        });
    }
    return(
        <Card className="main" far Shadow >
            <H1>David Phillips Icon Library</H1>
            <Section >
                {Icons.groupList.map((group)=>{
                    return(
                        <Section>
                            <H2 style={{wordWrap:true}}>{group.name}</H2>
                            <Section horizontal wrap>
                            {Icons[group.code].array.map((icon)=>{
                                const click =()=>{
                                    console.log(renderToString(icon.element))
                                    addToClipBoard(icon)
                                }
                        return(
                            <Section onClick={click} hug style={{flex:1, minWidth:'60px',maxWidth:'60px'}}>
                                {icon.element}
                                <FP fit>{icon.name}</FP>
                            </Section>
    
                        )
                    })}
                            </Section>
                   
                        </Section>
                    )

                })
                    
                }
            </Section>
        </Card>
    )
}