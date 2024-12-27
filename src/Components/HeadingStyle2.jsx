
//This is the default design component. Not for sticky nature;


function HeadingStyle1({name,tinyText,space,sizeLead,size,mobileSize,mobileSizeLead,mobileSpace,name1}) {
    return (
       
        
            <div className={` w-[70%]  ${mobileSpace}  lg:${space} mb-6 relative`}>
        <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080] text-nowrap">{tinyText}</li>
        </ul>
        <h3 className={`font-normal leading-[38px] ${mobileSizeLead} lg:${sizeLead} ${mobileSize} lg:${size} w-full flex flex-col`}><span>{name}</span><span>{name1}</span></h3>

        

       

    </div>
   
       
    )
}


export default HeadingStyle1;