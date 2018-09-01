import React, { Fragment, PureComponent } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { StyledPageWrapper, StyledProductWrapper } from './styles'
import Header from '../header'
import ProductFilter from '../product-filter'
import Product from '../product'
import handleChange from '../handleChange'

class ProductPage extends PureComponent {
  handleChange = handleChange.bind(this)
  state = { productList: this.props.products }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.size !== this.state.size) {
      let filteredItems = []
      if (this.state.size === 'reset') {
        filteredItems = this.props.products
      } else {
        this.props.products.forEach(product => {
          if (product.size.indexOf(this.state.size) !== -1) {
            filteredItems.push(product)
          }
        })
      }
      this.setState({ productList: filteredItems })
    }
  }
  render () {
    const { title } = this.props
    const { productList } = this.state
    return (
      <StyledPageWrapper>
        <Head>
          <title>{title}</title>
        </Head>
        <Fragment>
          <Header title={title}>
            <ProductFilter options={productList} onChange={this.handleChange} />
          </Header>
          <StyledProductWrapper>
            {
              productList.map(p => <Product key={p.index} {...p} />)
            }
          </StyledProductWrapper>
        </Fragment>
      </StyledPageWrapper>
    )
  }
}

ProductPage.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number,
    isSale: PropTypes.bool,
    isExclusive: PropTypes.bool,
    price: PropTypes.string,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    size: PropTypes.array
  }))
}

export default ProductPage
