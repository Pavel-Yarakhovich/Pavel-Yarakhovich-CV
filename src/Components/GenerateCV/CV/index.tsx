import React, { memo, useState, useEffect } from "react";
import {
  pdf,
  Page,
  View,
  Image,
  Text,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { pdfjs, Document as PDFDocument, Page as PDFPage } from "react-pdf";
import moment from "moment";
import Me from "../../../Assets/img/me.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface ICv {
  target: string;
  announceLoading: () => void;
  stopLoading: () => void;
}

interface OnRenderProps {
  blob?: Blob;
}

interface DocumentProps {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
  onRender?: (props: OnRenderProps) => any;
}

Font.register({
  family: "Arial",
  src: "../../../Assets/fonts/arial-unicode-ms.ttf",
  fontWeight: 600,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    paddingBottom: 25,
  },
  photo: {
    width: 120,
    height: 120,
  },
});

export const Doc: React.ReactElement<DocumentProps> = (
  <Document>
    <Page size="A4" orientation="portrait">
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        <Image src={Me} style={styles.photo} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Pavel Yarakhovich
          </Text>
          <Text style={{ fontSize: 16 }}>Frontend Developer</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
            Minsk, Belarus
          </Text>
          <Text style={{ fontSize: 13 }}>+375 (29) 555-92-80</Text>
          <Text style={{ fontSize: 13 }}>pavel.yarri@gmail.com</Text>
        </View>
      </View>
      <Text style={{ fontSize: 10 }}>The information provided in CV is actual for {moment(Date.now()).format("LLLL")}</Text>
    </Page>
  </Document>
);
