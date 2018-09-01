import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { StyledHeader } from './styles'

class Header extends PureComponent {
  render () {
    return (
      <StyledHeader>
        <h1>{ this.props.title }</h1>
        { this.props.children }
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Header
