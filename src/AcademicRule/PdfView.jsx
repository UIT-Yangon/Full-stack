import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background: #f0f8ff;
  border: 1px solid #ccc;
  width: 100%;
  height: 100vh; /* Full viewport height */
`;

const PdfContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  position: relative;
`;

const ZoomControls = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
`;

const ZoomButton = styled.button`
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const PdfView = ({ file }) => {
  const zoomPluginInstance = zoomPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  

  return (
    <Container>
      <PdfContainer>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={file}
            plugins={[zoomPluginInstance, defaultLayoutPluginInstance]}
          />
        </Worker>
      </PdfContainer>
      
    </Container>
  );
};

export default PdfView;
