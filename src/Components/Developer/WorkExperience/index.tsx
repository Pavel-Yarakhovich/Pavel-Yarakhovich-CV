import React, { memo } from "react";
import Slider from "react-slick";
import { WorkPlace } from "./WorkPlace";
import { workExperience } from "../../../Store/workExperience";

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
        <div>
          <Slider {...settings}>
            {workExperience.map((w: any) => (
              <WorkPlace
                key={w.company}
                companyLogo={w.logo}
                companyName={w.company}
                period={`${w.startedAt} - ${w.endedAt ? w.endedAt : 'present'}`}
                position={w.position}
                duties={w.duties}
              />
            ))}
          </Slider>
        </div>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
