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
vi.mock('@/composables/useCategories', () => {
  return () => ({
    listCategories: () => {
      return [{ id: 1 }]
    },
  })
})
vi.mock('@/composables/usePlaces', () => {
  return () => ({
    listPlaces: () => {
      return [{ id: 1, category: 1 }]
    },
  })
})

// TODO pablosirera: solve this test
describe.skip('Pages > HomePage', () => {
  it('should be rendered', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.element).toBeDefined()
  })
})
