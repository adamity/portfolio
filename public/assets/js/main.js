let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const skillSet = [
    "HTML",
    "Bootstrap",
    "Databases",
    "JSON",
    "jQuery",
    "PHP",
    "CodeIgniter",
    "Web Hosting",
    "Postman API",
    "Stripe",
    "iPay88",
    "Chrome Extensions",
    "Software Development Life Cycle (SDLC)",
    "Laravel",
    "Git Version Control",
    "MySQL",
    "JavaScript",
    "API Integration",
    "NGINX Web Server",
    "Apache",
    "CSS",
    "FTP Software",
    "Telegram Bots",
    "Java",
    "Bash",
    "Linux Server",
    "AJAX",
    "AngularJS",
    "GPT-3",
    "REST APIs",
    "Vue.js",
    "Python",
    "Google Analytics",
    "C++",
    "Agile Methodologies",
    "Google Cloud Platform (GCP)",
    "Scrum",
    "Search Engine Optimization (SEO)"
];

const categorizedSkillSet = [
    {
        category: "Frontend",
        skills: [
            {
                name: "HTML",
                usage: 3
            },
            {
                name: "Bootstrap",
                usage: 3
            },
            {
                name: "JavaScript",
                usage: 3
            },
            {
                name: "CSS",
                usage: 3
            },
            {
                name: "Angular",
                usage: 3
            },
            {
                name: "jQuery",
                usage: 2
            },
            {
                name: "TypeScript",
                usage: 2
            },
            {
                name: "AJAX",
                usage: 2
            },
            {
                name: "Java Server Pages (JSP)",
                usage: 2
            },
            {
                name: "Vue.js",
                usage: 1
            }
        ]
    },
    {
        category: "Backend",
        skills: [
            {
                name: "PHP",
                usage: 3
            },
            {
                name: "CodeIgniter",
                usage: 3
            },
            {
                name: "Laravel",
                usage: 3
            },
            {
                name: "RESTful API",
                usage: 3
            },
            {
                name: "MySQL",
                usage: 3
            },
            {
                name: "Java Servlet",
                usage: 2
            }
        ]
    },
    {
        category: "Server",
        skills: [
            {
                name: "NGINX Web Server",
                usage: 3
            },
            {
                name: "Linux Server (Ubuntu)",
                usage: 3
            },
            {
                name: "FTP Software",
                usage: 3
            },
            {
                name: "FileZilla",
                usage: 3
            },
            {
                name: "SSH",
                usage: 3
            },
            {
                name: "Apache",
                usage: 2
            }
        ]
    },
    {
        category: "Tools",
        skills: [
            {
                name: "Postman API",
                usage: 3
            },
            {
                name: "Visual Studio Code",
                usage: 3
            },
            {
                name: "GitHub Copilot",
                usage: 3
            },
            {
                name: "Git Version Control",
                usage: 3
            },
            {
                name: "Google Analytics",
                usage: 1
            }
        ]
    },
    {
        category: "Software Development Fundamentals",
        skills: [
            {
                name: "User Requirement Analysis",
                usage: 3
            },
            {
                name: "Effective Database Design",
                usage: 3
            },
            {
                name: "API Development & Integration",
                usage: 3
            },
            {
                name: "Web Hosting",
                usage: 3
            },
            {
                name: "Software Development Life Cycle (SDLC)",
                usage: 2
            },
            {
                name: "Agile Methodologies",
                usage: 1
            },
            {
                name: "Search Engine Optimization (SEO)",
                usage: 1
            }
        ]
    },
    {
        category: "Programming Languages",
        skills: [
            {
                name: "Java",
                usage: 2
            },
            {
                name: "Bash Scripting",
                usage: 2
            },
            {
                name: "Python",
                usage: 1
            },
            {
                name: "C++",
                usage: 1
            }
        ]
    },
    {
        category: "Payment Gateway",
        skills: [
            {
                name: "iPay88",
                usage: 2
            },
            {
                name: "Stripe",
                usage: 1
            }
        ]
    },
    {
        category: "Others",
        skills: [
            {
                name: "Chrome Extensions",
                usage: 2
            },
            {
                name: "Telegram Bots",
                usage: 2
            },
            {
                name: "Prompt Engineering",
                usage: 2
            },
            {
                name: "Google Cloud Platform (GCP)",
                usage: 1
            }
        ]
    }
];

