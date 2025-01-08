import { useState } from "react"
import { useLayerContext } from "../context/brandLayers"


let toffset = -184
let poffset = -540
let pmwidth = 2160
let width = 1080
let tmwidth = 1448 
let offset = 0



const VBO={
    textMargin:'-184 -184 1448 1448',
    pillMargin:'-540 -540 2160 2160',
    default:'0 0 1080 1080'
}
export const getViewBoxValue=({margin,latter=undefined,former={a:0,b:1080},...props})=>{
    if(margin===true)margin=100
    if(latter === undefined){
        if(props.text)latter = {a:-184,b:1448}; 
        else {latter = {a:-540,b:2160}}
    }
    let difA = Math.abs(former.a - latter.a)
    let difB = Math.abs(former.b - latter.b)
    let MarA = margin/100*difA
    let MarB = margin/100*difB
    let a = former.a>latter.a?former.a-MarA:former.a+MarA
    let b = former.b>latter.b?former.b-MarB:former.b+MarB
    return({
        a,
        b,
        text: String(a)+' '+ String(a)+' '+String(b)+' '+String(b)

    })

}

export const ClipableLogo =({margin=100,...props})=>{
    const {layerProps} = useLayerContext()
    const [viewBox,setViewBox] = useState(getViewBoxValue({margin}))
    console.log(layerProps)
    return (
        <svg height={props.height?props.height:"100%"} viewBox={viewBox.text} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <rect y="0.00195312" width="2160" height="2160" fill="white"/> */}
            <Pill layer={layerProps.AbsoluteName} hex={layerProps.hex.Accent} name={layerProps.ColourNames.Accent}/>
            {props.text && <DavidPhillips layer={layerProps.AbsoluteName} hex={layerProps.hex.Copy} name={layerProps.ColourNames.Copy}/>}
        </svg>
    )
}


