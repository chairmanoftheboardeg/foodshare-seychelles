// supabase-config.js
// NOTE: REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL SUPABASE VALUES

// You find these in your Supabase dashboard: Settings > API
const SUPABASE_URL = 'https://edotvuleaydztulkxehe.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkb3R2dWxlYXlkenR1bGt4ZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2MDAyNDYsImV4cCI6MjA4MTE3NjI0Nn0.gDni31MI8twOpNmNcIpj1jGsra75eZ2iLL6gQM0i9lw'; 

// Initialize Supabase Client
// This function creates a global variable named 'supabase' that all other pages can use.
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
