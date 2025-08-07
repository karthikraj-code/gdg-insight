import { GitBranch, Calendar, Users } from "lucide-react";
import workshopBanner from "@/assets/workshop-banner.jpg";

const WorkshopBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-workshop-gradient shadow-workshop">
      <div className="absolute inset-0 bg-black/20" />
      <img 
        src={workshopBanner} 
        alt="Git & GitHub Workshop Banner" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="relative p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Git & GitHub Workshop</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">August 5-7, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span className="font-medium">3-Day Intensive</span>
          </div>
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            <span className="font-medium">Hands-on Learning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopBanner;