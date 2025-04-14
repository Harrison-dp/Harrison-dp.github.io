import {createContext, useContext, useState } from "react";
import { useCookiesContext } from "./Cookies";

class ColourObject{
    constructor(css,hex,Name,Ref){
        this.css = css
        this.hex = hex
        this.Name = Name
        this.Ref = Ref
    }
}// creates an onject with css hex name and reference
class layerPropsClass{
    constructor(Name,b,t,c,a,s,f){
        this.AbsoluteName=b.Name
        this.Background = b.css
        this.Title = t.css
        this.Copy = c.css
        this.Accent = a.css
        this.Shadow = s.css
        this.Focul = f.css
        this.ColourNames={
            Background:b.Name,
            Title:t.Name,
            Copy:c.Name,
            Accent:a.Name,
            Shadow:s.Name
        }
        this.hex={
            Background:b.hex,
            Title:t.hex,
            Copy:c.hex,
            Accent:a.hex,
            Shadow:s.hex
        }
    }
}// creates the object with each of the layer properties

class Segmentlayers{
    constructor(Name,Accent,Light,Pure,Dark,Umbra,code){
        this.Name= Name
        this.Accent = new ColourObject('var(--'+code+'Accent) ',Accent,code+'Accent',code+'A')
        this.Light =  new ColourObject('var(--'+code+'Light)',Light,code+'Light',code+'L')
        this.Pure =   new ColourObject('var(--'+code+'Pure)',Pure,code+'Pure',code+'P')
        this.Dark =   new ColourObject('var(--'+code+'Dark)',Dark,code+'Dark',code+'D')
        this.Umbra =  new ColourObject('var(--'+code+'Umbra)',Umbra,code+'Umbra',code+'U')
        this.Code = code
    }
}// creates the segment object using the shades passed from accent to umbra  (css consturction example code+'Accent' = var(--REAAccent)
const Colours = {Array:[ 
    new ColourObject('var(--W)','#FFFFFF','White','W'),
    new ColourObject('var(--B)','#F2EFED','Bone','B'),
    new ColourObject('var(--S)','#D9D2CA','Stone','S'),
    new ColourObject('var(--G)','#A0948E','Griege','G'),
    new ColourObject('var(--T)','#7A6F6D','Typhoon','T'),
    new ColourObject('var(--E)','#494444','Evening','E'),
    new ColourObject('var(--A)','#292428','Aubergine','A'),
    new ColourObject('var(--D)','#1A1A1A','Dark','D'),
    new ColourObject('var(--Z)','#000000','Black','Z')
]}
Colours.Array.map((C)=>Colours[C.Red] = C)
//                            css       hex         name    ref
const W = new ColourObject('var(--W)','#FFFFFF','White','W')
const B = new ColourObject('var(--B)','#F2EFED','Bone','B')
const S = new ColourObject('var(--S)','#D9D2CA','Stone','S')
const G = new ColourObject('var(--G)','#A0948E','Griege','G')
const T = new ColourObject('var(--T)','#7A6F6D','Typhoon','T')
const E = new ColourObject('var(--E)','#494444','Evening','E')
const A = new ColourObject('var(--A)','#292428','Aubergine','A')
const D = new ColourObject('var(--D)','#1A1A1A','Dark','D')
const Z = new ColourObject('var(--Z)','#000000','Black','Z')



const Layers ={Array:[
    new layerPropsClass(W.Name ,W,T,E,S,S,T),
    new layerPropsClass(B.Name ,B,T,E,S,G,T),
    new layerPropsClass(S.Name ,S,E,D,B,G,E),
    new layerPropsClass(G.Name ,G,E,D,S,T,E),
    new layerPropsClass(T.Name ,T,B,W,E,E,B),
    new layerPropsClass(E.Name ,E,B,W,A,A,B),
    new layerPropsClass(A.Name ,A,S,B,E,D,S),
    new layerPropsClass(D.Name ,D,S,B,E,Z,S),
]}
Layers.Array.map((L)=>Layers[L.AbsoluteName] = L)
class SegmentBlock{
    constructor(F=Segments[0]){
        this.One = new layerPropsClass(F.Code+'One',      W,          T,     A,    F.Light,      S,      F.Pure)
        this.Two = new layerPropsClass(F.Code+'One',      W,          F.Pure,     A,    F.Light,      S,      F.Pure)
        this.Three = new layerPropsClass(F.Code+'Two',    F.Accent,   F.Pure,     E,    F.Light,      F.Light,F.Accent)
        this.Four = new layerPropsClass(F.Code+'Three',   F.Light,    F.Umbra,    A,    F.Accent,     F.Dark, F.Accent)
        this.Five = new layerPropsClass(F.Code+'Four',    F.Dark,     F.Accent,   W,    F.Umbra,      F.Umbra,F.Accent)
        this.Six = new layerPropsClass(F.Code+'Five',     F.Umbra,    F.Accent,   B,    F.Dark,       A,      F.Accent)
        this.Seven = new layerPropsClass(F.Code+'Six',    A,          F.Pure,     B,    F.Umbra,      D,      F.Pure)
        this.Eight = new layerPropsClass(F.Code+'Six',    A,          S,     B,    F.Umbra,      D,      F.Pure)

    }
}
export const Segments={Array:[
    new Segmentlayers('Real Estate','#E5EDFF','#6488E2','#4169E4','#1641C5','#2E324E','REA'),
    new Segmentlayers('Landlords','#EAF9FB','#AFEBF4','#5BCDDD','#1898AA','#33464C','LLS'),
    new Segmentlayers('BTR','#E7FEF0','#88D7A9','#5BB280','#336C4B','#33413A','BTR'),
    new Segmentlayers('Student','#FFF9E5','#FCCE4C','#FEC200','#CE9D00','#544420','BFS'),
    new Segmentlayers('Developers','#FFECE5','#FC7247','#FD561A','#D23C06','#542E25','DEV'),
    new Segmentlayers('International','#FFE5E5','#DE4F4F','#DB1616','#BA0000','#4D2124','INT'),
    new Segmentlayers('Contractors','#FFE5F9','#CE6FB7','#BA539E','#A3137C','#462E40','FFE'),
    new Segmentlayers('Defaut','#FACBCE','#CB5E65','#B7454D','#73262b','#382529','DEF')

],Dark:{},Light:{}}
Segments.Array.map((S)=>Segments[S.Code] = new SegmentBlock(S))
Segments.Array.map((S)=>{
    let x = new SegmentBlock(S)
    Segments.Dark[S.Code] = {   One:{RelativeName:S.Code+'One',...x.Eight},
                                Two:{RelativeName:S.Code+'Two',...x.Seven},
                                Three:{RelativeName:S.Code+'Three',...x.Six},
                                Four:{RelativeName:S.Code+'Three',...x.Five}
                        }})
