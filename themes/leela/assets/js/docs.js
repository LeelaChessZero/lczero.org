// Mobile sidebar toggle functionality
const overlay = document.getElementById('overlay');
const sidebarToggles = document.querySelectorAll('[data-sidebar-toggle]');
const body = document.body;

// Function to toggle the sidebar status
function toggleSidebar() {
    body.classList.toggle('sidebar-hidden');
    // sidebarStatus will reflect the current state
    const sidebarStatus = body.classList.contains('sidebar-hidden') ? 'open' : 'closed';
    console.log('Sidebar status:', sidebarStatus); // For debugging, you can remove this
}

// Add click event listener to the overlay
if (overlay) { // Check if overlay exists to prevent errors
    overlay.addEventListener('click', function(event) {
        toggleSidebar();
        event.preventDefault(); // Prevent default action (e.g., if overlay is a link)
    });
}

// Function to close the sidebar if it's open and window width is > 768px
/*function closeSidebarOnLargeScreen() {
    if (window.innerWidth > 768 && !body.classList.contains('sidebar-hidden')) {
        body.classList.add('sidebar-hidden'); // Add the class to hide it
        console.log('Sidebar closed automatically due to large screen size.'); // For debugging
    }
}*/
// Add click event listeners to all elements with data-sidebar-toggle
sidebarToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        toggleSidebar();
        event.preventDefault(); // Prevent default action
    });
});

// Add a resize event listener to close the sidebar automatically
// window.addEventListener('resize', closeSidebarOnLargeScreen);

// Also call it once on load to handle initial screen size
// document.addEventListener('DOMContentLoaded', closeSidebarOnLargeScreen);