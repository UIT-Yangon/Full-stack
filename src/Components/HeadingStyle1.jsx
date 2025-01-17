//This is for position Sticky things

function HeadingStyle1({name,tinyText,space,sizeLead,size,mobileSize,mobileSizeLead,mobileSpace,mb='mb-[1.5rem]',name1, sticky=true}) {
    return (
       
        
            <div className={`h-0 w-[70%] lg:w-full ${mobileSpace}  lg:${space} lg:${mb} mb-10 relative lg:${sticky ? 'sticky': 'relative'} lg:top-[34px] `}>
        <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">{tinyText}</li>
        </ul>
        <h3 className={`font-normal leading-[38px] ${mobileSizeLead} lg:${sizeLead} ${mobileSize} lg:${size} w-full flex flex-col`}><span>{name}</span><span>{name1}</span></h3>

        

       

    </div>
   
       
    )
}


export default HeadingStyle1;