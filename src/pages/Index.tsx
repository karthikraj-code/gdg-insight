import { Button } from "@/components/ui/button";
import { GitBranch, Code, Users2, ArrowRight, Github, Terminal, FileCode, GitMerge, GitPullRequest, GitCommit, ExternalLink, Linkedin } from "lucide-react";
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
        "Understanding Git and version control",
        "git init, add, commit workflow", 
        "Working with local repositories",
        
      ],
      icon: <GitBranch className="w-5 h-5" />
    },
    {
      day: 2, 
      title: "GitHub Collaboration",
      description: "Learn remote repositories and collaborative development workflows",
      topics: [
        "git remote and push operations",
        "Viewing history and changes",
        "Branch management and checkout", 
        "Merging strategies",
        "git investigation",
        "GitHub Pages deployment"
      ],
      icon: <Users2 className="w-5 h-5" />
    },
    {
      day: 3,
      title: "Advanced Workflows", 
      description: "Handle complex scenarios and contribute to the projects",
      topics: [
        "Resolving merge conflicts",
        "collaboration techniques",
        "What is open source ", 
        "How to contribute to open source"
      ],
      icon: <Code className="w-5 h-5" />
    }
  ];

  const speakers = [
    {
      name: "Keerthi Kumar",
      role: "Workshop Speaker",
      image: "/keerthi-bro.jpg", // Update with actual image path
      linkedin: "https://www.linkedin.com/in/keerthi-kumar10", // Update with actual LinkedIn URL
      github: "https://github.com/keerthikmr" // Update with actual GitHub URL
    },
    {
      name: "Bharat Kumar",
      role: "Workshop Speaker", 
      image: "/bharat.jpg", // Update with actual image path
      linkedin: "https://www.linkedin.com/in/bharath-kumar-inukurthi", // Update with actual LinkedIn URL
      github: "https://github.com/bharath-inukurthi" // Update with actual GitHub URL
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
      <header className="text-white py-4" style={{ backgroundImage: 'linear-gradient( 98.7deg,  rgba(34,175,245,1) 2.8%, rgba(98,247,151,1) 97.8% )' }}>
        <div className="container mx-auto px-4">
          {/* Mobile Layout: Stacked */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            {/* Top Logo */}
            <img
              src="https://www.kalasalingam.ac.in/wp-content/uploads/2022/02/Logo.png"
              alt="Kalasalingam Logo"
              className="h-20 w-auto max-w-[60%] object-contain"
              style={{ background: 'transparent' }}
            />
            {/* Center Content */}
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold text-center">GDG Workshop</h1>
              <p className="text-white/80 text-sm mb-3 text-center">Feedback Portal</p>
              <Button 
                variant="secondary"
                onClick={() => navigate("/feedback")}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-sm px-4 py-2"
              >
                Give Feedback
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            {/* Bottom Logo */}
            <img
              src="/gdg_logo.png"
              alt="GDG Logo"
              className="h-20 w-auto max-w-[60%] object-contain"
              style={{ background: 'transparent' }}
            />
          </div>

          {/* Desktop Layout: Side by side */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left side: Kalasalingam logo */}
            <div className="flex-1 flex items-center justify-start">
              <img
                src="https://www.kalasalingam.ac.in/wp-content/uploads/2022/02/Logo.png"
                alt="Kalasalingam Logo"
                className="h-24 w-auto max-w-[40%] object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            {/* Center: Title and Button */}
            <div className="flex flex-col items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-center">GDG Workshop</h1>
              <p className="text-white/80 text-base mb-2 text-center">Feedback Portal</p>
              <Button 
                variant="secondary"
                onClick={() => navigate("/feedback")}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 mt-2 text-sm px-4 py-2"
              >
                Give Feedback
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            {/* Right side: GDG logo */}
            <div className="flex-1 flex items-center justify-end">
              <img
                src="/gdg_logo.png"
                alt="GDG Logo"
                className="h-24 w-auto max-w-[40%] object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-workshop-primary mb-4">
            Welcome, Workshop Attendees! 👋
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

        {/* Speakers Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-center text-workshop-primary mb-8">
            Meet Our Speakers
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-workshop p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-workshop-primary/20"
                  />
                </div>
                <h4 className="text-xl font-semibold text-workshop-primary mb-2">
                  {speaker.name}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {speaker.role}
                </p>
                <div className="flex justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(speaker.linkedin, "_blank")}
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(speaker.github, "_blank")}
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/new-gdg-logo.png"
              alt="GDG Logo"
              className="h-8 w-auto object-contain"
            />
            <p className="text-muted-foreground">
              Made with ❤️ by the Google Developers Group(GDG) KARE Team
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={() => window.open("https://linktr.ee/GDG_on_Campus_Kare", "_blank")}
              className="bg-[#4285F4] hover:bg-[#1967d2] text-white"
              size="sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Connect With Us
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
