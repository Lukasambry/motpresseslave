import type { Block } from 'payload'

export const Carousel: Block = {
  slug: 'carouselBlock',
  interfaceName: 'CarouselBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'src',
          relationTo: 'media',
          type: 'upload',
          label: 'Image Source',
        },
      ],
    },
    {
      name: 'isVertical',
      type: 'checkbox',
      label: 'Vertical Orientation',
    },
    {
      name: 'alignStart',
      type: 'checkbox',
      label: 'Align Start',
    },
    {
      name: 'loop',
      type: 'checkbox',
      label: 'Loop',
    },
    {
      name: 'autoPlay',
      type: 'checkbox',
      label: 'Auto Play',
    },
    {
      name: 'autoScroll',
      type: 'checkbox',
      label: 'Auto Scroll',
    }
  ],
  labels: {
    plural: 'Carousels',
    singular: 'Carousel',
  },
}
