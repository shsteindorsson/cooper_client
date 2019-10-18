import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';

import DisplayResult from '../Components/DisplayResult'
import MethodSelect from '../Components/MethodSelect'
import Calculator from '../Components/Calculator'

describe('<Calculator />', () => {

  it('shows metric as the standard method', () => {
    const component = mount(<Calculator />);
    const weightLabel = <label>Weight</label>;
    const heightLabel = <label>Height</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const onChangeValue = stub();
    const component = shallow(<Calculator onChangeValue={onChangeValue} />);
    const weightLabel = <label>Weight</label>;
    const heightLabel = <label>Height</label>;
    component.find("MethodSelect").prop('onChangeValue')({target: {value:'imperial'}});
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })
})