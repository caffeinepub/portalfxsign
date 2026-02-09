import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface GreenSectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GreenSectionCard({ children, className, ...props }: GreenSectionCardProps) {
  return (
    <Card 
      className={cn(
        'bg-emerald-50/95 dark:bg-emerald-950/95',
        'border-emerald-200/50 dark:border-emerald-800/30',
        'shadow-sm hover:shadow-md transition-shadow duration-300',
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
