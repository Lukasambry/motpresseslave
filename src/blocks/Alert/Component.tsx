import { Terminal } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import React from 'react';

type Props = {
  className?: string;
  alertTitle: string;
  alertDescription: string;
  alertType?: 'default' | 'destructive';
};

export const AlertBlock: React.FC<Props> = ({ className, alertTitle, alertDescription, alertType = 'default'}) => {
  return (
    <Alert variant={alertType} className={className} >
      <Terminal className="h-4 w-4" />
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>
        {alertDescription}
      </AlertDescription>
    </Alert>
  );
};
