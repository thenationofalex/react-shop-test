import React, { PureComponent, Fragment } from 'react'
import ProductPage from '../src/components/product-page'
import products from '../static/products.json'

export default class Index extends PureComponent {
  render () {
    return (
      <Fragment>
        <ProductPage
          title={`Women's Tops`}
          products={products}
        />
      </Fragment>
    )
  }
}
