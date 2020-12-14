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
  Link,
} from "@react-pdf/renderer";
import { pdfjs, Document as PDFDocument, Page as PDFPage } from "react-pdf";
import moment from "moment";

import Me from "../../../Assets/img/me.jpg";
import { toolkit } from "../../../Store/toolkit";
import { books } from "../../../Store/books";
import { courses } from "../../../Store/courses";

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
    border: "1px solid purple",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
    paddingBottom: 8,
    borderBottom: "1px solid lightgrey",
  },
  blockHeader: {
    fontWeight: "extrabold", fontSize: 15, marginBottom: 5 
  },
  tool: {
    fontSize: 12, padding: 5, border: "1px solid purple", borderRadius: 6, margin: 3
  }
});

export const Doc: React.ReactElement<DocumentProps> = (
  <Document>
    <Page size="A4" orientation="portrait" style={{ padding: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
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
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
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

      <View style={styles.block}>
        <Text style={styles.blockHeader}>Toolkit</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          { Object.values(toolkit).map(val => 
            val.content.map(item => <Link src={item.docs} style={styles.tool}>{item.title}</Link>)
          ) }
        </View>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockHeader}>Courses</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          { courses.map(course => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 5,
              }}
            >
              <Image src={course.certificate} style={{ width: 90, height: 70 }} />
              <View
                style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}
              >
                <Text style={{ fontSize: 12, marginBottom: 15, width: 150}}>{course.title}</Text>
                <Text style={{ fontSize: 12, color: "red", width: 150}}>{course.school}</Text>
                <Text style={{ fontSize: 10, fontWeight: "thin", width: 150 }}>{course.certNumber}</Text>
              </View>
            </View> )
          )}
        </View>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockHeader}>Books</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          { books.map(book => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 5,
              }}
            >
              <Image src={book.logo} style={{ width: 60, height: 80 }} />
              <View
                style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}
              >
                <Text style={{ fontSize: 12, marginBottom: 5, width: 160}}>{book.title}</Text>
                <Text style={{ fontSize: 10, fontWeight: "thin", width: 160 }}>{book.author}</Text>
              </View>
            </View> )
          )}
        </View>
      </View>

      <Text style={{ fontSize: 10 }}>The information provided in CV is actual for {moment(Date.now()).format("LLLL")}</Text>
    </Page>
  </Document>
);
