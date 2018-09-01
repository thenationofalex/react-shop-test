import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductPage from '../../../src/components/product-page'
import { StyledPageWrapper, StyledProductWrapper } from '../../../src/components/product-page/styles'
import { theme } from '../../../src/components/theme'
import products from '../../../static/products.json'

const props = {
  theme
}

describe('Component - Product Page', () => {
  test('Renders', () => {
    const wrapper = shallow(<ProductPage title='Foo' products={products} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Product Filtering', () => {
    const wrapper = shallow(<ProductPage title='Foo' products={products} />)
    wrapper.instance().setState({ size: 'M' })
    expect(wrapper.state('productList').length).toBe(4)
  })

  test('Product Filtering - Reset', () => {
    const wrapper = shallow(<ProductPage title='Foo' products={products} />)
    wrapper.instance().setState({ size: 'reset' })
    expect(wrapper.state('productList').length).toBe(8)
  })

  test('Product Filtering - Reset', () => {
    const wrapper = shallow(<ProductPage title='Foo' products={products} />)
    wrapper.instance().handleChange({
      target: {
        id: 'size',
        value: 'M'
      }
    })
    expect(wrapper.state('size')).toBe('M')
  })

  test('Styled Component - StyledPageWrapper - Renders', () => {
    const wrapper = shallow(<StyledPageWrapper {...props}>Some content</StyledPageWrapper>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component - StyledProductWrapper - Renders', () => {
    const wrapper = shallow(<StyledProductWrapper {...props}>Some content</StyledProductWrapper>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
