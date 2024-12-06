import { Block } from 'payload'

export const Avatar: Block = {
  slug: 'avatarBlock',
  interfaceName: 'AvatarBlock',
  fields: [
    {
      name: 'src',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'fallback',
      type: 'text',
      required: true,
    },
  ],
}
