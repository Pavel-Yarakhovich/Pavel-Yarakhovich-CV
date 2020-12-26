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
import { workExperience } from "../../../Store/workExperience";

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
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 5,
    color: "#103D78",
  },
  tool: {
    fontSize: 12,
    padding: 5,
    border: "1px solid #103D78",
    borderRadius: 6,
    margin: 2,
  },
});

const BlockHeader = ({ children }: any) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <View
      style={{
        width: 8,
        height: 8,
        backgroundColor: "#103D78",
        marginRight: 5,
      }}
    />
    <Text style={styles.blockHeader}>{children}</Text>
  </View>
);

export const Doc: React.ReactElement<DocumentProps> = (
  <Document>
    <Page size="A4" orientation="portrait" style={{ padding: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "flex-start",
        }}
      >
        <Image src={Me} style={styles.photo} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            alignItems: "flex-start",
            flexGrow: 1,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Pavel Yarakhovich
          </Text>
          <Text style={{ fontSize: 16, marginTop: 8, marginBottom: 8 }}>
            Frontend Developer
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 3, fontWeight: "bold" }}>
            Minsk, Belarus
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 3 }}>
            +375 (29) 555-92-80
          </Text>
          <Text style={{ fontSize: 13 }}>pavel.yarri@gmail.com</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            alignItems: "flex-start",
            borderLeft: "2px solid #103D78",
            paddingLeft: 12,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            Languages
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 3 }}>
            Russian - native
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 3 }}>English - B1-B2</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ ...styles.block, width: "65%" }}>
          <BlockHeader>Work experience</BlockHeader>
          {workExperience.map((exp) => (
            <View key={exp.company} style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                {exp.company}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontStyle: "italic",
                  marginBottom: 3,
                  paddingLeft: 8,
                }}
              >
                {exp.startedAt}
                {exp.endedAt ? ` - ${exp.endedAt}` : " - present"}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 3, paddingLeft: 8 }}>
                {exp.position}
              </Text>
              {exp.duties.map((duty, idx) => (
                <Text key={idx} style={{ fontSize: 10, paddingLeft: 15 }}>
                  {duty}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={{ ...styles.block, width: "30%", marginLeft: 20 }}>
          <BlockHeader>Toolkit</BlockHeader>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {Object.values(toolkit).map((val) =>
              val.content.map((item) => (
                <Link src={item.docs} style={styles.tool}>
                  {item.title}
                </Link>
              ))
            )}
          </View>
        </View>
      </View>

      <View style={styles.block}>
        <BlockHeader>Courses</BlockHeader>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {courses.map((course) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 5,
              }}
            >
              <Image
                src={course.certificate}
                style={{ width: 90, height: 70 }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 15, width: 150 }}>
                  {course.title}
                </Text>
                <Text style={{ fontSize: 12, color: "red", width: 150 }}>
                  {course.school}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "thin", width: 150 }}>
                  {course.certNumber}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.block}>
        <BlockHeader>Books</BlockHeader>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {books.map((book) => (
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 5, width: 160 }}>
                  {book.title}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "thin", width: 160 }}>
                  {book.author}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={{ fontSize: 10 }}>
        The information provided in CV is actual for{" "}
        {moment(Date.now()).format("LLLL")}
      </Text>
    </Page>
  </Document>
);
