import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from '../../../src/components/product'
import {
  StyledLabel,
  StyledProduct,
  StyledLabelBlock,
  StyledSale,
  StyledExclusive,
  StyledProductInfo
} from '../../../src/components/product/styles'

import { theme } from '../../../src/components/theme'

const props = {
  theme,
  isSale: false,
  isExclusive: false,
  price: '20',
  productImage: 'foo.jpg',
  productName: 'Foo'
}

describe('Component - Product', () => {
  test('Renders', () => {
    const wrapper = shallow(<Product {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Renders - Sale', () => {
    const props = {
      theme,
      isSale: true,
      isExclusive: false,
      price: '20',
      productImage: 'foo.jpg',
      productName: 'Foo'
    }
    const wrapper = shallow(<Product {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Renders - Exclusive', () => {
    const props = {
      theme,
      isSale: false,
      isExclusive: true,
      price: '20',
      productImage: 'foo.jpg',
      productName: 'Foo'
    }
    const wrapper = shallow(<Product {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledLabel - Renders', () => {
    const wrapper = shallow(<StyledLabel {...props}>Some content</StyledLabel>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledProduct - Renders', () => {
    const wrapper = shallow(<StyledProduct {...props}>Some content</StyledProduct>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledLabelBlock - Renders', () => {
    const wrapper = shallow(<StyledLabelBlock {...props}>Some content</StyledLabelBlock>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledSale - Renders', () => {
    const wrapper = shallow(<StyledSale {...props}>Some content</StyledSale>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledExclusive - Renders', () => {
    const wrapper = shallow(<StyledExclusive {...props}>Some content</StyledExclusive>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledProductInfo - Renders', () => {
    const wrapper = shallow(<StyledProductInfo {...props}>Some content</StyledProductInfo>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
