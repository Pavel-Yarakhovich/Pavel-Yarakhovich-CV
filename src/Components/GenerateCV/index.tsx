import React, { memo, useState, useEffect } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { pdfjs, Document as PDFDocument, Page as PDFPage } from "react-pdf";
import { Transition } from "react-transition-group";
import { Doc } from "./CV";
import * as Styled from "./styled";
import { Hidden } from "@material-ui/core";

export const GenerateCV = memo(() => {
  const [url, setUrl] = useState<string | null>("");
  const [previewCV, setPreviewCV] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviewCV(true);
      clearTimeout(timer);
    }, 1500);
  })
  return (
    <Styled.Container>
      <div>
        <BlobProvider document={Doc}>
          {({ blob, url, loading, error }) => {
            !loading && !error && setUrl(url);
            return <div>{loading && "CV generation is in process..."}</div>;
          }}
        </BlobProvider>
        {url && (
          <Styled.DownloadCVButton
            href={url}
            download={`Pavel-Yarakhovich-CV.pdf`}
            onMouseEnter={() => setPreviewCV(true)}
            onMouseLeave={() => setPreviewCV(false)}
          >
            Download PDF
          </Styled.DownloadCVButton>
        )}
      </div>
      <Transition
        in={previewCV}
        timeout={320}
      >
        {(state) => (
          <Styled.CVSmall
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <PDFDocument
              file={url}
              // onLoadSuccess={(result) => setNumPages(result.numPages)}
              loading={<p>Loading...</p>}
            >
              <PDFPage renderMode="svg" pageNumber={1} width={200} />
            </PDFDocument>
          </Styled.CVSmall>
        )}
      </Transition>
    </Styled.Container>
  );
});

const defaultStyle = {
  transform: "scaleY(1)",
  transformOrigin: "top",
  overflow: "hidden",
  transition: "all 320ms ease",
};
const transitionStyles = {
  entering: { transform: "scaleY(0)" },
  entered: { transform: "scaleY(1) translateX(-50%)" },
  exiting: { transform: "scaleY(0)" },
  exited: { transform: "scaleY(0)" },
  unmounted: {},
}
