// Enhanced projects data with engineering focus
const sampleProjects = [
    {
        title: "SOLIDWORKS Beginner Projects",
        shortDescription: "20+ SOLIDWORKS projects for beginners with step-by-step tutorials covering mechanical parts, assemblies, and technical drawings.",
        fullDescription: "A comprehensive collection of over 20 SOLIDWORKS projects specifically designed for beginners entering the world of CAD design. This repository serves as a complete learning resource featuring mechanical parts design, complex assemblies, and professional technical drawings. Each project includes detailed step-by-step tutorials with screenshots, downloadable SOLIDWORKS files, and real-world engineering applications. Perfect for students, engineers, and hobbyists looking to master 3D modeling techniques used in modern engineering design. Projects range from simple bracket designs to complex mechanical assemblies, providing a progressive learning path that builds skills systematically.",
        tech: ["SOLIDWORKS", "CAD Design", "3D Modeling", "Technical Drawing", "Engineering"],
        category: "desktop",
        github: "https://github.com/Akhinoor14/SOLIDWORKS-Projects",
        demo: null,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=400&fit=crop"
        ],
        features: ["Step-by-step tutorials", "Downloadable files", "Progressive difficulty", "Real-world applications"],
        featured: true
    },
    {
        title: "Arduino UNO Projects with Tinkercad",
        shortDescription: "40+ Arduino experiments in Tinkercad covering sensors, IoT, and embedded systems with circuit diagrams and code.",
        fullDescription: "An extensive collection of 40+ foundational Arduino UNO experiments designed and simulated using Tinkercad platform. This comprehensive resource covers essential topics in embedded systems including sensor interfacing, actuator control, display programming, and IoT fundamentals. Each project features detailed circuit diagrams, well-commented Arduino code, and practical real-world applications. The projects are structured to provide hands-on experience with various components like LEDs, sensors, motors, displays, and communication modules. Perfect for students, educators, and makers who want to master embedded systems programming and IoT development. All projects are tested and verified in Tinkercad simulation environment.",
        tech: ["Arduino", "C++", "Tinkercad", "IoT", "Embedded Systems", "Sensors"],
        category: "web",
        github: "https://github.com/Akhinoor14/Tinkercad-basic-Projects-Using-Arduino-Uno",
        demo: "https://www.tinkercad.com/users/akhinoor14",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1518309435079-11f4ccfec336?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=400&fit=crop",
            
        ],
        features: ["40+ Projects", "Circuit diagrams", "Commented code", "IoT applications"],
        featured: false
    },
    {
        title: "Electronic Components Guide",
        shortDescription: "Interactive guide to essential electronic components with detailed explanations and practical circuit examples.",
        fullDescription: "A comprehensive interactive guide covering essential electronic components used in modern circuit design and electronics engineering. This educational resource provides detailed explanations of resistors, capacitors, transistors, integrated circuits, and other fundamental components. Each component section includes theoretical background, practical applications, circuit examples, and troubleshooting tips. The guide features visual representations, component specifications, and real-world usage scenarios that help students and engineers understand how to properly select and implement components in their designs. Essential for anyone working with electronics, from hobbyists to professional engineers developing complex systems.",
        tech: ["Electronics", "Circuit Design", "Component Analysis", "PCB Design"],
        category: "web",
        github: "https://github.com/Akhinoor14/Electronic-Components-",
        demo: null,
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=300&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&h=400&fit=crop"
        ],
        features: ["Component specs", "Circuit examples", "Visual guides", "Troubleshooting tips"],
        featured: false
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.querySelector('.contact-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Theme Toggle
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on page load
initializeTheme();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        }
    }
});

