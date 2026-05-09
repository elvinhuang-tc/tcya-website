// js/components.js

const headerHTML = `
<nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-5">
            <!-- Logo / Title -->
            <div class="text-2xl font-bold text-teal-700 tracking-tight flex items-center gap-2">
                <!-- You can add a small SVG logo here for TCYA later if you want! -->
                <a href="index.html" class="hover:text-teal-500 transition">TCYA</a>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600">
                <a href="index.html" class="hover:text-teal-600 transition">Home</a>
                <a href="about.html" class="hover:text-teal-600 transition">About</a>
                <a href="awards.html" class="hover:text-teal-600 transition">Awards</a>
                <a href="activities.html" class="hover:text-teal-600 transition">Programs</a>
                <a href="chapters.html" class="hover:text-teal-600 transition">Chapters</a>
                <a href="contact.html" class="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-full transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Contact Us</a>
            </div>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-slate-900 text-slate-300 mt-12 py-12 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">TCYA</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Fostering unity, leadership, and compassion among middle and high school students nationwide.</p>
        </div>
        <div>
            <h4 class="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul class="space-y-2 text-sm">
                <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
                <li><a href="awards.html" class="hover:text-white transition">Awards</a></li>
                <li><a href="contact.html" class="hover:text-white transition">Start a Chapter</a></li>
            </ul>
        </div>
        <div>
             <h4 class="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h4>
             <p class="text-sm text-slate-400"><a href="mailto:tcya@tzuchi.us" class="hover:text-teal-400 transition">tcya@tzuchi.us</a></p>
        </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; ${new Date().getFullYear()} Tzu Chi Youth Association. All rights reserved.
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");
    
    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
});