import { mount } from '@vue/test-utils'
import ListPlaces from '@/components/home/ListPlaces.vue'
import { describe, expect, it } from 'vitest'

describe('ListPlaces.spec.js', () => {
  it('renders', () => {
    const wrapper = mount(ListPlaces)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
