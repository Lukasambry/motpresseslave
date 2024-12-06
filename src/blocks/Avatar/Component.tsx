import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import React from 'react'

type Props = {
  src: string
  alt: string
  fallback: string
}

export const AvatarBlock: React.FC<Props> = ({ src, alt, fallback }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
