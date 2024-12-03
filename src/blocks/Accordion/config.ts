import type { Block } from 'payload'
import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const Accordion: Block = {
  slug: 'accordionBlock',
  interfaceName: 'AccordionBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Accordion Items',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'triggerText',
          type: 'text',
          required: true,
        },
        {
          name: 'contentText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: true,
        },
      ],
    },
  ],
}
