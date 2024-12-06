import type { Block } from 'payload'

export const Drawer: Block = {
  slug: 'drawerBlock',
  interfaceName: 'DrawerBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Drawer Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Drawer Description',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Drawer Content',
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
    },
    {
      name: 'cancelButtonText',
      type: 'text',
      label: 'Cancel Button Text',
    },
  ],
  labels: {
    plural: 'Drawers',
    singular: 'Drawer',
  },
}
