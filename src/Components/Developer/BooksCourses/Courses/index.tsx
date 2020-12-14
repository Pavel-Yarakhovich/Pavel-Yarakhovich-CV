import React, { memo } from "react";
import * as Styled from "./styled";

interface CourseProps {
  title: string;
  school: string;
  certificate: string;
  certNumber: string;
}

interface CoursesProps {
  courses: CourseProps[]
}

export const Courses = memo(({ courses }: CoursesProps) => {
  return (
    <Styled.Container>
      {courses.map((book: CourseProps ) => (
        <Styled.Book key={book.title}>
          <Styled.Logo src={book.certificate} />
          <Styled.Info>
            <Styled.Position>{book.title}</Styled.Position>
            <Styled.School>{book.school}</Styled.School>
            <Styled.CompanyName>{book.certNumber ? `Certificate: ${book.certNumber}` : ''}</Styled.CompanyName>
          </Styled.Info>
        </Styled.Book>
      ))}
    </Styled.Container>
  );
});
