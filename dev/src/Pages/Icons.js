import { renderToString } from "react-dom/server"
import { Card, DescreatCard } from "../components/card"
import { DemoCard } from "../components/carddemo"
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { Icons } from "../components/icons/index"
import { Slogan } from "../components/Slogan"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3, ST } from "../components/TextStyles"
import { ModeProvider, useModeContext } from "../context/brandLayers"
import { Button } from "../components/Buttons"
import { useState } from "react"
import { CircleFrame, CorenrRadius, FrameDimentions, IconGroup, LineWidth, RectangleFrame, SmallIcon, SquareFrame, StrokeScale } from "../components/IconsPage"

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
        navigator.clipboard.writeText(renderToString(icon.element)).then(() => {
            alert(icon.name+' Icon added to clipboard (for Figma only)');
        }).catch(err => {
            alert('Failed to copy '+icon.name+' Icon.');
            console.error('Failed to copy Icon: ', err);
        });
    }
    const displayDefault = {}
    Icons.groupList.map((group)=>{displayDefault[group.code] = false})
    const [display,setDisplay] = useState(displayDefault)
    return(
        <Card className="main" far Shadow >
            <Section>
            <H1>David Phillips Icon Library</H1>
            <ST>We currently have {Icons.array.length} icons across {Icons.groupList.length} catagories.</ST>
            </Section>
            <Section >
                {Icons.groupList.map((group)=>{
                    const expandGroup=()=>{
                        let update = display
                        update[group.code] = !update[group.code]
                        setDisplay(update)
                        console.log(display)
                    }
                    return(
                        <IconGroup name={group.name} array={Icons[group.code].array} click={addToClipBoard}/>
                    )

                })
                    
                }
            </Section>
            <Section overFlow>
                <H2>Icon Construction</H2>
                <Section horizontal far overFlow>
                    <Section style={{flex:1}}>
                    <P2 >Icons are constructed on a 12 column grid with 10 px gutters and 25px margin, for a total frame size of 160px stokes are 4.2px (1pt at 300 DPI)and have a recommender corner radius of 5px. When scaling the icons the stroke should scale to, it is recommended to expand stokes before exporting into a vector format to avoid misuse. </P2>
                    <P2>To ensure icons fit together it is recommender that square icons don’t exceed the middle 90px area, with a 80px*110px area recommended for rectangular icons and the full area for entirely circular icons.</P2>

                    </Section>
                    <Section overFlow style={{flex:2}} far>
                        <Section horizontal overFlow>
                            <Section overFlow>
                                <DescreatCard Shadow><FrameDimentions/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Total Width: 160px</FP><FP style={{textAlign:'center'}}>Grid Width: 110px</FP><FP style={{textAlign:'center'}}>12 columns and rows</FP>
                            </Section>
                            
                            <Section overFlow>
                            <DescreatCard Shadow><LineWidth/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Stroke width: 4.2px</FP>
                            </Section>
                            <Section overFlow>
                            <DescreatCard Shadow><StrokeScale/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Strokes must scale</FP>
                            </Section>
                            <Section overFlow>
                            <DescreatCard Shadow><CorenrRadius/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Minimum corner radius: 5px</FP>
                            </Section>
                        </Section>
                        <Section horizontal overFlow>
                            <Section overFlow>
                                <DescreatCard Shadow><SquareFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 90 * 90</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><RectangleFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 80 * 110</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><CircleFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 110 * 110</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><SmallIcon/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 50 * 50 </FP>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </Card>
    )
}