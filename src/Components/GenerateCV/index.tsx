import React, { memo, useState, useEffect } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { pdfjs, Document as PDFDocument, Page as PDFPage } from "react-pdf";
import { Transition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import { Doc } from "./CV";
import * as Styled from "./styled";

export const GenerateCV = memo(() => {
  const { t } = useTranslation();
  const [url, setUrl] = useState<string | null>("");
  const [previewCV, setPreviewCV] = useState(false);
  const [isCvShown, setCvShown] = useState(false);

  const handleShowCv = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCvShown(true);
  };

  const handleClosePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCvShown(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviewCV(true);
      clearTimeout(timer);
    }, 1000);
  }, []);

  return (
    <Styled.Container>
      {!isCvShown && (
        <Styled.PrepareCv>
          <BlobProvider document={Doc}>
            {({ blob, url, loading, error }) => {
              !loading && !error && setUrl(url);
              return <div>{loading && "CV generation is in process..."}</div>;
            }}
          </BlobProvider>
          {url && previewCV ? (
            <Styled.ShowCv onClick={handleShowCv}>{t("cv")}</Styled.ShowCv>
          ) : (
            <Styled.Loader src="/img/blue-loading.svg" />
          )}
        </Styled.PrepareCv>
      )}

      <Transition in={previewCV && isCvShown} timeout={320}>
        {(state) => (
          <Styled.CVSmall
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {url && (
              <Styled.Preview
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </Styled.Preview>
            )}
            <Styled.Close onClick={handleClosePreview} />
            <PDFDocument file={url} loading={<p>Generating CV...</p>}>
              <PDFPage renderMode="svg" pageNumber={1} width={200} />
            </PDFDocument>
            {url && (
              <Styled.Download href={url} download={`Pavel-Yarakhovich-CV.pdf`}>
                Download
              </Styled.Download>
            )}
          </Styled.CVSmall>
        )}
      </Transition>
    </Styled.Container>
  );
});

const defaultStyle = {
  transform: "scaleY(1)",
  transition: "all 320ms ease",
  display: "none",
};
const transitionStyles = {
  entering: { transform: "scaleY(0)", display: "flex" },
  entered: { transform: "scaleY(1)", display: "flex" },
  exiting: { transform: "scaleY(0)", display: "none" },
  exited: { transform: "scaleY(0)", display: "none" },
  unmounted: {},
};
