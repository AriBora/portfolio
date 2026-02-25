export const Profile = {
    name: 'Arindom Bora',
    title: 'Graduate Analyst at Deutsche Bank',
    email: 'arindombora10@gmail.com',
    location: 'Pune, Maharashtra, India',
    bio:
        "A software engineer who loves puzzles and rarely backs down from challenges. I enjoy discussing ML solutions and system architectures."
    ,
    skills: [
        'Python',
        'Machine Learning',
        'NLP',
        'React',
        'TypeScript',
        'GCP',
        'System Design',
    ],
    avatarUrl: 'https://lh3.googleusercontent.com/d/1HYbSNY2QhSMPqElQwnrRyK51xu22GOq8',
    linkedIn: 'https://www.linkedin.com/in/arindom-bora-1839a1244/',
    github: 'https://github.com/AriBora',
    kaggle: 'https://www.kaggle.com/arindombora10',
    resumeUrl: 'https://drive.google.com/uc?export=download&id=1NMTOepYICpCNT1k-k1mEfZldU5ipeNLt',
};

export const educationData = [
    {
        title: 'B.Tech in Mechanical Engineering',
        subtitle: 'Indian Institute of Technology Kanpur',
        date: 'Nov 2021 - Jul 2025',
        grade: 'CGPA: 9.0/10',
        description:
            [
                "Represented the institute at the Inter IIT Tech Meet 12.0 (2024), leading a team of 8 to build an AI agent from scratch.",
                "Worked on a research project where I applied neural networks to a core mechanical engineering problem.",
                "Secured 3rd place in a GenAI Hackathon organized by Google Developer Student Club in collaboration with Monotype.",
                "Mentored freshers and sophomores in summer projects through the Programming Club and Stamatics Society."
            ],
        tags: ['Python', 'Machine Learning', 'NLP', 'Deep Learning', 'Research'],
    },
    {
        title: 'Higher Secondary Education',
        subtitle: 'Pragya Academy Sr. Secondary School, Jorhat',
        date: 'Jun 2019 - May 2021',
        grade: 'Percentage: 94.8%',
        description: [],
        tags: [],
    },
    {
        title: 'High School Education',
        subtitle: 'Don Bosco High School Lichubari, Jorhat',
        date: 'Jan 2009 - Apr 2019',
        grade: 'Percentage: 91.3%',
        description: [],
        tags: [],
    }
];

export const experienceData = [
    {
        title: 'Graduate Analyst',
        subtitle: 'Deutsche Bank',
        date: 'Jul 2025 - Present',
        description:
            [
                "Platform Engineer managing enterprise BI tools (Looker, Tableau, SAP BO) used by 30k+ global users across 400+ teams",
                "Implemented automation solutions for Looker admin workflows, reducing turnaround time by 90%.",
                "Automated cross-environment report migrations in SAP BI Platform using Java SDKs & Ansible",
                "Solved a critical connectivity issue of Tableau with CloudSQL by designing a custom proxy solution.",
                "Architected end-to-end CI/CD pipelines in TeamCity, for rapid, fail-safe deployment of automation solutions"
            ],
        tags: ['Python', 'React', 'TypeScript', 'Java', 'Looker', 'GCP', 'Terraform', 'Ansible'],
    },
    {
        title: 'Deep Learning Intern',
        subtitle: 'Smarttrak AI',
        date: 'May 2024 - Jul 2024',
        description:
            [
                "Developed time-series forecasting models to predict Solar energy generation 72 hours in advance.",
                "Integrated exogenous variables like weather data and historical patterns to improve model accuracy.",
                "Benchmarked architectures like TimesNet, Transformer & LSTM in capturing seasonal & diurnal patterns.",
                "Developed REST APIs to serve model inferences across a distributed network of solar plants.",
            ],
        tags: ['Python', 'Tensorflow', 'Deep Learning', 'Time-series Analysis'],
    },
    {
        title: 'Student Research Associate',
        subtitle: 'IIT Kanpur',
        date: 'Jan 2024 - Apr 2024',
        description:
            [
                "Researched on applying Physics-informed Neural Networks (PINNs) to model gas hydrate reservoirs.",
                "Analyzed clusters of gas hydrate reservoirs based on their gas recovery and land subsidence data.",
                "Conducted literature review of 3D porous media equations and adapted them to 2D for PINN implementation."
            ],
        tags: ['Python', 'Pytorch', 'Deep Learning', 'Physics-informed Neural Networks'],
    },
];

