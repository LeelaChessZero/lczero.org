// Mobile sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const sidebarToggle = document.getElementById('doc-sidebar-toggle-span');
    const body = document.body;

    // Function to toggle the sidebar status
    function toggleSidebar() {
        body.classList.toggle('sidebar-shown');
    }

    // Add event listeners
    if (overlay) {
        overlay.addEventListener('click', function(event) {
            toggleSidebar();
            event.preventDefault();
        });
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(event) {
            console.log("Toggle clicked");
            toggleSidebar();
            event.preventDefault();
        });
    }
});