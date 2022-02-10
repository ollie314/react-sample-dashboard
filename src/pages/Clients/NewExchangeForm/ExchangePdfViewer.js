import React from 'react';

const ExchangePdfViewer = ({
  url = 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
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
