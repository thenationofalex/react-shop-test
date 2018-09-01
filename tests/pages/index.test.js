import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ThemeProvider } from 'emotion-theming'
import Index from '../../pages'
import products from '../../static/products.json'
import { theme } from '../../src/components/theme'

const props = {
  title: 'Test title',
  products
}

describe('Product Page', () => {
  test('Renders', () => {
    const wrapper = shallow(<Index {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
