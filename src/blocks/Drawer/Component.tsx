"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import RichText from '@/components/RichText'
import { DrawerBlock as DrawerBlockProps } from '@/payload-types'

export const DrawerBlock: React.FC<DrawerBlockProps> = ({ title, description, content = { root: { type: 'root', children: [], direction: 'ltr', format: '', indent: 0, version: 1 } }, submitButtonText, cancelButtonText }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                {content
                  ? <RichText content={content} enableGutter={false} />
                  : null}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>{submitButtonText}</Button>
            <DrawerClose asChild>
              <Button variant="outline">{cancelButtonText}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
