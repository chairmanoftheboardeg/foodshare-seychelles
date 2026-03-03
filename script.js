// 1. Initialize Supabase
const supabaseUrl = 'https://hhqriuezzjlrhmwifxva.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocXJpdWV6empscmhtd2lmeHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MjQ4MjUsImV4cCI6MjA4NTIwMDgyNX0.puUYRCb9XOUHQ4ZNeAWVsbVctuZsUOn6vbi8_E_1jTg';

// Create a single supabase client for interacting with your database
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// 2. Function to load the announcement bar
async function loadAnnouncement() {
    try {
        const { data, error } = await supabase
            .from('announcements')
            .select('message, link_url')
            .eq('is_active', true)
            .limit(1)
            .single();

        if (error) throw error;

        if (data) {
            const bar = document.getElementById('announcement-bar');
            const textElement = document.getElementById('announcement-text');
            
            if (data.link_url) {
                textElement.innerHTML = `<a href="${data.link_url}" style="color: white; text-decoration: underline;">${data.message}</a>`;
            } else {
                textElement.textContent = data.message;
            }
            
            bar.classList.remove('hidden'); 
        }
    } catch (error) {
        console.log('No active announcements to display.', error.message);
    }
}

// 3. Run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadAnnouncement();
});
