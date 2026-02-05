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
        'bg-gradient-to-br from-emerald-50/80 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/20',
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
