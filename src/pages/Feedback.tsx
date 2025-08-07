import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

  const handleSubmit = (e: React.FormEvent) => {
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

    // Here you would submit to Supabase
    console.log("Form data:", { ...formData, submitted_at: new Date().toISOString() });
    
    toast({
      title: "Feedback submitted!",
      description: "Thank you for your valuable feedback.",
    });

    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-2xl mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-workshop">
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
                  <Label htmlFor="name">Name (optional)</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (optional)</Label>
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
                    { day: 1, title: "Git Basics", description: "git init, add, commit, version control" },
                    { day: 2, title: "Collaboration", description: "git remote, push, branch, checkout, merge, GitHub Pages" },
                    { day: 3, title: "Advanced Topics", description: "Merge conflicts & open source contribution" }
                  ].map(({ day, title, description }) => (
                    <div key={day} className="p-4 border rounded-lg space-y-3">
                      <div className="mb-2">
                        <Label className="font-medium">Day {day}: {title}</Label>
                        <p className="text-sm text-muted-foreground">{description}</p>
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
                          What key concepts did you understand from Day {day}?
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

              <Button type="submit" className="w-full bg-workshop-accent hover:bg-workshop-accent/90">
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