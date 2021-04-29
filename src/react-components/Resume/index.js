import "./styles.css";
import resume from './resume.pdf'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


/*Check out https://preview.npmjs.com/package/react-pdf and PDF  fails to load. */

/* Component for the Resume page */
function Resume() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
      <div>
      <Document file={resume}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />

      </Document> 
      <p>Page {pageNumber} of {numPages}</p>

      </div>
    );  
    
    
  }

export default Resume;