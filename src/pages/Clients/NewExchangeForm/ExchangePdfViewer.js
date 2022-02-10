import React from 'react';

import PDFViewer from 'pdf-viewer-reactjs'

const ExchangePdfViewer = ({
  url = 'https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.13.508',
}) => {
  return (
    <PDFViewer
      document={{
        url,
      }}
    />
  );
};

export default ExchangePdfViewer;
