import React from 'react';
import renderer from 'react-test-renderer';
 
import { ToolCategory } from './index';
 
describe('ToolCategory', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<ToolCategory />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});