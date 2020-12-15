import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import Eng from "../../Assets/img/eng.jpg";
import Rus from "../../Assets/img/rus.png";
import * as Styled from "./styled";

declare module "react" {
  interface HTMLAttributes<T> {
    selected?: boolean;
  }
}

export const ChooseLang = memo(() => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");
  const selectLang = (lang: string) => () => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key");
    });
  };

  return (
    <Styled.Container>
      <Styled.Flag
        src={Eng}
        onClick={selectLang("en")}
        selected={selectedLang === "en"}
      />
      <Styled.Flag
        src={Rus}
        onClick={selectLang("ru")}
        selected={selectedLang === "ru"}
      />
    </Styled.Container>
  );
});
