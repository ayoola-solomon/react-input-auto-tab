import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Autotab from '../src/Autotab';

describe('<Autotab />', () => {
  it('should render component will required props', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Autotab name="test" onChange={spy} />);
    const props = wrapper.props();

    expect(props.name).to.equal('test');
    expect(typeof props.onChange).to.equal('function');
  });

  it('should handle auto tabbing if maxLength is specified', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Autotab name="test" maxLength={4} onChange={spy} />);
    const props = wrapper.props();

    expect(props.maxLength).to.equal(4);
    expect(wrapper.instance().handleTab).to.exist;
  });
});
