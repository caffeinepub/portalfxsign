import { cn } from '@/lib/utils';

interface CardDividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function CardDivider({ orientation = 'horizontal', className }: CardDividerProps) {
  return (
    <div 
      className={cn(
        'card-divider',
        orientation === 'horizontal' ? 'card-divider-horizontal' : 'card-divider-vertical',
        className
      )}
    />
  );
}
