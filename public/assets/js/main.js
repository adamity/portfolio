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

projectsShowcase.forEach(project => {
    let tempHTML = `<div class="col-12 col-lg-6 mb-4">
        <a href="${project.link}" target="_blank" class="btn btn-light border rounded-9 shadow w-100 text-unset">
            <img src="${project.image}" class="img-fluid img-work border rounded-9" alt="${project.title}">
            <div class="my-3">
                <p class="fs-6 m-0">${project.title}</p>
                <p class="fs-6 lead m-0">${project.description}</p>
            </div>
        </a>
    </div>`;

    if (project.priority === 1) {
        highlightProjectContainer.innerHTML += tempHTML;
    } else if (project.priority === 2) {
        otherProjectContainer.innerHTML += tempHTML;
    }
});

skillSet.forEach(skill => {
    skillSetContainer.innerHTML += `<p class="text-dark small border border-2 border-dark rounded-pill px-4 me-2 mb-2">${skill}</p>`;
});

btnSocial.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});