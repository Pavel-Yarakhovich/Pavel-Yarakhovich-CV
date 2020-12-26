import React, { memo, useState } from "react";
import { Books } from "./Books";
import { Courses } from "./Courses";
import { books } from "../../../Store/books";
import { courses } from "../../../Store/courses";

import * as Styled from "./styled";

export const BooksCourses = memo(() => {
  const [slideShown, setSlideShown] = useState("books");

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>
          <Styled.Toggler
            onClick={() => setSlideShown("books")}
            active={slideShown === "books"}
          >
            Books
          </Styled.Toggler>
          and
          <Styled.Toggler
            onClick={() => setSlideShown("courses")}
            active={slideShown === "courses"}
          >
            Courses
          </Styled.Toggler>
        </Styled.Title>
        <Styled.Experience>
          {slideShown === "books" && <Books books={books} />}
          {slideShown === "courses" && <Courses courses={courses} />}
        </Styled.Experience>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
