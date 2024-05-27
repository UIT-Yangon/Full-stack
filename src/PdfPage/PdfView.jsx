import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Import default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import core styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Import default layout styles
import PdfTitle from './PdfTitle';
import Tabs from './Tabs';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
    width: 100%;

    @media (max-width: 462px){
        gap: 20px;
        padding: 20px 0;
    }
`;

const ViewerContainer = styled.div`
    width: 100%;
    max-height: 600px;
    border-radius: 20px;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    overflow: scroll;

    @media (max-width: 768px) {
        max-width: 80%;
        height: 300px;
    }
`;

function PdfView() {
    
    
    const [defaultScale, setDefaultScale] = useState(1);
    const viewerContainerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();



        // Set the local PDF file URL
        const url = [`${process.env.PUBLIC_URL}/somatosensory.pdf`,`${process.env.PUBLIC_URL}/drylab.pdf`];
        
        
    

    useEffect(() => {
        // Update the default scale based on the container width
        const updateScale = () => {
            if (viewerContainerRef.current) {
                const containerWidth = viewerContainerRef.current.clientWidth;
                const naturalWidth = 600; // to control pdf size, the greater the number, the smaller the size
                const scale = containerWidth / naturalWidth;
                setDefaultScale(scale);
                
            }
        };
        
        updateScale();
        window.addEventListener('resize', updateScale);

        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, []);

    return ( 
        
        <div className="pdfView px-[0%] md:px-[10%] xl:px-[15%] md:pt-[72px] md:pt-[50px] py-[16px]">
            <PdfTitle/>
            <Container>
                
                <ViewerContainer ref={viewerContainerRef}>
                    {url ? (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                            fileUrl={url[0]}
                            // plugins={[defaultLayoutPluginInstance]}
                            defaultScale={defaultScale}

                            />
                        </Worker>
                        ) : (
                        <p>Loading PDF...</p>
                        )}
                </ViewerContainer>
                <ViewerContainer ref={viewerContainerRef}>
                    {url ? (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                            fileUrl={url[1]}
                            // plugins={[defaultLayoutPluginInstance]}
                            defaultScale={defaultScale}

                            />
                        </Worker>
                        ) : (
                        <p>Loading PDF...</p>
                        )}
                </ViewerContainer>
                
            </Container>
            <Tabs/>
        </div>
     );
}

export default PdfView;