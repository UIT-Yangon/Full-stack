import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useSelector } from 'react-redux';

const DownloadIcon = styled(FontAwesomeIcon)`
transform: translateX(-300%);
transition: transform 0.3s ease;

@media only screen and (max-width:1023px){
    transform: translateX(-120%);
}
`

const DownloadText = styled.span`
cursor: pointer;
overflow-x: hidden;

&:hover ${DownloadIcon} {
    transform: translateX(-120%);
}
`


export default function DownloadLinks({className}){

    const conferenceBook = useSelector((state) => state.data.value.book);
    const brochure = useSelector((state) => state.data.value.brochure);

    function cleanStart(input) {
        if (typeof input !== 'string') {
            throw new Error("Input must be a string.");
        }
    
        // Use a regex to replace leading digits and underscores
        return input.replace(/^[_\d]+/, '');
    }

   

    const url = process.env.REACT_APP_NEWS_IMAGE;

    return(
        <div className={className}>
            <h5 className="text-[16px] text-[#1c1d20] opacity-50 text-left mt-10 mb-3">PDF download links</h5>
            <div className="flex flex-col gap-[12px] w-full">
            {conferenceBook && <a href={`${url}${conferenceBook}`} download={conferenceBook}>
                <div className="flex items-center">
                    
                    <DownloadText className="gef p-2 px-10 bg-[#f0f8ff] text-[16px] text-[#1c1d20] rounded-[10px] relative  w-full">
                    <DownloadIcon icon={faDownload} className='abc bg-[#000] text-[#fff] p-1 rounded-[5px] absolute'/>
                    {cleanStart(conferenceBook)}</DownloadText>
                </div>
                </a>}
            
                {brochure && <a href={`${url}${brochure}`} download='brochure'>
                <div className="flex items-center">
                    
                    <DownloadText className="gef p-2 px-10 bg-[#f0f8ff] text-[16px] text-[#1c1d20] rounded-[10px] relative  w-full">
                    <DownloadIcon icon={faDownload} className='abc bg-[#000] text-[#fff] p-1 rounded-[5px] absolute'/>
                    {cleanStart(brochure)}</DownloadText>
                </div>
                </a>}
                
            </div>
        </div>
    )
}