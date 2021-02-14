import React, { memo, useState, useEffect, useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { useTranslation } from "react-i18next";
import { calcSuitTest } from "./calcSuitTest";
import { toolkit } from "../../Store/toolkit";

import * as Styled from "./styled";

export const SuitTest = memo(() => {
  const { t } = useTranslation();
  const [result, setResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState<
    { value: string; label: string }[] | []
  >([]);
  const [control, setControl] = useState<
    { value: string; coefficient: number }[] | []
  >([]);

  useEffect(() => {
    const opts: { value: string; label: string }[] = [];
    const controlList: { value: string; coefficient: number }[] = [];
    Object.values(toolkit).forEach((category) => {
      category.content.forEach((item) => {
        item.altTitles.forEach((title) => {
          opts.push({ value: item.title, label: title });
          controlList.push({ value: item.title, coefficient: item.quality });
        });
      });
    });
    setOptions(opts);
    setControl(controlList);
  }, []);

  useEffect(() => {
    setResult(calcSuitTest(selectedOptions, control));
  }, [selectedOptions, control]);

  const selectRef = useRef(null);

  const handleChange = (newValue: any, actionMeta: any) => {
    setSelectedOptions(newValue);
  };
  return (
    <Styled.Container>
      <p>{t("check_my_stack")}</p>
      <CreatableSelect
        ref={selectRef}
        isMulti
        onChange={handleChange}
        options={options}
        placeholder={t("select")}
      />
      {!!result && <Styled.Result>{result}%</Styled.Result>}
    </Styled.Container>
  );
});
