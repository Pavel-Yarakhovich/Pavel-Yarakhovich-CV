export const calcSuitTest = (testResult, controlList) => {
  const optionWeigth = 100 / testResult.length;
  let result = 0;

  testResult.forEach(option => {
    const isInControlList = controlList.find(({ value }) => value === option.value);

    if (isInControlList) {
      result = result + optionWeigth * isInControlList.coefficient / 100;
    }
  })

  return Math.floor(result);
}