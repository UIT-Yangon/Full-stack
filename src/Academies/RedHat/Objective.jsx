

import React from 'react';
import HeadingStyle2 from '../../Components/HeadingStyle2';
import {AnimationButton} from '../../Components/Footer';

    
function Objective({data}) {

  

 
 
  
return (
  <div className="px-[5%] lg:py-[72px] py-14 bg-[#F8F8F8] lg:grid lg:grid-cols-[35%_65%] flex flex-col lg:gap-0 gap-6 rounded-[32px]">
    <div className="flex items-center">
    <HeadingStyle2 name="Learn and" name1="Get Certified" tinyText="Key Objective and Examination" space="pt-[38px]" sizeLead="leading-[48px]" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" />

    </div>
    <div>
        {
            data.map(
                ( a,index ) =>
                    <div key={index} className="flex flex-col gap-6 mb-6">
            <h4 className="leading-7 lg:text-[32px] text-2xl font-normal text-[#3798A6]">{a.title}</h4>
            {
                a.list.map(
                    (b,index) =>
                        <div key={index} className="flex gap-2 items-start" >
                    <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none lg:w-[18px] w-[14px] lg:h-[21px] h-4">
      <path d="M11 3.92883C8.82441 3.92883 6.69767 4.57397 4.88873 5.78267C3.07979 6.99136 1.66989 8.70933 0.83733 10.7193C0.00476612 12.7293 -0.213071 14.941 0.211367 17.0748C0.635804 19.2086 1.68345 21.1686 3.22183 22.707C4.76021 24.2454 6.72022 25.293 8.85401 25.7175C10.9878 26.1419 13.1995 25.9241 15.2095 25.0915C17.2195 24.2589 18.9375 22.849 20.1462 21.0401C21.3549 19.2312 22 17.1044 22 14.9288C22 13.4843 21.7155 12.0539 21.1627 10.7193C20.6099 9.38473 19.7996 8.1721 18.7782 7.15066C17.7567 6.12921 16.5441 5.31896 15.2095 4.76616C13.8749 4.21336 12.4445 3.92883 11 3.92883ZM15.73 12.2998L10.703 18.8998C10.6005 19.0329 10.4689 19.1408 10.3183 19.2152C10.1677 19.2896 10.002 19.3284 9.834 19.3288C9.66692 19.3297 9.50183 19.2926 9.35126 19.2201C9.20069 19.1477 9.06859 19.0419 8.965 18.9108L6.281 15.4898C6.19216 15.3757 6.12667 15.2452 6.08827 15.1058C6.04986 14.9664 6.03929 14.8207 6.05717 14.6772C6.07505 14.5337 6.12101 14.3951 6.19245 14.2694C6.26388 14.1436 6.35939 14.0332 6.4735 13.9443C6.70398 13.7649 6.99628 13.6844 7.28612 13.7205C7.42963 13.7384 7.56822 13.7843 7.69397 13.8558C7.81972 13.9272 7.93016 14.0227 8.019 14.1368L9.812 16.4248L13.97 10.9248C14.0581 10.8093 14.1681 10.7122 14.2938 10.6391C14.4194 10.5661 14.5582 10.5185 14.7022 10.4991C14.8462 10.4797 14.9927 10.4889 15.1332 10.526C15.2737 10.5632 15.4054 10.6277 15.521 10.7158C15.6366 10.8039 15.7336 10.914 15.8067 11.0396C15.8797 11.1652 15.9273 11.304 15.9467 11.448C15.9661 11.5921 15.957 11.7385 15.9198 11.879C15.8826 12.0195 15.8181 12.1513 15.73 12.2668V12.2998Z" fill="#3798A6"/>
      </svg>
                  
                    <p className="lg:text-lg text-sm lg:leading-[27px] leading-[21px] font-[350] text-[#1C1D20CC] text-justify">{b}</p>
                  </div>
                     )
            }
            
            

        </div>
            )
        }

<AnimationButton value="Learn More about Exam" />
        
        
    </div>


      

     


  </div>
)

 
}



export default Objective;