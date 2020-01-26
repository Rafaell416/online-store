import React from 'react'
import { mount, shallow } from 'enzyme'
import Product from '../../components/Product'
import ProviderMock from '../../__mocks__/ProviderMock'
import ProductMock from '../../__mocks__/ProductMock'

describe('<Product />', () => {
  test('The component should render', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    )
    expect(product.length).toEqual(1)
  })

  test('Add to cart button should add item to the cart', () => {
    const handleAddToCart = jest.fn() 
    const wrapper = mount(
      <ProviderMock>
        <Product 
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>
    )
    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1)
  })
})