Segments.Array.map((S)=>{
    let x = new SegmentBlock(S)
    Segments.Light[S.Code] = {  One:{RelativeName:S.Code+'One',...x.One},
                                Two:{RelativeName:S.Code+'Two',...x.Two},
                                Three:{RelativeName:S.Code+'Three',...x.Three},
                                Four:{RelativeName:S.Code+'Three',...x.Four}
}})
class segLight{
    constructor(Seg,){
        this.One=Seg.One
        this.Two=Seg.Two
        this.Thee=Seg.Three
    }
}
class segDark{
    constructor(Seg,){
        this.One=Seg.Six
        this.Two=Seg.Five
        this.Thee=Seg.Four
    }
}
export class Mode{
    constructor(T,L,S,P,N){
        this.Title = T
        this.Layers = L
        this.SegmentLayers=S
        this.Segments = Segments.Array
        this.Set = ()=>this
        this.Next=N
        this.Possition=P
        this.Absolute=Layers.Array
        // this.Segments=[REA,LLS,BTR,BFS,DEV,INT,FFE]
    }
}

export const Modes =[
    new Mode('Light',{
        One:{RelativeName:'One',...Layers.White},
        Two:{RelativeName:'Two',...Layers.Bone},
        Three:{RelativeName:'Three',...Layers.Stone},
        Four: {RelativeName:'Four',...Layers.Griege},
    },
    Segments.Light
    ,0,1),
    
    new Mode('Dark',{
        One:{RelativeName:'One',...Layers.Aubergine},
        Two:{RelativeName:'Two',...Layers.Dark},
        Three:{RelativeName:'Three',...Layers.Evening},
        Four: {RelativeName:'Four',...Layers.Typhoon},
    },    Segments.Dark
    ,1,0)
]




const ModeContext = createContext()

export const ModeProvider = ({children,mode=undefined,...props})=>{
    console.log(Modes)
    const {cookieHandler}=useCookiesContext()
    let ModeDef = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 1:0
    try{
        let modetest = Modes[mode].One // tests if passed 'mode' is valid
        ModeDef = parseInt(mode, 10) //if yes uses it
    } catch(error){
        try{
            console.error('mode returned invalid, using cookie',error.message)
            let cookietest = Modes[cookieHandler.get('PreferedTheme')].One // tests if Cookie request returns valid
            ModeDef = cookieHandler.get('PreferedTheme')
        } catch(error){
            console.error('cookie returned invalid, using device defualt',error.message)
            // ModeDef = Modes[window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 1:0]
        }
    }
    const [Mode,setMode] = useState(Modes[ModeDef])
    Mode.Possition !== ModeDef && setMode(Modes[ModeDef])
    if(!props.demo)cookieHandler.set('PreferedTheme',ModeDef)
    const updateMode=(mode)=>{
        let ModeDef = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 1:0
        try{
            let modetest = Modes[mode].One // tests if passed 'mode' is valid
            console.log(Modes)
            ModeDef = mode //if yes uses it
        } catch(error){
            try{
                console.error('mode returned invalid, using assigned next value',error.message)
                let test = Modes[Mode.Next].One // tests if Cookie request returns valid
                ModeDef = Mode.Next
            } catch(error){
                console.error('mode returned invalid',error.message)
                // ModeDef = Modes[window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 1:0]
            }
        }
            cookieHandler.set('PreferedTheme',ModeDef)
            setMode(Modes[ModeDef] )
    }
    if(props.report)console.log(Mode)
    return(
        <ModeContext.Provider value={{Mode,setMode,updateMode,mode}}>
            {children}
        </ModeContext.Provider>
    )
}
export const useModeContext = ()=>useContext(ModeContext)


const LayerContext = createContext('One');

export const LayerProvider = ({children,layer='One',...props})=>{
    const {Mode} = useModeContext() 
    let layerProps = {}
    try{
        console.log(Mode.SegmentLayers[props.Segment][layer])
        if(Mode.SegmentLayers[props.Segment][layer] === undefined)throw new Error('invalid layer')
        layerProps = Mode.SegmentLayers[props.Segment][layer]
    }catch{
        try{
            layerProps = Mode.Layers[layer]
        } catch(error){
            console.error("layerProps could not be fetched from Mode:",error.message)
            layerProps = Mode.Layers.One
    } }
    if(props.report)console.log(layerProps)
    return(
        <LayerContext.Provider value={{layer,layerProps}}>
            {children}
        </LayerContext.Provider>
    )
    

}
export const useLayerContext = ()=>useContext(LayerContext)