// Projects functionality
// Projects functionality with enhanced interactivity
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category} ${project.featured ? 'featured' : ''}`;
    
    // Create fallback image based on project type
    const fallbackImage = project.category === 'web' && project.title.includes('Arduino') 
        ? 'https://via.placeholder.com/600x300/FF6B35/ffffff?text=Arduino+Projects'
        : project.category === 'desktop' && project.title.includes('SOLIDWORKS')
        ? 'https://via.placeholder.com/600x300/4F46E5/ffffff?text=SOLIDWORKS+Projects'
        : 'https://via.placeholder.com/600x300/10B981/ffffff?text=Electronics+Guide';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" 
                 alt="${project.title}" 
                 style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px;" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='${fallbackImage}'; console.log('Image failed for ${project.title}, using fallback');">
            <div class="project-overlay">
                <div class="project-status">
                    ${project.featured ? '<span class="featured-badge">★ Featured</span>' : ''}
                    <span class="category-badge">${project.category.toUpperCase()}</span>
                </div>
                <div class="project-actions">
                    <button class="view-details-btn" onclick="openProjectModal('${project.title}')" 
                            style="background: var(--primary-color); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; margin: 5px;">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-features">
                ${project.features.slice(0, 2).map(feature => `<span class="feature-tag">• ${feature}</span>`).join('')}
            </div>
            <div class="project-tech">
                ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag" style="background: var(--primary-light); color: var(--primary-color);">${tech}</span>`).join('')}
                ${project.tech.length > 3 ? `<span class="tech-more">+${project.tech.length - 3} more</span>` : ''}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link primary" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.demo ? `<a href="${project.demo}" class="project-link secondary" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
                <button class="project-link details" onclick="openProjectModal('${project.title}')" 
                        style="background: none; border: 2px solid var(--primary-color); color: var(--primary-color);">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    `;
    
    // Add enhanced hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    });
    
    return card;
}

function renderProjects(projectsToShow = sampleProjects) {
    projectsGrid.innerHTML = '';
    projectsToShow.forEach((project, index) => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
        
        // Add animation delay
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

// Filter projects
function filterProjects(category) {
    const filteredProjects = category === 'all' 
        ? sampleProjects 
        : sampleProjects.filter(project => project.category === category);
    
    // Hide all cards first
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('visible');
    });
    
    // Show filtered projects after a short delay
    setTimeout(() => {
        renderProjects(filteredProjects);
    }, 300);
}

// Filter button event listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const category = btn.getAttribute('data-filter');
        filterProjects(category);
    });
});

// Initialize projects
renderProjects();

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Scroll animations
function observeElements() {
    const elements = document.querySelectorAll('.fade-in, .stat-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', observeElements);

// GitHub API integration for real-time data
async function fetchGitHubProjects(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        const repos = await response.json();
        
        const projects = repos.map(repo => ({
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || 'No description available',
            tech: repo.language ? [repo.language] : ['JavaScript'],
            category: 'web',
            github: repo.html_url,
            demo: repo.homepage || null,
            image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
            featured: repo.stargazers_count > 5
        }));
        
        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return sampleProjects;
    }
}

// Load real GitHub data (disabled to show only sample projects)
// Uncomment the code below if you want to add more projects from GitHub
/*
(async () => {
    try {
        const githubProjects = await fetchGitHubProjects('Akhinoor14');
        if (githubProjects.length > 0) {
            // Merge with sample projects for better display
            const allProjects = [...sampleProjects, ...githubProjects.slice(0, 3)];
            renderProjects(allProjects);
        }
    } catch (error) {
        console.log('Using sample projects as fallback');
        renderProjects(sampleProjects);
    }
})();
*/

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 100);
    }
    
    // Add floating animation to tech badges
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('floating-animation');
    });
    
    // Add counter animation to stats
    animateCounters();
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add particles animation (optional enhancement)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.1;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Add particles animation (optional enhancement)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.1;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Initialize particles (enable for cool background effect)
createParticles();

// Project search functionality
function addProjectSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search projects...';
    searchInput.className = 'project-search';
    searchInput.style.cssText = `
        margin: 20px 0;
        padding: 10px 15px;
        border: 2px solid var(--border-color);
        border-radius: 25px;
        width: 100%;
        max-width: 400px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
    `;
    
    const projectFilters = document.querySelector('.project-filters');
    projectFilters.parentNode.insertBefore(searchInput, projectFilters.nextSibling);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProjects = sampleProjects.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tech.some(tech => tech.toLowerCase().includes(searchTerm))
        );
        renderProjects(filteredProjects);
    });
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    addProjectSearch();
});

// Project Modal functionality
function openProjectModal(projectTitle) {
    const project = sampleProjects.find(p => p.title === projectTitle);
    if (!project) return;
    
    const modal = createProjectModal(project);
    document.body.appendChild(modal);
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.id = 'projectModal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeProjectModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${project.title}</h2>
                <button class="close-btn" onclick="closeProjectModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="project-gallery">
                    <div class="main-image">
                        <img src="${project.gallery[0]}" alt="${project.title}" id="mainImage">
                    </div>
                    <div class="gallery-thumbnails">
                        ${project.gallery.map((img, index) => `
                            <img src="${img}" alt="Gallery ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                                 onclick="changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                </div>
                <div class="project-details">
                    <div class="project-info">
                        <h3>Project Overview</h3>
                        <p class="full-description">${project.fullDescription}</p>
                        
                        <h3>Key Features</h3>
                        <ul class="features-list">
                            ${project.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                        </ul>
                        
                        <h3>Technologies Used</h3>
                        <div class="tech-stack">
                            ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        
                        <div class="project-stats">
                            <div class="stat-item">
                                <i class="fas fa-star"></i>
                                <span>Category: ${project.category.toUpperCase()}</span>
                            </div>
                            ${project.featured ? '<div class="stat-item"><i class="fas fa-trophy"></i><span>Featured Project</span></div>' : ''}
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <a href="${project.github}" class="modal-btn primary" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> View Source Code
                        </a>
                        ${project.demo ? `<a href="${project.demo}" class="modal-btn secondary" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''}
                        <button class="modal-btn outline" onclick="closeProjectModal()">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .project-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .project-modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            max-width: 1200px;
            width: 90%;
            max-height: 90vh;
            margin: 5vh auto;
            background: var(--bg-color, white);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            transform: translateY(50px);
            transition: transform 0.3s ease;
        }
        
        .project-modal.show .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            padding: 20px 30px;
            border-bottom: 1px solid var(--border-color, #eee);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(135deg, var(--primary-color, #4f46e5), var(--secondary-color, #7c3aed));
            color: white;
        }
        
        .modal-title {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 600;
        }
        
        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-body {
            padding: 30px;
            max-height: calc(90vh - 140px);
            overflow-y: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        
        .project-gallery {
            space-y: 15px;
        }
        
        .main-image {
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        
        .main-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .main-image img:hover {
            transform: scale(1.05);
        }
        
        .gallery-thumbnails {
            display: flex;
            gap: 10px;
            overflow-x: auto;
        }
        
        .thumbnail {
            width: 80px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            flex-shrink: 0;
        }
        
        .thumbnail:hover, .thumbnail.active {
            border-color: var(--primary-color, #4f46e5);
            transform: scale(1.1);
        }
        
        .project-details h3 {
            color: var(--primary-color, #4f46e5);
            margin: 20px 0 10px 0;
            font-size: 1.2rem;
        }
        
        .full-description {
            line-height: 1.6;
            color: var(--text-color, #333);
            margin-bottom: 20px;
        }
        
        .features-list {
            list-style: none;
            padding: 0;
        }
        
        .features-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .features-list i {
            color: #10b981;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }
        
        .tech-badge {
            background: var(--primary-light, #eef2ff);
            color: var(--primary-color, #4f46e5);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .project-stats {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
        }
        
        .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-color, #666);
        }
        
        .modal-actions {
            display: flex;
            gap: 10px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .modal-btn {
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: none;
            cursor: pointer;
        }
        
        .modal-btn.primary {
            background: var(--primary-color, #4f46e5);
            color: white;
        }
        
        .modal-btn.secondary {
            background: #10b981;
            color: white;
        }
        
        .modal-btn.outline {
            background: transparent;
            color: var(--text-color, #333);
            border: 2px solid var(--border-color, #ddd);
        }
        
        .modal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
                gap: 20px;
                padding: 20px;
            }
            
            .modal-actions {
                flex-direction: column;
            }
            
            .modal-btn {
                justify-content: center;
            }
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
    
    return modal;
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = imageSrc;
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

console.log('Portfolio website loaded successfully! 🚀 Engineering Projects Ready!');
