import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Image from '../Degree/Image';
import Frame4 from './Frame4';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';

function Admission(){
    const windowWidth = useResize("Admissions information and requirements");
    const firstPara = ["UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfill their academic ambitions, intellectual passions and the ones who want to be IT Professionals can come to our university. If it sounds good and interesting to you, UIT is the right choice for your future.","UIT သည်ကျောင်းသားများအတွက်အံ့သြဖွယ်အခွင့်အလမ်းများရှိသည်။ အောင်မြင်မှုဆီသို့ နောက်တဆင့်တက်လှမ်းရန် ကျွန်ုပ်တို့၏တက္ကသိုလ်တွင် ပါဝင်ရန် ဖိတ်ကြားအပ်ပါသည်။ မိမိတို့၏ ပညာရေးရည်မှန်းချက်များ၊ ဉာဏ်ရည်ဉာဏ်သွေးကို ဖြည့်ဆည်းလိုသော ကျောင်းသားများနှင့် IT Professional ဖြစ်လိုသူများသည် ကျွန်ုပ်တို့၏ တက္ကသိုလ်သို့ လာရောက်နိုင်ပါသည်။ သင့်အတွက် ကောင်းမွန်ပြီး စိတ်ဝင်စားစရာကောင်းပါက UIT သည် သင့်အနာဂတ်အတွက် မှန်ကန်သောရွေးချယ်မှုဖြစ်သည်။"]

    
 
    const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

 

    
    return (
        <>
            <Navbar sendDataToParent={handleDataFromNav}/>
            
                <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'}>
                    <Headline />
                    <Image />
                    <Frame4 />
                    <Frame6 />
                    <Frame7 />
                </div>

            
        </>
    )
}


export default Admission;