export const projectsData = [
    {
        title: 'AI Agent-007',
        date: 'Nov 2023 - Dec 2023',
        description:
            [
                "Inter IIT Tech Meet 12.0 Problem Statement by Devrev Inc.",
                "Developed a dynamic tool-orchestration system for LLMs, enabling autonomous identification of tools based on user query",
                "Implemented query parsing via Stanza, improving tool retrieval accuracy of FAISS vector search",
                "Improved model accuracy from 30% to 75% by fine-tuning LLaMA2 using PEFT & QLoRA techniques"
            ],
        tags: ['Python', 'GPT-4 API', 'LLaMA2', 'PEFT', 'QLoRA', 'FAISS', 'Stanza'],
        link: "https://drive.google.com/file/d/1amaDga797bQOsOt8UMzTtMWjFDDcJTQm/view",
    },
    {
        title: 'Image Restoration',
        date: 'Mar 2024 - Apr 2024',
        description:
            [
                "Developed a system to restore clear human face images from noisy inputs using generative models.",
                "Trained VAE & GAN models on a curated dataset of 8000 paired images for image reconstruction.",
                "Improved image quality, increased SSIM from 0.754 to 0.844 & reduced NRMSE from 0.405 to 0.161."
            ],
        tags: ['Python', 'VAE', 'GAN', 'Deep Learning'],
        link: "https://github.com/AriBora/Image-Restoration",
    },
    {
        title: 'Summary Generator',
        date: 'Jun 2023',
        description:
            [
                "Developed a summarization system utilizing Longformer Encoder Decoder model to process long-context documents",
                "Implemented an RAG pipeline using BERT embeddings & HNSW indexing for low-latency Q&A over generated summaries",
                "Designed a web interface using Flask, JavaScript, & HTML/CSS for end-to-end document processing & analytical querying"
            ],
        tags: ['Python', 'Flask', 'BERT', 'HNSW', 'Longformer'],
        link: "https://github.com/Attention-is-All-We-Need/Document-Summary-Generator",
    }
];

export const achievementsData = [
    {
        title: 'OPJEMS Scholarship 2024',
        issuer: 'O.P. Jindal Group of Companies',
        description:
            'Selected as one of the top 100 students nationwide across 43 premier institutes. Received a scholarship of ₹80,000 for academic excellence and leadership potential.',
        link: 'https://drive.google.com/file/d/12x2Xoz98q9DKmoNWUVAL3OJ3LKqL-pNb/view',
    },
    {
        title: 'Academic Excellence Award 2023-24',
        issuer: 'IIT Kanpur',
        description:
            'Ranking in the top 10% of the Mechanical Engineering department at IIT Kanpur in the academic year 2023-24.',
        link: 'https://drive.google.com/file/d/1SftbqxBN1CS2QGT6UzrTbSfNFv17Fnna/view',
    },
    {
        title: 'State Rank 1 and Certificate of Merit, IOQA 2020-21',
        issuer: 'Indian Association of Physics Teachers (IAPT)',
        description:
            'Ranked first from Assam and among the top 253 nationwide in the Indian Olympiad Qualifier in Astronomy (IOQA) 2020-21.',
        link: 'https://drive.google.com/file/d/1Uq9wfbFDmipCauK8nNasXL_S-IfWgj4q/view',
    },
    {
        title: 'Certificate of Merit, IOQM 2020-21',
        issuer: "Mathematics Teachers' Association (MTA)",
        description:
            'Ranked among the top 60 candidates from the Assam and Arunachal Pradesh region in the Indian Olympiad Qualifier in Mathematics (IOQM) 2020-21.',
        link: 'https://drive.google.com/file/d/1KCFEg-AScVCrUTg32iFTCmeBPC2ItqNh/view',
    },
];