import { mount } from '@vue/test-utils'
import ImageFullCardsList from '@/components/ui/ImageFullCardsList.vue'
import { describe, expect, it } from 'vitest'

describe('Components > UI > ImageFullCardsList', () => {
  it('renders', () => {
    const wrapper = mount(ImageFullCardsList)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
