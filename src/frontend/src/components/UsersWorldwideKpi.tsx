import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useGetAccountStatistics } from '../hooks/useQueries';

export default function UsersWorldwideKpi() {
  const { data: stats } = useGetAccountStatistics();
  const [displayCount, setDisplayCount] = useState(1000);
  const targetCount = stats ? Number(stats.totalAccounts) + 1000 : 1000;

  useEffect(() => {
    // Animate counter upward smoothly
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = (targetCount - displayCount) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayCount(targetCount);
        clearInterval(timer);
      } else {
        setDisplayCount((prev) => Math.min(prev + increment, targetCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetCount]);

  const formattedCount = Math.floor(displayCount).toLocaleString('en-US');

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
        <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div className="text-left">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
          {formattedCount}+
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          Users Worldwide
        </div>
      </div>
    </div>
  );
}
