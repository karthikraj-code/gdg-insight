import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkshopDayProps {
  day: number;
  title: string;
  description: string;
  topics: string[];
  icon: ReactNode;
}

const WorkshopDay = ({ day, title, description, topics, icon }: WorkshopDayProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-workshop-hover">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-workshop-accent/10 text-workshop-accent">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg">Day {day}</CardTitle>
            <CardDescription className="font-medium text-workshop-primary">
              {title}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-workshop-accent" />
              {topic}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WorkshopDay;