const projectsShowcase = [
    {
        title: "Nomoresurf",
        description: "Productivity Website Blocker",
        image: "./public/images/nomoresurf_thumbnail.png",
        link: "https://nomoresurf.com/",
        priority: 1
    },
    {
        title: "Skillsorder",
        description: "Skills Based Recruitment Platform",
        image: "./public/images/skillsorder_thumbnail.png",
        link: "https://skillsorder.com/",
        priority: 1
    },
    {
        title: "Atmaya",
        description: "GPT-3 Powered Telegram Chatbot",
        image: "./public/images/atmaya_thumbnail.png",
        link: "https://t.me/AtmayaBot",
        priority: 1
    },
    {
        title: "Tinyus",
        description: "URL Shortener Service App",
        image: "./public/images/tinyus_thumbnail.png",
        link: "https://tinyus.zulkiflizin.com/",
        priority: 1
    },
    {
        title: "Feedat",
        description: "Secret Message Sharing App",
        image: "./public/images/feedat_thumbnail.png",
        link: "https://feedat.zulkiflizin.com/",
        priority: 1
    },
    {
        title: "Atmatag",
        description: "Get Lost Items Back To You",
        image: "./public/images/atmatag_thumbnail.png",
        link: "https://atmatag.zulkiflizin.com/",
        priority: 1
    },
    {
        title: "CoverLetterHQ",
        description: "AI Powered Cover Letter Generator",
        image: "./public/images/coverletterhq_thumbnail.png",
        link: "https://github.com/adamity/coverletterhq",
        priority: 2
    },
    {
        title: "Noted",
        description: "Multithreaded Text Editor",
        image: "./public/images/noted_thumbnail.png",
        link: "https://github.com/adamity/noted",
        priority: 2
    }
];

const highlightProjectContainer = document.querySelector('#js-highlight-project');
const otherProjectContainer = document.querySelector('#js-other-project');

const skillSetContainer = document.querySelector('#js-skill-set');
const btnSocial = document.querySelectorAll('.js-btn-social');

let tempProjectHTML = "";
let tempSkillSetHTML = "";

projectsShowcase.forEach(project => {
    tempProjectHTML = `<div class="col-12 col-lg-6 mb-4">
        <a href="${project.link}" target="_blank" class="btn btn-light border rounded-9 shadow w-100 text-unset">
            <img src="${project.image}" class="img-fluid img-work border rounded-9" alt="${project.title}">
            <div class="my-3">
                <p class="fs-6 m-0">${project.title}</p>
                <p class="fs-6 lead m-0">${project.description}</p>
            </div>
        </a>
    </div>`;

    if (project.priority === 1) {
        highlightProjectContainer.innerHTML += tempProjectHTML;
    } else if (project.priority === 2) {
        otherProjectContainer.innerHTML += tempProjectHTML;
    }
});

categorizedSkillSet.forEach((category, index) => {
    tempSkillSetHTML += `<p class="text-dark w-100 mb-0 ${index !== 0 ? 'mt-3' : ''}">${category.category}</p>`;
    category.skills.forEach(skill => {
        let badgeOpacity = "";
        switch (skill.usage) {
            case 1:
                badgeOpacity = "bg-opacity-10";
                break;
            case 2:
                badgeOpacity = "bg-opacity-50";
                break;
            case 3:
                badgeOpacity = "bg-opacity-100";
                break;
        }
        tempSkillSetHTML += `<p class="text-dark small border border-2 border-dark rounded-pill px-4 me-2 mb-2 bg-info ${badgeOpacity}">${skill.name}</p>`;
    });
});
skillSetContainer.innerHTML += tempSkillSetHTML;

btnSocial.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});