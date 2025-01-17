import Svg2YearWarrenty from "../components/icons/2YearWarrenty"
import Svg3D from "../components/icons/3D"
import Svg3DModeling from "../components/icons/3DModeling"

class Icon{
    constructor(n,c,e){
        this.name = n 
        this.code = c
        this.element=e
    }
}

export const Icons={array:[
    new Icon('3D Room','3Droom',<Svg3D/>),
    new Icon('2 Year Warrenty','2YearW',<Svg2YearWarrenty/>),
    new Icon('3D Modeling','3DModeling',<Svg3DModeling/>),
    

]}
Icons.array.map(Icon=>{Icons[Icon.code]=Icon})