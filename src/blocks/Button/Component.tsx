import React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Badge, badgeVariants } from '@/components/ui/badge'

type Props = {
  text: string
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  link?: string
  tooltip?: boolean
  tooltipText?: string
  badge?: boolean
  badgeVariant?: "default" | "destructive" | "outline" | "secondary"
}

export const ButtonBlock: React.FC<Props> = ({ text, variant, link, tooltip, tooltipText, badge, badgeVariant }) => {
  if (link) {
    return (
      <a href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <Button variant={variant} asChild>
          <span>{text}</span>
        </Button>
      </a>
    )
  }
  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={variant}>{text}</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  if (badge) {
    return <Badge variant={badgeVariant}>{text}</Badge>
  }

  return <Button variant={variant}>{text}</Button>
}
