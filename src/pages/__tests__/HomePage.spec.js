import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import HomePage from '@/pages/HomePage.vue'

vi.mock('vue-router', () => {
  return {
    useRoute: () => {
      return { path: '/' }
    },
  }
})

describe('Pages > HomePage', () => {
  it('should be rendered', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.element).toBeDefined()
  })
})
