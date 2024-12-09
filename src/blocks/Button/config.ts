import { Block } from 'payload'

export const Button: Block = {
  slug: 'buttonBlock',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Destructive',
          value: 'destructive',
        },
        {
          label: 'Outline',
          value: 'outline',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
        {
          label: 'Ghost',
          value: 'ghost',
        },
        {
          label: 'Link',
          value: 'link',
        },
      ],
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: false,
    },
    {
      name: 'tooltip',
      type: 'checkbox',
      label: 'Enable Tooltip',
    },
    {
      name: 'badge',
      type: 'checkbox',
      label: 'Enable Badge',
    },
    {
      name: 'tooltipText',
      type: 'text',
      label: 'Tooltip Text',
      admin: {
        condition: (_, siblingData) => siblingData.tooltip,
      },
    },
    {
      name: 'badgeVariant',
      type: 'select',
      label: 'Badge Variant',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Destructive',
          value: 'destructive',
        },
        {
          label: 'Outline',
          value: 'outline',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.badge,
      },
    },
  ],
}
