import React, { memo } from "react";
import Slider from "react-slick";
import { WorkPlace } from "./WorkPlace";
import Omertex from "../../../Assets/img/omertex.svg";
import Freelance from "../../../Assets/img/self.svg";

import * as Styled from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WorkExperience = memo(() => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>Work experience</Styled.Title>
        <Styled.Experience>
          <Slider {...settings}>
            <WorkPlace
              companyLogo={Omertex}
              companyName="Omertex, Ltd"
              period="january 2020 - present"
              position="Frontend developer"
              duties={["this", "that"]}
            />
            <WorkPlace
              companyLogo={Freelance}
              companyName="Self-Employed"
              period="june 2019 - january 2020"
              position="Frontend developer"
              duties={["this", "that"]}
            />
          </Slider>
        </Styled.Experience>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
