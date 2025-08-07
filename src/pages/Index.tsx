import { Button } from "@/components/ui/button";
import { GitBranch, Code, Users2, ArrowRight, Github, Terminal, FileCode, GitMerge, GitPullRequest, GitCommit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WorkshopBanner from "@/components/WorkshopBanner";
import WorkshopDay from "@/components/WorkshopDay";

const Index = () => {
  const navigate = useNavigate();

  const workshopDays = [
    {
      day: 1,
      title: "Git Fundamentals",
      description: "Master the basics of version control and local repository management",
      topics: [
        "Understanding version control",
        "git init, add, commit workflow", 
        "Working with local repositories",
        "Viewing history and changes"
      ],
      icon: <GitBranch className="w-5 h-5" />
    },
    {
      day: 2, 
      title: "GitHub Collaboration",
      description: "Learn remote repositories and collaborative development workflows",
      topics: [
        "git remote and push operations",
        "Branch management and checkout", 
        "Merging strategies",
        "GitHub Pages deployment"
      ],
      icon: <Users2 className="w-5 h-5" />
    },
    {
      day: 3,
      title: "Advanced Workflows", 
      description: "Handle complex scenarios and contribute to open source projects",
      topics: [
        "Resolving merge conflicts",
        "Open source contribution process",
        "Advanced Git techniques", 
        "Best practices and tips"
      ],
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* 3D Background Icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Github className="absolute top-20 left-10 w-16 h-16 text-orange-500/30 animate-float transform rotate-12 hover:scale-110 transition-transform duration-300" 
               style={{ animationDelay: '0s' }} />
        <Terminal className="absolute top-32 right-20 w-12 h-12 text-green-500/25 animate-float transform -rotate-12 hover:scale-110 transition-transform duration-300" 
                 style={{ animationDelay: '1s' }} />
        <GitBranch className="absolute top-64 left-1/4 w-20 h-20 text-blue-500/20 animate-float transform rotate-45 hover:scale-110 transition-transform duration-300" 
                   style={{ animationDelay: '2s' }} />
        <FileCode className="absolute bottom-40 right-10 w-14 h-14 text-purple-500/30 animate-float transform -rotate-6 hover:scale-110 transition-transform duration-300" 
                  style={{ animationDelay: '3s' }} />
        <GitMerge className="absolute bottom-20 left-16 w-18 h-18 text-red-500/25 animate-float transform rotate-30 hover:scale-110 transition-transform duration-300" 
                  style={{ animationDelay: '0.5s' }} />
        <GitPullRequest className="absolute top-80 right-1/3 w-16 h-16 text-indigo-500/20 animate-float transform -rotate-30 hover:scale-110 transition-transform duration-300" 
                        style={{ animationDelay: '1.5s' }} />
        <GitCommit className="absolute bottom-60 left-1/3 w-12 h-12 text-yellow-500/30 animate-float transform rotate-60 hover:scale-110 transition-transform duration-300" 
                   style={{ animationDelay: '2.5s' }} />
        <Code className="absolute top-48 left-3/4 w-14 h-14 text-teal-500/25 animate-float transform -rotate-45 hover:scale-110 transition-transform duration-300" 
              style={{ animationDelay: '3.5s' }} />
      </div>
      {/* Header */}
      <header className="bg-workshop-gradient text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <GitBranch className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">GDG Workshop</h1>
                <p className="text-white/80 text-sm">Feedback Portal</p>
              </div>
            </div>
            <Button 
              variant="secondary"
              onClick={() => navigate("/feedback")}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Give Feedback
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-workshop-primary mb-4">
            Welcome Workshop Attendees! 👋
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you for joining our intensive 3-day Git & GitHub workshop. 
            We hope you had an amazing learning experience!
          </p>
        </div>

        {/* Workshop Banner */}
        <div className="mb-12">
          <WorkshopBanner />
        </div>

        {/* Workshop Recap */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-center text-workshop-primary mb-8">
            Workshop Recap
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {workshopDays.map((day) => (
              <WorkshopDay key={day.day} {...day} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-workshop-gradient rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">
            Share Your Experience
          </h3>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Your feedback helps us improve and create better learning experiences 
            for the developer community.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/feedback")}
            className="bg-white text-workshop-primary hover:bg-white/90"
          >
            Give Feedback Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by the GDG Team • Powered by Lovable & Supabase
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
