import type { Block } from 'payload'

export const ContextMenu: Block = {
  slug: 'contextMenuBlock',
  interfaceName: 'ContextMenuBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'shortcut',
          type: 'text',
          label: 'Shortcut',
        },
        {
          name: 'disabled',
          type: 'checkbox',
          label: 'Disabled',
        },
        {
          name: 'inset',
          type: 'checkbox',
          label: 'Inset',
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Item', value: 'item' },
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Radio', value: 'radio' },
            { label: 'Submenu', value: 'submenu' },
            { label: 'Separator', value: 'separator' },
          ],
          label: 'Type',
        },
        {
          name: 'checked',
          type: 'checkbox',
          label: 'Checked',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'checkbox',
          },
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'radio',
          },
        },
        {
          name: 'subItems',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
            },
            {
              name: 'shortcut',
              type: 'text',
              label: 'Shortcut',
            },
            {
              name: 'disabled',
              type: 'checkbox',
              label: 'Disabled',
            },
            {
              name: 'inset',
              type: 'checkbox',
              label: 'Inset',
            },
          ],
          admin: {
            condition: (data, siblingData) => siblingData.type === 'submenu',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Context Menus',
    singular: 'Context Menu',
  },
}
