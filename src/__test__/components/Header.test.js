import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'
import { create } from 'react-test-renderer'

describe('<Header />', () => {
  test('The Header component should render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
  
    expect(header.length).toEqual(1)
  })
  test('The title should render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
    expect(header.find('.Header-title').text()).toEqual('Platzi Store')
  })
})

describe('Header snapshot', () => {
  test('Test header snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})