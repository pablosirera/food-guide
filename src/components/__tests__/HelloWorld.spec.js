import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { describe, expect, it } from 'vitest'

describe('HelloWorld.spec.js', () => {
  it('renders', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.exists).toBeTruthy()
  })
})
