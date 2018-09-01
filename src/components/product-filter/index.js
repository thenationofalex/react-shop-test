import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import flattenDeep from 'lodash/flattenDeep'
import uniq from 'lodash/uniq'

import { StyledSelect } from './styles'

let filterOptions = []

class ProductFilter extends PureComponent {
  render () {
    const { options, onChange } = this.props
    options.map(p => filterOptions.push(p.size))
    filterOptions = uniq(flattenDeep(filterOptions))
    return (
      <Fragment>
        <StyledSelect id='size' onChange={onChange}>
          <option value='reset'>Filter by size</option>
          {
            filterOptions.map(o => <option key={o} value={o}>{o}</option>)
          }
        </StyledSelect>
      </Fragment>
    )
  }
}

ProductFilter.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default ProductFilter