export const Pill = ({layer,name,hex})=>{
    const {layerProps}=useLayerContext()
    const LayerClipContent=()=>{
        console.log('clicked pill')
        navigator.clipboard.writeText(hex).then(() => {
            alert('Hex code for the pill on '+layer+' layers, which is '+name+': '+hex+' copied to clipboard');
          }).catch(err => {
            alert('Failed to copy Hex code.')
            console.error('Failed to copy Hex code: ', err);
          });
    }
    return(
        <path fill-rule="evenodd" onClick={LayerClipContent} clip-rule="evenodd" d="M1006.73 426.743C961.48 471.995 472.014 961.492 426.76 1006.74C381.504 1052 319.003 1080 250.01 1080C112.026 1080 0 967.981 0 830.002C0 761.012 28.0066 698.512 73.2608 653.259C118.515 608.007 607.981 118.511 653.235 73.258C698.49 28.0056 760.993 0 829.985 0C967.969 0 1080 112.021 1080 250.001C1080 318.99 1051.98 381.491 1006.73 426.743Z"fill={layerProps.Accent}/>
    )
}
export const DavidPhillips=({name,hex,layer})=>{
    const {layerProps}=useLayerContext()
    const LayerClipContent=()=>{
        console.log('clicked pill')
        navigator.clipboard.writeText(hex).then(() => {
            alert('Hex code for the copy on '+layer+' layers, which is '+name+': '+hex+' copied to clipboard');
          }).catch(err => {
            alert('Failed to copy Hex code.')
            console.error('Failed to copy Hex code: ', err);
          });
    }
    return(
        <g onClick={LayerClipContent}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M359.188 659.694H325.515V734.666H290V550.523H359.188C382.864 550.523 396.807 556.31 407.068 567.095C416.275 576.566 421.537 590.771 421.537 605.24C421.537 619.708 416.275 633.913 407.068 643.383C397.071 653.906 382.864 659.694 359.188 659.694ZM325.515 628.126H357.609C369.711 628.126 375.761 625.232 379.971 620.76C383.917 616.551 386.022 611.29 386.022 605.24C386.022 599.189 383.917 593.665 379.971 589.455C375.761 584.984 369.711 582.09 357.609 582.09H325.515V628.126ZM469.941 651.801V734.666H435.742V547.892H469.941V616.288C479.412 608.922 491.514 604.451 504.667 604.451C522.292 604.451 538.341 612.342 548.863 624.969C557.281 634.965 562.017 647.856 562.017 669.689V734.666H527.818V667.059C527.818 654.432 524.924 647.856 520.189 643.12C515.716 638.649 508.877 636.017 500.984 636.017C486.515 636.017 474.677 645.225 469.941 651.801ZM622.26 607.081V734.666H588.061V607.081H622.26ZM582.8 561.834C582.8 549.47 592.796 540 605.161 540C617.525 540 627.522 549.47 627.522 561.834C627.522 574.198 617.525 583.668 605.161 583.668C592.796 583.668 582.8 574.198 582.8 561.834ZM685.132 547.892V734.666H650.934V547.892H685.132ZM748.006 547.892V734.666H713.807V547.892H748.006ZM810.879 607.081V734.666H776.681V607.081H810.879ZM771.422 561.834C771.422 549.47 781.421 540 793.78 540C806.149 540 816.148 549.47 816.148 561.834C816.148 574.198 806.149 583.668 793.78 583.668C781.421 583.668 771.422 574.198 771.422 561.834ZM839.554 797.801V607.081H872.44V617.34C882.439 609.185 895.327 604.451 909.802 604.451C944.519 604.451 972.411 633.387 972.411 671.004C972.411 688.366 966.358 704.151 956.359 715.725C945.048 728.878 926.901 737.296 907.961 737.296C895.063 737.296 884.016 733.614 873.763 725.722V797.801H839.554ZM873.763 651.801V689.945C880.334 699.416 891.645 705.729 904.533 705.729C923.737 705.729 938.212 690.998 938.212 671.004C938.212 652.591 925.325 636.017 905.326 636.017C892.174 636.017 880.863 642.331 873.763 651.801ZM977.934 720.198L994.504 695.733C1003.19 703.625 1016.61 708.36 1029.5 708.36C1038.7 708.36 1045.8 703.887 1045.8 697.574C1045.8 678.371 983.987 685.21 983.987 644.173C983.987 619.708 1007.66 604.451 1032.91 604.451C1049.48 604.451 1067.64 610.764 1076.06 617.34L1060.01 642.068C1053.44 637.333 1044.75 633.387 1035.55 633.387C1026.08 633.387 1018.18 637.07 1018.18 643.647C1018.18 660.22 1080 653.643 1080 697.837C1080 722.302 1056.07 737.296 1029.23 737.296C1011.6 737.296 992.928 731.246 977.934 720.198Z" fill={layerProps.Copy}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 292.939H57.864C87.0589 292.939 106.26 299.255 121.252 310.308C143.871 327.15 157.812 354.518 157.812 385.044C157.812 415.571 143.871 442.939 121.252 459.781C106.26 470.834 87.0589 477.15 57.864 477.15H0V292.939ZM122.304 385.044C122.304 369.781 117.306 355.571 108.89 345.044C98.6323 332.149 83.6399 324.518 61.8097 324.518H35.5069V445.57H61.8097C83.6399 445.57 98.6323 437.939 108.89 425.044C117.306 414.518 122.304 400.308 122.304 385.044ZM302.21 349.518V477.15H269.332V466.887C258.811 475.834 246.712 479.782 233.824 479.782C214.887 479.782 197.002 471.36 185.692 458.202C175.697 446.624 169.384 430.834 169.384 413.466C169.384 375.833 197.265 346.886 231.984 346.886C246.449 346.886 259.337 351.623 269.332 359.781V349.518H302.21ZM268.018 432.413V394.255C260.916 384.781 249.605 378.465 236.454 378.465C216.466 378.465 203.578 395.045 203.578 413.466C203.578 433.466 218.043 448.202 237.244 448.202C250.132 448.202 261.442 441.887 268.018 432.413ZM349.29 349.518L384.272 427.412L419.253 349.518H454.761L396.108 477.15H372.436L313.782 349.518H349.29ZM500.527 349.518V477.15H466.335V349.518H500.527ZM461.073 304.255C461.073 291.887 471.068 282.413 483.43 282.413C495.793 282.413 505.787 291.887 505.787 304.255C505.787 316.623 495.793 326.097 483.43 326.097C471.068 326.097 461.073 316.623 461.073 304.255ZM651.5 477.15H618.623V466.887C608.103 475.834 596.003 479.782 583.115 479.782C564.177 479.782 546.293 471.36 534.982 458.202C524.988 446.624 518.675 430.834 518.675 413.466C518.675 375.833 546.556 346.886 581.274 346.886C595.215 346.886 607.313 350.834 617.308 358.729V290.307H651.5V477.15ZM617.308 432.413V394.255C610.206 384.781 598.896 378.465 585.746 378.465C565.756 378.465 552.868 395.045 552.868 413.466C552.868 433.466 567.334 448.202 586.534 448.202C599.422 448.202 610.733 441.887 617.308 432.413Z" fill={layerProps.Copy}/>
        </g>
    )
}