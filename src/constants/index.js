export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'National Portal Of India',
        desc: 'National Portal of India provides a single-window access to information and services that are electronically delivered from all Government Departments.',
        subdesc:
            'The National Portal of India, developed using Next.js, TypeScript, Tailwind CSS, and Framer Motion, is designed to deliver a seamless and modern user experience. This platform provides a single-window access to a comprehensive array of government information and services, emphasizing accessibility, performance, and user-centric design.',
        href: 'https://v2.india.gov.in/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/npi_logo.webp',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },

    {
        title: 'National Portal Of India',
        desc: 'National Portal of India provides a single-window access to information and services that are electronically delivered from all Government Departments.',
        subdesc:
            'The National Portal of India, developed using Next.js, TypeScript, Tailwind CSS, and Framer Motion, is designed to deliver a seamless and modern user experience. This platform provides a single-window access to a comprehensive array of government information and services, emphasizing accessibility, performance, and user-centric design.',
        href: 'https://v2.india.gov.in/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/npi_logo.webp',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'National Portal Of India',
        desc: 'National Portal of India provides a single-window access to information and services that are electronically delivered from all Government Departments.',
        subdesc:
            'The National Portal of India, developed using Next.js, TypeScript, Tailwind CSS, and Framer Motion, is designed to deliver a seamless and modern user experience. This platform provides a single-window access to a comprehensive array of government information and services, emphasizing accessibility, performance, and user-centric design.',
        href: 'https://v2.india.gov.in/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/npi_logo.webp',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    // {
    //     id: 1,
    //     name: 'Framer',
    //     pos: 'Lead Web Developer',
    //     duration: '2022 - Present',
    //     title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    //     icon: '/assets/framer.svg',
    //     animation: 'victory',
    // },
    {
        id: 2,
        name: 'Keen & Able Computers PVT. LTD.',
        pos: 'Software Engineer',
        duration: '2023  - Present',
        title: "As a Software Engineer at Keen Able, I had the opportunity to work in a dynamic and collaborative environment where innovation and problem-solving were at the forefront. My role involved designing, developing, and deploying robust software solutions tailored to meet client needs.",
        icon: '/assets/Logo_KNA.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Relevel',
        pos: 'Trainee',
        duration: '2022 - 2023',
        title: "I learned backend development in Node.js with Express through Relevel by mastering JavaScript fundamentals, building RESTful APIs, and working on real-world projects. The Training covered server setup, middleware, authentication, and database integration, helping me create scalable applications efficiently.",
        icon: '/assets/relevel.jpg',
        animation: 'salute',
    },
];