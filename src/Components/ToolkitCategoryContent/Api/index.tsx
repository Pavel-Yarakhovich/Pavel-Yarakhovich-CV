import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GMapsLogo from "../../../Assets/img/gmaps.png";
import YoutubeLogo from "../../../Assets/img/youtube.png";
import * as Styled from "./styled";

export const Api = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="Google Maps API"
        description="Test description"
        logo={GMapsLogo}
        knowledgeQuality={35}
      />
      <CategoryItem
        name="Youtube API"
        description="Test description"
        logo={YoutubeLogo}
        knowledgeQuality={45}
      />
    </Styled.Container>
  );
});
