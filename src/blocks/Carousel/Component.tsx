"use client"

import * as React from "react"
import { useState } from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay'
import AutoScroll, { AutoScrollType } from 'embla-carousel-auto-scroll'
import { Media } from '@/components/Media'

type Item = {
  src: string
}

type Props = {
  className?: string
  items: Item[]
  isVertical: boolean
  alignStart: boolean
  loop: boolean
  autoPlay: boolean
  autoScroll: boolean
}

export const CarouselBlock: React.FC<Props> = ({ items, isVertical, alignStart, loop, autoPlay, autoScroll }) => {
  const plugins: (AutoplayType | AutoScrollType)[] = []
  if (autoPlay) plugins.push(Autoplay())
  if (autoScroll) plugins.push(AutoScroll({playOnInit: true}))

  return (
    <div className="w-full max-w-xs ml-12">
      <Carousel orientation={isVertical ? "vertical" : "horizontal"} opts={{align: alignStart ? "start" : "center", loop: loop}} plugins={plugins}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-full w-full">
                  <CardContent className="h-full aspect-square w-full p-4 flex justify-center">
                    <Media resource={item.src} fill={true}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
