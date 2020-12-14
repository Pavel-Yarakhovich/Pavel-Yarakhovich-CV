import React, { memo } from "react";
import Slider from "react-slick";
import { Books } from "./Books";
import { Courses } from "./Courses";
import { books } from "../../../Store/books";
import { courses } from "../../../Store/courses";

import * as Styled from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BooksCourses = memo(() => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>Books and courses</Styled.Title>
        <Styled.Experience>
          <Slider {...settings}>
            <Styled.Slide>
              <span>Books</span>
              <Books books={books} />
            </Styled.Slide>
            <div>
              <span>Courses</span>
              <Courses courses={courses} />
            </div>
          </Slider>
        </Styled.Experience>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
