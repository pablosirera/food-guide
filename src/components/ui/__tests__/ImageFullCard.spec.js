import { mount } from '@vue/test-utils'
import ImageFullCard from '@/components/ui/ImageFullCard.vue'
import { describe, expect, it } from 'vitest'

describe('ImageFullCard.spec.js', () => {
  it('renders', () => {
    const wrapper = mount(ImageFullCard)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should matched', () => {
    const wrapper = mount(ImageFullCard, {
      props: {
        item: {
          img: 'https://api.lorem.space/image/burger?w=400&h=225',
          name: 'Burger King',
        },
      },
    })

    expect(wrapper.text()).toContain('Burger King')
  })
})
