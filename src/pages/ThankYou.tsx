import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8">
      <div className="container max-w-lg mx-auto px-4">
        <Card className="text-center shadow-workshop">
          <CardHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-workshop-success/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-workshop-success" />
            </div>
            <CardTitle className="text-2xl text-workshop-primary">
              🎉 Thank You!
            </CardTitle>
            <CardDescription className="text-lg">
              Your feedback means a lot to the GDG team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              We appreciate you taking the time to share your experience. 
              Your insights help us create better workshops for the community.
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={() => navigate("/")} 
                className="w-full"
                variant="outline"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button 
                className="w-full bg-workshop-accent hover:bg-workshop-accent/90"
                onClick={() => window.open("#", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Our Discord Community
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Stay tuned for more exciting workshops and events!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;