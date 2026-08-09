// ==========================================
// SOWNDHARYA PORTFOLIO - MAIN JAVASCRIPT
// ==========================================

console.log("PORTFOLIO JS WORKING");


// ==========================================
// 1. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-category, .journey-card, .contact-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


// Add reveal class to elements

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==========================================
// 2. NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("nav-scrolled");

    } else {

        navbar.classList.remove("nav-scrolled");

    }

});


// ==========================================
// 3. SMOOTH SCROLL
// ==========================================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 4. ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    'nav a[href^="#"]'
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },
    {
        threshold: 0.4
    }
);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


// ==========================================
// 5. TYPING EFFECT
// ==========================================

const typingElement = document.querySelector(
    ".typing-text"
);

if (typingElement) {

    const words = [
        "AI/ML Engineer",
        "Deep Learning Enthusiast",
        "Intelligent Systems Developer",
        "Computer Vision Explorer"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;

            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );

    }

    typeEffect();

}


// ==========================================
// 6. PROJECT CARD HOVER EFFECT
// ==========================================

const projectCards = document.querySelectorAll(
    ".project-card"
);

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// ==========================================
// 7. BACK TO TOP BUTTON
// ==========================================

const backToTop =
    document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 8. PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

    console.log(
        "Portfolio loaded successfully 🚀"
    );

});
// ==========================================
// AI PARTICLE NETWORK
// ==========================================

const canvas = document.getElementById("aiCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];

    const particleCount =
        window.innerWidth < 700 ? 35 : 70;


    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }


    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );


    class Particle {

        constructor() {

            this.x =
                Math.random() * canvas.width;

            this.y =
                Math.random() * canvas.height;

            this.vx =
                (Math.random() - 0.5) * 0.35;

            this.vy =
                (Math.random() - 0.5) * 0.35;

            this.size =
                Math.random() * 2 + 1;

        }


        update() {

            this.x += this.vx;
            this.y += this.vy;


            if (this.x < 0 ||
                this.x > canvas.width) {

                this.vx *= -1;

            }


            if (this.y < 0 ||
                this.y > canvas.height) {

                this.vy *= -1;

            }

        }


        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(126, 231, 255, 0.7)";

            ctx.fill();

        }

    }


    for (let i = 0; i < particleCount; i++) {

        particles.push(
            new Particle()
        );

    }


    function connectParticles() {

        for (let i = 0; i < particles.length; i++) {

            for (
                let j = i + 1;
                j < particles.length;
                j++
            ) {

                const dx =
                    particles[i].x -
                    particles[j].x;

                const dy =
                    particles[i].y -
                    particles[j].y;

                const distance =
                    Math.sqrt(
                        dx * dx + dy * dy
                    );


                if (distance < 120) {

                    const opacity =
                        1 - distance / 120;

                    ctx.strokeStyle =
                        `rgba(126, 231, 255, ${opacity * 0.18})`;

                    ctx.lineWidth = 1;

                    ctx.beginPath();

                    ctx.moveTo(
                        particles[i].x,
                        particles[i].y
                    );

                    ctx.lineTo(
                        particles[j].x,
                        particles[j].y
                    );

                    ctx.stroke();

                }

            }

        }

    }


    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(
            (particle) => {

                particle.update();
                particle.draw();

            }
        );


        connectParticles();

        requestAnimationFrame(
            animateParticles
        );

    }


    animateParticles();

}