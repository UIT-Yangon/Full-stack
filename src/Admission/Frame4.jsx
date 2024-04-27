import React from "react";
import './../Styles/Frame4.css';
import { useSelector } from 'react-redux';

function Frame4(){
    const firstPara = ["UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfill their academic ambitions, intellectual passions and the ones who want to be IT Professionals can come to our university. If it sounds good and interesting to you, UIT is the right choice for your future.","UIT သည်ကျောင်းသားများအတွက်အံ့သြဖွယ်အခွင့်အလမ်းများရှိသည်။ အောင်မြင်မှုဆီသို့ နောက်တဆင့်တက်လှမ်းရန် ကျွန်ုပ်တို့၏တက္ကသိုလ်တွင် ပါဝင်ရန် ဖိတ်ကြားအပ်ပါသည်။ မိမိတို့၏ ပညာရေးရည်မှန်းချက်များ၊ ဉာဏ်ရည်ဉာဏ်သွေးကို ဖြည့်ဆည်းလိုသော ကျောင်းသားများနှင့် IT Professional ဖြစ်လိုသူများသည် ကျွန်ုပ်တို့၏ တက္ကသိုလ်သို့ လာရောက်နိုင်ပါသည်။ သင့်အတွက် ကောင်းမွန်ပြီး စိတ်ဝင်စားစရာကောင်းပါက UIT သည် သင့်အနာဂတ်အတွက် မှန်ကန်သောရွေးချယ်မှုဖြစ်သည်။"]

    const language = useSelector((state) => state.language.value);
    return (
        <div className=" md:max-w-screen-lg lg:pt-[6rem] pt-14 pb-[90px] lg:pb-[50px] frame4 lg:max-w-full px-4">
            <div className="frame3 mx-0 lg:mx-auto w-full  xl:pl-[10rem] ">
                <div className="frame1 mb-8">
                    <p className="font-light text-4xl md:text-6xl text-start leading-tight tracking-wide">Step into UIT <br/>your new home</p>
                </div>
                <div className="frame2 flex md:justify-end justify-start ">
                    <p className={(language == "EN") ? "font-light text-base md:text-lg md:text-xl text-left tracking-wider lg:w-[530px] pale": "font-light text-sm md:text-base text-left tracking-wider lg:w-[530px] pale"}>{(language == "EN") ? firstPara[0] : firstPara[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Frame4;