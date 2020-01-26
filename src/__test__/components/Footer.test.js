import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../components/Footer'
import { create } from 'react-test-renderer'

describe('<Footer />', () => {
  const footer = mount(<Footer />)

  test('The component should render', () => {
     expect(footer.length).toEqual(1)
  })
  test('The title should render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
  })
})

describe('Snapshot Footer', () => {
  test('Test the component UI', () => {
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})