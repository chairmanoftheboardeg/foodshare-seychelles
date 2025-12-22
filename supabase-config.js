// FoodShare Seychelles - Supabase Configuration
// Link this file at the bottom of every .html page

const SUPABASE_URL = 'https://edotvuleaydztulkxehe.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkb3R2dWxlYXlkenR1bGt4ZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2MDAyNDYsImV4cCI6MjA4MTE3NjI0Nn0.gDni31MI8twOpNmNcIpj1jGsra75eZ2iLL6gQM0i9lw';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper function to check auth status
async function checkUserStatus() {
    const { data: { session } } = await _supabase.auth.getSession();
    const loginBtn = document.getElementById('nav-login-btn');
    const dashboardBtn = document.getElementById('nav-dashboard-btn');
    
    if (session) {
        if(loginBtn) loginBtn.style.display = 'none';
        if(dashboardBtn) dashboardBtn.style.display = 'inline-block';
    } else {
        if(loginBtn) loginBtn.style.display = 'inline-block';
        if(dashboardBtn) dashboardBtn.style.display = 'none';
    }
}

window.addEventListener('load', checkUserStatus);
