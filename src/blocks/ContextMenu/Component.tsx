import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import React from "react"

type MenuItem = {
  label: string
  shortcut?: string
  disabled?: boolean
  inset?: boolean
  type: 'item' | 'checkbox' | 'radio' | 'submenu' | 'separator'
  checked?: boolean
  value?: string
  subItems?: MenuItem[]
}

type Props = {
  items: MenuItem[]
}

export const ContextMenuBlock: React.FC<Props> = ({ items }) => {
  const renderMenuItem = (item: MenuItem, index: number) => {
    switch (item.type) {
      case 'item':
        return (
          <ContextMenuItem key={index} inset={item.inset} disabled={item.disabled}>
            {item.label}
            {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
          </ContextMenuItem>
        )
      case 'checkbox':
        return (
          <ContextMenuCheckboxItem key={index} checked={item.checked} disabled={item.disabled}>
            {item.label}
            {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
          </ContextMenuCheckboxItem>
        )
      case 'radio':
        return (
          <ContextMenuRadioItem key={index} value={item.value || ''}  disabled={item.disabled}>
            {item.label}
            {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
          </ContextMenuRadioItem>
        )
      case 'submenu':
        return (
          <ContextMenuSub key={index}>
            <ContextMenuSubTrigger inset={item.inset} disabled={item.disabled}>
              {item.label}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              {item.subItems?.map((subItem, subIndex) => renderMenuItem(subItem, subIndex))}
            </ContextMenuSubContent>
          </ContextMenuSub>
        )
      case 'separator':
        return <ContextMenuSeparator key={index} />
      default:
        return null
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        {items.map((item, index) => renderMenuItem(item, index))}
      </ContextMenuContent>
    </ContextMenu>
  )
}
