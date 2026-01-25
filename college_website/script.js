document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    setupMobileMenu();
});

const navItems = [
    { name: 'Home', path: 'index.html' },
    { name: 'News', path: 'news.html' },
    { name: 'Events', path: 'events.html' },
    { name: 'Scholarship', path: 'scholarship.html' },
    { name: 'Admission', path: 'admission.html' },
    { name: 'Academics', path: 'academics.html' },
    { name: 'About Us', path: 'about.html' },
    { name: 'Contact', path: 'contact.html' },
];

function injectHeader() {
    const header = document.createElement('header');
    const user = JSON.parse(localStorage.getItem('user'));
    
    let loginLink = '<a href="login.html" class="btn" style="color: var(--primary-color); background: var(--white);">Login</a>';
    if (user) {
        loginLink = `<a href="dashboard.html" class="btn" style="color: var(--primary-color); background: var(--white);">Dashboard (${user.role})</a>`;
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    header.innerHTML = `
        <div class="container header-content">
            <a href="index.html" class="logo">College Website</a>
            <button class="mobile-menu-btn" id="mobile-menu-btn">☰</button>
            <nav id="main-nav">
                <ul>
                    ${navItems.map(item => `
                        <li><a href="${item.path}" class="${currentPath === item.path ? 'active' : ''}">${item.name}</a></li>
                    `).join('')}
                    <li>${loginLink}</li>
                </ul>
            </nav>
        </div>
    `;
    
    document.body.prepend(header);
}

function injectFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 College Road, City, State</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@college.edu</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="admission.html">Admissions</a></li>
                        <li><a href="academics.html">Academics</a></li>
                        <li><a href="news.html">News & Updates</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2026 College Website. All rights reserved.</p>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

function setupMobileMenu() {
    // Basic mobile menu toggle logic can go here if needed
    // For this simple implementation, we rely on CSS media queries primarily
    // but we can add a toggle class for the nav
}

// Auth Logic
function login(role) {
    const user = {
        role: role,
        name: role === 'admin' ? 'Administrator' : role === 'faculty' ? 'Dr. Faculty' : 'Student Name'
    };
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}
