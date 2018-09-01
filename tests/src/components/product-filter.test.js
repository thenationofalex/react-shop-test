import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { theme } from '../../../src/components/theme'

import ProductFilter from '../../../src/components/product-filter'
import { StyledSelect } from '../../../src/components/product-filter/styles'

const testOpts = [
  {
    'index': 0,
    'isSale': true,
    'isExclusive': false,
    'price': '$18.88',
    'productImage': 'product-1.jpg',
    'productName': 'Striped shirt',
    'size': ['XS', 'S', 'L', 'XL']
  }
]

const props = {
  theme
}

describe('Component - Product filter', () => {
  test('Renders', () => {
    const wrapper = shallow(<ProductFilter onChange={() => jest.fn()} options={testOpts} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledSelect - Renders', () => {
    const wrapper = shallow(<StyledSelect {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
