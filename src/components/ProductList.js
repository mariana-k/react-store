import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer}  from '../context'

export default class ProductList extends Component {
  render() {
    return (
        <React.Fragment>
            
            <div className="py-5">
              <div className="container">
                
                <Title name="our" title="products"/>
                <ProductConsumer>
                  {
                    value => {
                      return <input type="text" className="input" onChange={value.handleChange} placeholder="Search..." />
                    }
                  }
                </ProductConsumer>
                <div class="row">
                    <ProductConsumer>
                      {
                        value => {
                          return (
                            value.filtered.map (
                              product => {
                                return (
                                  <Product key={product['product_id']} product={product}/>
                              )}
                            )
                          ) 
                        }
                      }
                    </ProductConsumer>
                  </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}
