import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomePage from '@/pages/HomePage.vue'

describe('Pages > HomePage', () => {
  it('should be rendered', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.element).toBeDefined()
  })
})
