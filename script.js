// ==========================
// BOOT ANIMATION
// ==========================

const bootLines = [
    "Initializing portfolio...",
    "Loading projects...",
    "Loading skills...",
    "Loading coursework...",
    "Establishing secure connection...",
    "",
    "Access Granted."
];

const bootText = document.getElementById("boot-text");
const bootScreen = document.getElementById("boot-screen");
const terminalContainer = document.getElementById("terminal-container");

let bootIndex = 0;

function typeBootLine() {

    if (bootIndex >= bootLines.length) {

        setTimeout(() => {

            bootScreen.style.display = "none";

            terminalContainer.classList.remove("hidden");

            startTerminalTyping();

        }, 800);

        return;
    }

    let line = bootLines[bootIndex];
    let charIndex = 0;

    let interval = setInterval(() => {

        if (charIndex < line.length) {

            bootText.innerHTML += line.charAt(charIndex);

            charIndex++;

        } else {

            clearInterval(interval);

            bootText.innerHTML += "<br>";

            bootIndex++;

            setTimeout(typeBootLine, 250);

        }

    }, 30);
}

typeBootLine();

// ==========================
// TERMINAL INTRO TYPING
// ==========================

const typingLine = document.getElementById("typing-line");

const introText =
    " whoami";

function startTerminalTyping() {

    let index = 0;

    let interval = setInterval(() => {

        if (index < introText.length) {

            typingLine.textContent += introText.charAt(index);

            index++;

        } else {

            clearInterval(interval);

            setTimeout(() => {

                document
                    .getElementById("intro")
                    .classList.remove("hidden-section");

                document
                    .getElementById("intro")
                    .classList.add("show");

            }, 300);

        }

    }, 80);
}

// ==========================
// SECTION SCROLLING
// ==========================

function showSection(sectionId) {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    section.style.boxShadow =
        "0 0 20px rgba(0,255,65,0.35)";

    setTimeout(() => {

        section.style.boxShadow = "none";

    }, 1200);
}

// ==========================
// PROJECT CARD ANIMATION
// ==========================

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
        "all 0.6s ease";

    observer.observe(card);

});

// ==========================
// SECTION FADE IN
// ==========================

const sections =
    document.querySelectorAll(".content-section");

const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(20px)";

    section.style.transition =
        "all 0.8s ease";

    sectionObserver.observe(section);

});

// ==========================
// CURSOR BLINK ENHANCEMENT
// ==========================

setInterval(() => {

    const cursor =
        document.querySelector(".cursor");

    if (cursor) {

        cursor.style.opacity =
            cursor.style.opacity === "0"
                ? "1"
                : "0";

    }

}, 500);

// ==========================
// CONSOLE EASTER EGG
// ==========================

console.log(`
=========================================
Nadia Cecil Portfolio
Cybersecurity Student
=========================================

Available Commands:

about
skills
projects
coursework
contact

ScanX Live:
https://scanx-b7tk.onrender.com

=========================================
`);
