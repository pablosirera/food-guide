import { mount } from '@vue/test-utils'
import ImageCardsList from '@/components/ui/ImageCardsList.vue'
import { describe, expect, it } from 'vitest'

describe('Components > UI > ImageCardsList', () => {
  it('renders', () => {
    const wrapper = mount(ImageCardsList)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
