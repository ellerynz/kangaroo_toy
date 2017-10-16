import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Star from './Star';

describe('<Star /> UI component', () => {

  it('renders default star', () => {
    expect(
      shallow(<Star />).find('span').length
    ).toBe(1);
  });

});
