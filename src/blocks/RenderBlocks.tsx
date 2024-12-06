import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { AccordionBlock } from '@/blocks/Accordion/Component'
import { AlertBlock } from '@/blocks/Alert/Component'
import { AlertDialogBlock } from '@/blocks/AlertDialog/Component'
import { AvatarBlock } from '@/blocks/Avatar/Component'
import { CarouselBlock } from '@/blocks/Carousel/Component'
import { ChartBlock } from '@/blocks/Chart/Component'
import { ContextMenuBlock } from '@/blocks/ContextMenu/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  accordionBlock: AccordionBlock,
  alertBlock: AlertBlock,
  alertDialogBlock: AlertDialogBlock,
  avatarBlock: AvatarBlock,
  carouselBlock: CarouselBlock,
  chartBlock: ChartBlock,
  contextMenuBlock: ContextMenuBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
