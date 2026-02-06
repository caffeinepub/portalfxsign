import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerNotice() {
  return (
    <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <AlertDescription className="text-sm text-amber-900 dark:text-amber-200 ml-2">
        <strong>Important Disclaimer:</strong> TelsFX is an independent platform and is not affiliated with, 
        endorsed by, or connected to Tesla, Inc., SpaceX, or any other companies mentioned on this site. 
        All references are for inspirational purposes only.
      </AlertDescription>
    </Alert>
  );
}
