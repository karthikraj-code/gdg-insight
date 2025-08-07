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
                className="w-full bg-[#4285F4] hover:bg-[#1967d2] text-white flex items-center justify-center gap-2"
                onClick={() => window.open("https://chat.whatsapp.com/Eoxa1w0SYNFJfpHzzSd1i4", "_blank")}
              >
                {/* WhatsApp SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 mr-2"><path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.71c1.87 1.02 3.98 1.56 6.24 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.98-.54-5.68-1.56l-.41-.24-3.89 1.01 1.04-3.79-.27-.39c-1.09-1.6-1.67-3.47-1.67-5.41 0-5.36 4.36-9.72 9.72-9.72s9.72 4.36 9.72 9.72-4.36 9.72-9.72 9.72zm5.33-7.29c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.19 2.09 3.2 5.07 4.36.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>
                Join Our WhatsApp Community
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