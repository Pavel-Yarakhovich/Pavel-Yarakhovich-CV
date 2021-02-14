import React, { memo, useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Document as PDFDocument, Page as PDFPage } from "react-pdf";
import { Transition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import { Doc } from "./CV";
import * as Styled from "./styled";

interface Props {
  isShown?: boolean;
}

export const GenerateCV: React.FC<Props> = memo(({ isShown = false }) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState<string | null>("");
  const [previewCV, setPreviewCV] = useState(isShown);
  const [isCvShown, setCvShown] = useState(isShown);

  const handleShowCv = (e: React.MouseEvent, url: any) => {
    e.preventDefault();
    e.stopPropagation();
    setCvShown(true);
    setUrl(url);
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
          <PDFDownloadLink document={<Doc />}>
            {({ blob, url, loading, error }) => {
              let content;
              if (error) content = <div>CV generation error!</div>;
              if (loading) content = <Styled.Loader src="/img/blue-loading.svg" />;
              if (url && previewCV) {
                content = <Styled.ShowCv onClick={(e: any) => handleShowCv(e, url)}>{t("cv")}</Styled.ShowCv>
              }
              return content;
            }}
          </PDFDownloadLink>
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
