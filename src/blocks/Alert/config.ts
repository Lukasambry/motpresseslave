import { Block } from 'payload'

export const Alert: Block = {
  slug: 'alertBlock',
  interfaceName: 'AlertBlock',
  fields: [
    {
      name: 'alertTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'alertDescription',
      type: 'text',
    },
    {
      name: 'alertType',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Destructive', value: 'destructive' },
      ],
      required: true,
    },
  ],
}
