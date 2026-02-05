import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ProfileTileProps {
  imageSrc: string;
  name: string;
  title?: string;
  isPlaceholder?: boolean;
}

export default function ProfileTile({ imageSrc, name, title, isPlaceholder = false }: ProfileTileProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <Avatar className="w-32 h-32 border-4 border-emerald-100 dark:border-emerald-900/30">
        <AvatarImage src={imageSrc} alt={name} className="object-cover" />
        <AvatarFallback className="text-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {isPlaceholder && (
          <Badge variant="outline" className="mt-2 text-xs">
            Example Profile
          </Badge>
        )}
      </div>
    </div>
  );
}
