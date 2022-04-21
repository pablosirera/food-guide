import { mount } from '@vue/test-utils'
import BaseFileInput from '@/components/ui/BaseFileInput.vue'
import { describe, expect, it } from 'vitest'

describe('Components > UI > BaseFileInput', () => {
  it('should be render', () => {
    const wrapper = mount(BaseFileInput)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
