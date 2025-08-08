-- Enable Row Level Security on feedback_submissions table
ALTER TABLE public.feedback_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert feedback (since this is a public feedback form)
CREATE POLICY "Allow public feedback submissions" 
ON public.feedback_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading feedback (for admins/organizers to review)
CREATE POLICY "Allow feedback reading" 
ON public.feedback_submissions 
FOR SELECT 
USING (true);