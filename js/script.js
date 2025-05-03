// Main JavaScript for PedagangPulsa.com

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-menu a').forEach(navLink => {
            navLink.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            } else if (current === '' && link.getAttribute('href') === '#') {
                link.classList.add('active');
            }
        });
    });

    // Simple form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            let valid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (valid) {
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Mengirim...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    alert('Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.');
                    inputs.forEach(input => input.value = '');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                alert('Mohon isi semua field yang diperlukan!');
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.footer-newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim() === '') {
                emailInput.style.borderColor = 'red';
                return;
            }
            
            // Simulate subscription
            const submitBtn = this.querySelector('button');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Terima kasih telah berlangganan newsletter kami!');
                emailInput.value = '';
                emailInput.style.borderColor = '';
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Create placeholder images for testimonials
    function createPlaceholderImages() {
        const avatarImgs = document.querySelectorAll('.testimonial-author img');
        avatarImgs.forEach((img, index) => {
            // Check if image failed to load
            img.addEventListener('error', function() {
                // Create canvas for placeholder
                const canvas = document.createElement('canvas');
                canvas.width = 50;
                canvas.height = 50;
                const ctx = canvas.getContext('2d');
                
                // Draw colored background (different for each testimonial)
                const colors = ['#1e88e5', '#ff9800', '#64b5f6'];
                ctx.fillStyle = colors[index % colors.length];
                ctx.fillRect(0, 0, 50, 50);
                
                // Draw initials
                const names = ['BS', 'SN', 'RH'];
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 20px Poppins';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(names[index % names.length], 25, 25);
                
                // Replace image with canvas
                img.src = canvas.toDataURL();
            });
        });
    }
    
    createPlaceholderImages();

    // Create placeholder for hero illustration
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        heroImg.addEventListener('error', function() {
            const parent = this.parentElement;
            
            // Create a placeholder div instead of the image
            const placeholder = document.createElement('div');
            placeholder.className = 'hero-placeholder';
            placeholder.innerHTML = `
                <div class="placeholder-phone">
                    <div class="phone-screen">
                        <div class="screen-content">
                            <div class="transaction-success">
                                <i class="fas fa-check-circle"></i>
                                <span>Transaksi Berhasil!</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Replace image with placeholder
            parent.replaceChild(placeholder, this);
            
            // Add styles for the placeholder
            const style = document.createElement('style');
            style.textContent = `
                .hero-placeholder {
                    width: 100%;
                    height: 350px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .placeholder-phone {
                    width: 180px;
                    height: 320px;
                    background: #212121;
                    border-radius: 20px;
                    padding: 10px;
                    position: relative;
                }
                .phone-screen {
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    border-radius: 10px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .screen-content {
                    text-align: center;
                }
                .transaction-success {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .transaction-success i {
                    font-size: 50px;
                    color: #4CAF50;
                    margin-bottom: 10px;
                }
                .transaction-success span {
                    font-weight: bold;
                    color: #212121;
                }
            `;
            document.head.appendChild(style);
        });
    }

    // Create placeholder for about illustration
    const aboutImg = document.querySelector('.about-image img');
    if (aboutImg) {
        aboutImg.addEventListener('error', function() {
            const parent = this.parentElement;
            
            // Create a placeholder div
            const placeholder = document.createElement('div');
            placeholder.className = 'about-placeholder';
            placeholder.innerHTML = `
                <div class="about-icon">
                    <i class="fas fa-store"></i>
                </div>
                <div class="about-text-placeholder">
                    <div class="text-line"></div>
                    <div class="text-line"></div>
                    <div class="text-line short"></div>
                </div>
            `;
            
            // Replace image with placeholder
            parent.replaceChild(placeholder, this);
            
            // Add styles for the placeholder
            const style = document.createElement('style');
            style.textContent = `
                .about-placeholder {
                    width: 100%;
                    height: 300px;
                    background: rgba(30, 136, 229, 0.1);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .about-icon {
                    width: 80px;
                    height: 80px;
                    background: #1e88e5;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                .about-icon i {
                    font-size: 40px;
                    color: #ffffff;
                }
                .about-text-placeholder {
                    width: 80%;
                }
                .text-line {
                    height: 10px;
                    background: rgba(30, 136, 229, 0.3);
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
                .text-line.short {
                    width: 60%;
                }
            `;
            document.head.appendChild(style);
        });
    }

    // Create img directory structure
    function createImgDirectories() {
        console.log('Website loaded successfully!');
        console.log('Note: Create an "img" directory with the following files:');
        console.log('- hero-illustration.svg');
        console.log('- about-illustration.svg');
        console.log('- avatar-1.jpg, avatar-2.jpg, avatar-3.jpg for testimonials');
    }
    
    createImgDirectories();
});