import { Block } from 'payload'
import { Button } from '@/blocks/Button/config'

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
    {
      name: 'buttons',
      type: 'blocks',
      blocks: [Button],
    },
  ],
}
