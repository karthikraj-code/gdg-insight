-- Add lab column to feedback_submissions table
ALTER TABLE public.feedback_submissions 
ADD COLUMN lab TEXT;