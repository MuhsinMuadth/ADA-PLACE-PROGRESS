// User type switching
const userTypeBtns = document.querySelectorAll('.user-type-btn');
const contentSections = document.querySelectorAll('.content-section');

userTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetType = btn.dataset.type;
        
        // Update active button
        userTypeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show target content
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${targetType}-content`).classList.add('active');
    });
});

// Profile panel functionality
function openProfile() {
    document.getElementById('profile-overlay').classList.add('active');
    document.getElementById('profile-panel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    document.getElementById('profile-overlay').classList.remove('active');
    document.getElementById('profile-panel').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Profile tab switching
const profileTabs = document.querySelectorAll('.profile-tab');
const profileTabContents = document.querySelectorAll('.profile-tab-content');

profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // Update active tab
        profileTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show target content
        profileTabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
});

// Document download simulation
function downloadDocument(type) {
    const documentNames = {
        'cv': 'Jamie_Sullivan_CV.pdf',
        'portfolio': 'portfolio.jamiesullivan.dev',
        'transcript': 'Academic_Transcript_JS.pdf',
        'certificates': 'Certifications_Bundle.zip',
        'projects': 'github.com/jamiesullivan'
    };
    
    if (type === 'portfolio' || type === 'projects') {
        // Simulate opening external link
        alert(`Opening: ${documentNames[type]}`);
    } else {
        // Simulate file download
        alert(`Downloading: ${documentNames[type]}`);
    }
}

// Modal functionality
function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

// Add some interactive behaviors
document.querySelectorAll('.placement-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
            card.style.transform = 'translateX(15px)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        }
    });
});

// Simulate real-time updates
setInterval(() => {
    const notifications = document.querySelector('.notification-badge::after');
    // This would update notification count in a real app
}, 30000);

// Add smooth scroll behavior for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navigation highlighting for current page
function updateNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call navigation update on page load
document.addEventListener('DOMContentLoaded', updateNavigation);