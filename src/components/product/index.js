import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  StyledProduct,
  StyledProductInfo,
  StyledLabelBlock,
  StyledSale,
  StyledExclusive
} from './styles'

class Product extends PureComponent {
  render () {
    const { isSale, isExclusive, price, productImage, productName } = this.props
    return (
      <StyledProduct>
        <img src={`/static/${productImage}`} alt={productName} />
        <StyledLabelBlock>
          {
            isSale && (<StyledSale>sale</StyledSale>)
          }
          {
            isExclusive && (<StyledExclusive>exclusive</StyledExclusive>)
          }
        </StyledLabelBlock>
        <StyledProductInfo>
          <h2>{productName}</h2>
          <p>{price}</p>
        </StyledProductInfo>
      </StyledProduct>
    )
  }
}

Product.propTypes = {
  isSale: PropTypes.bool,
  isExclusive: PropTypes.bool,
  price: PropTypes.string,
  productImage: PropTypes.string,
  productName: PropTypes.string
}

export default Product
