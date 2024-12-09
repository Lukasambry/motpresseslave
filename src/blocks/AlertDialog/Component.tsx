import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ButtonBlock } from '@/blocks/Button/Component'
import React from 'react';

type ButtonConfig = {
  text: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

type Props = {
  className?: string;
  alertDialogTitle: string;
  alertDialogDescription: string;
  buttons: ButtonConfig[];
};

export const AlertDialogBlock: React.FC<Props> = ({ className, alertDialogTitle, alertDialogDescription, buttons }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonBlock text="Show Dialog" variant="outline" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {buttons.map((button, index) => (
            <ButtonBlock key={index} text={button.text} variant={button.variant} />
          ))}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};
