import { Block } from 'payload'

export const AlertDialog: Block = {
  slug: 'alertDialogBlock',
  interfaceName: 'AlertDialogBlock',
  fields: [
    {
      name: 'alertDialogTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'alertDialogDescription',
      type: 'text',
    },
  ],
}
