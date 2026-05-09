// js/components.js

const headerHTML = `
<nav class="bg-teal-700 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <!-- Logo / Title -->
            <div class="text-2xl font-bold tracking-wider hover:text-teal-200 transition">
                <a href="index.html">TCYA</a>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-6 font-medium">
                <a href="index.html" class="hover:text-teal-200 transition">Home</a>
                <a href="about.html" class="hover:text-teal-200 transition">About TCYA</a>
                <a href="awards.html" class="hover:text-teal-200 transition">Awards</a>
                <a href="activities.html" class="hover:text-teal-200 transition">National Activities</a>
                <a href="chapters.html" class="hover:text-teal-200 transition">Local Chapters</a>
                <a href="contact.html" class="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded transition">Contact Us</a>
            </div>
            <!-- Mobile Menu Button (Optional to implement later) -->
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                    <svg class="w-6 h-6" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-gray-800 text-white mt-12 py-8">
    <div class="max-w-7xl mx-auto px-4 text-center">
        <h3 class="text-xl font-bold mb-4">Tzu Chi Youth Association</h3>
        <p class="text-gray-400 mb-4">Empowering youth through compassion, leadership, and service.</p>
        <p class="text-gray-400 text-sm">&copy; ${new Date().getFullYear()} TCYA. All rights reserved.</p>
    </div>
</footer>
`;

// Inject components into pages
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");
    
    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
});