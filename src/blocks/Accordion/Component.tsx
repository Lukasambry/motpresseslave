import { cn } from 'src/utilities/cn'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion/Accordion'
import { AccordionContentProps } from '@radix-ui/react-accordion'
import RichText from '@/components/RichText'
import dynamic from 'next/dynamic'

type AccordionItemProps = {
  value: string
  triggerText: string
  contentText: any
}

type Props = {
  className?: string
  items: AccordionItemProps[]
} & AccordionContentProps

export const AccordionBlock: React.FC<Props> = ({ className, items }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full', className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.triggerText}</AccordionTrigger>
          <AccordionContent>
            <RichText content={item.contentText} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
