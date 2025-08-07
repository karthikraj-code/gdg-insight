import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Star, Github, Terminal, GitBranch, FileCode, GitMerge, GitPullRequest, GitCommit, Code } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating_day1: "",
    understanding_day1: "",
    rating_day2: "",
    understanding_day2: "",
    rating_day3: "",
    understanding_day3: "",
    favorite_part: "",
    suggestions: "",
    future_topics: "",
    attend_future: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.rating_day1 || !formData.rating_day2 || !formData.rating_day3) {
      toast({
        title: "Missing ratings",
        description: "Please rate all three days of the workshop.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('feedback_submissions')
        .insert([
          {
            name: formData.name || null,
            email: formData.email || null,
            rating_day1: parseInt(formData.rating_day1),
            understanding_day1: formData.understanding_day1 || null,
            rating_day2: parseInt(formData.rating_day2),
            understanding_day2: formData.understanding_day2 || null,
            rating_day3: parseInt(formData.rating_day3),
            understanding_day3: formData.understanding_day3 || null,
            favorite_part: formData.favorite_part || null,
            suggestions: formData.suggestions || null,
            future_topics: formData.future_topics || null,
            attend_future: formData.attend_future || null
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your feedback. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log("Feedback submitted successfully:", data);
      
      toast({
        title: "Feedback submitted!",
        description: "Thank you for your valuable feedback.",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen py-8 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(202,248,255,1) 0%, rgba(186,204,227,1) 51.2%, rgba(117,144,179,1) 100.1% )' }}>
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
      <div className="container max-w-2xl mx-auto px-4 relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 bg-[#4285F4] text-white hover:bg-[#1967d2] hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-workshop bg-white/95 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-workshop-primary">Workshop Feedback</CardTitle>
            <CardDescription>
              Help us improve by sharing your experience from the 3-day Git & GitHub workshop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Optional Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Day Ratings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-workshop-primary flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Rate Each Day
                </h3>
                
                <div className="grid gap-4">
                  {[
                    { day: 1, title: "Git Basics" },
                    { day: 2, title: "Collaboration" },
                    { day: 3, title: "Advanced Topics" }
                  ].map(({ day, title}) => (
                    <div key={day} className="p-4 border rounded-lg space-y-3 bg-white/50 backdrop-blur-sm border-white/30">
                      <div className="mb-2">
                        <Label className="font-medium">Day {day}: {title}</Label>
                      </div>
                      <Select 
                        value={formData[`rating_day${day}` as keyof typeof formData]} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, [`rating_day${day}`]: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Rate this day (1-5)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 - Excellent</SelectItem>
                          <SelectItem value="4">4 - Very Good</SelectItem>
                          <SelectItem value="3">3 - Good</SelectItem>
                          <SelectItem value="2">2 - Fair</SelectItem>
                          <SelectItem value="1">1 - Poor</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <div>
                        <Label htmlFor={`understanding_day${day}`} className="text-sm">
                          What's the Feedback of Day {day}?
                        </Label>
                        <Textarea
                          id={`understanding_day${day}`}
                          value={formData[`understanding_day${day}` as keyof typeof formData]}
                          onChange={(e) => setFormData(prev => ({ ...prev, [`understanding_day${day}`]: e.target.value }))}
                          placeholder={`Describe what you learned and understood from Day ${day}...`}
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open-ended Questions */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="favorite">What did you enjoy most about the workshop?</Label>
                  <Textarea
                    id="favorite"
                    value={formData.favorite_part}
                    onChange={(e) => setFormData(prev => ({ ...prev, favorite_part: e.target.value }))}
                    placeholder="Share what you liked most..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="suggestions">What could we improve for future workshops?</Label>
                  <Textarea
                    id="suggestions"
                    value={formData.suggestions}
                    onChange={(e) => setFormData(prev => ({ ...prev, suggestions: e.target.value }))}
                    placeholder="Your suggestions for improvement..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="future">What topics would you like to see in future workshops?</Label>
                  <Textarea
                    id="future"
                    value={formData.future_topics}
                    onChange={(e) => setFormData(prev => ({ ...prev, future_topics: e.target.value }))}
                    placeholder="Suggest topics for future events..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Would you attend future GDG workshops?</Label>
                  <Select 
                    value={formData.attend_future} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, attend_future: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, definitely!</SelectItem>
                      <SelectItem value="maybe">Maybe, depends on the topic</SelectItem>
                      <SelectItem value="no">No, not interested</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" style={{ backgroundImage: 'linear-gradient( 98.7deg,  rgba(34,175,245,1) 2.8%, rgba(98,247,151,1) 97.8% )' }}>
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;