import React, { memo, useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { calcSuitTest } from "./calcSuitTest";
import * as Styled from "./styled";

const options = [{value:'react', label: 'React'}, {value:'typescript', label: 'TypeScript'}];

export const SuitTest = memo(() => {
  const [result, setResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setResult(calcSuitTest(selectedOptions))
  }, [selectedOptions])

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
