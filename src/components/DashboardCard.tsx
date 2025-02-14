
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function DashboardCard({
  title,
  value,
  description,
  className,
  children,
}: DashboardCardProps) {
  return (
    <Card className={cn("stat-card", className)}>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-2 flex items-center">
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </Card>
  );
}
