import React, { memo, useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { calcSuitTest } from "./calcSuitTest";
import { toolkit } from "../../Store/toolkit";

import * as Styled from "./styled";


export const SuitTest = memo(() => {
  const [result, setResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState<{ value: string, label: string }[] | []>([]);
  const [control, setControl] = useState<{ value: string, coefficient: number }[] | []>([]);

  useEffect(() => {
    const opts: { value: string, label: string }[] = [];
    const controlList: { value: string, coefficient: number }[] = [];
    Object.values(toolkit).forEach(category => {
      category.content.forEach(item => {
        item.altTitles.forEach(title => {
          opts.push({ value: item.title, label: title});
          controlList.push({ value: item.title, coefficient: item.quality })
        })
      })
    });
    setOptions(opts);
    setControl(controlList);
  }, [])

  useEffect(() => {
    setResult(calcSuitTest(selectedOptions, control))
  }, [selectedOptions, control])

  const handleChange = (newValue: any, actionMeta: any) => {
    setSelectedOptions(newValue);
  };
  return (
    <Styled.Container>
      <p>Would you like to check if my stack suits your current needs?</p>

      <CreatableSelect
        isMulti
        onChange={handleChange}
        options={options}
      />
      { !!result && <Styled.Result>{result}%</Styled.Result> }
    </Styled.Container>
  );
});
