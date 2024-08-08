
import {diplomaimg1,diplomaimg2,diplomaimg3} from './../../Images/Images.js'

export default function Container2(){
    return(
        <div className="lg:grid lg:grid-cols-3 gap-[10px] flex flex-col">
            <img src={diplomaimg1}  />
            <img src={diplomaimg2} />
            <img src={diplomaimg3} />
        </div>
    )
}