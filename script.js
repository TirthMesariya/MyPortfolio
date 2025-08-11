// Loading Screen
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
            }, 1000);
        });

        // Typing Animation
        const typingText = document.getElementById('typing-text');
        const phrases = [
            'DevOps Engineer',
            'Cloud Architect',
            'AWS Specialist',
            'Automation Expert',
            'Infrastructure Engineer'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeText, typingSpeed);
        }

        // Start typing animation
        typeText();

        // Particles Animation
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Navigation scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

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

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

       
        // Add some interactive hover effects
        document.querySelectorAll('.glass-card, .skill-category, .project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Skill tags interactive effect
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                this.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });

        // Add a subtle parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-content');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Terminal-style console messages for DevOps theme
        console.log('%c🚀 Welcome to Tirth Mesariya\'s Portfolio!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
        console.log('%c$ kubectl get developer --name="Tirth Mesariya"', 'color: #00ff88; font-family: monospace;');
        console.log('%cNAME: Tirth Mesariya', 'color: #ffffff; font-family: monospace;');
        console.log('%cSTATUS: Available for new opportunities', 'color: #ffffff; font-family: monospace;');
        console.log('%cSKILLS: DevOps, AWS, Docker, Kubernetes, CI/CD', 'color: #ffffff; font-family: monospace;');
        console.log('%cCONTACT: tirthmesariya9638@gmail.com', 'color: #ffffff; font-family: monospace;');

        // Dynamic year update
        const currentYear = new Date().getFullYear();
        document.querySelectorAll('.current-year').forEach(element => {
            element.textContent = currentYear;
        });

        // Add some dynamic content updates
        setTimeout(() => {
            // Simulate real-time updates like a DevOps dashboard
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = parseInt(stat.textContent);
                let currentValue = 0;
                const increment = finalValue / 20;
                
                const updateCounter = () => {
                    if (currentValue < finalValue) {
                        currentValue += increment;
                        stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
                        setTimeout(updateCounter, 100);
                    } else {
                        stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '');
                    }
                };
                
                updateCounter();
            });
        }, 2000);
