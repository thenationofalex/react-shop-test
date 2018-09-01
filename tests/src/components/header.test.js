import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../../../src/components/header'
import { StyledHeader } from '../../../src/components/header/styles'
import { theme } from '../../../src/components/theme'

const props = {
  title: 'Test title',
  theme
}

describe('Component - Header', () => {
  test('Sets title', () => {
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find('h1').text()).toBe('Test title')
  })

  test('Renders', () => {
    const wrapper = shallow(<Header {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Styled Component Renders', () => {
    const wrapper = shallow(<StyledHeader {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
