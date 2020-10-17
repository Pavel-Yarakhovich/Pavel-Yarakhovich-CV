const controlList = [
  { value: 'react', coefficient: 1 },
  { value: 'typescript', coefficient: 0.95 },
  { value: 'redux', coefficient: 0.9 },
  { value: 'javascript', coefficient: 0.85 },
  { value: 'styledComponents', coefficient: 1 },
]

export const calcSuitTest = (testResult) => {
  const optionWeigth = 100 / testResult.length;
  let result = 0;

  testResult.forEach(option => {
    const isInControlList = controlList.find(({ value }) => value === option.value);

    if (isInControlList) {
      result = result + optionWeigth * isInControlList.coefficient;
    }
  })

  return result;
}