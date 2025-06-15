/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jayesh Bankoti • Senior Staff NLP Engineer",
  description:
    "Senior Staff NLP Engineer turning research into production-grade narrative intelligence. 7+ years in ML & NLP at Brane Enterprises and Logically AI.",
  og: {
    title: "Jayesh Bankoti Portfolio",
    type: "website",
    url: "http://jayeshbankoti.com/",
  },
};

//Home Page
const greeting = {
  title: "Jayesh Bankoti",
  logo_name: "JayeshBankoti",
  subTitle:
    "Research and Deploying production-grade systems for 7+ years in ML & NLP. End-to-End Product Delivery and Team Management.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1fju63kZyvaiAN9LQAxANyNPNYXSC8EiI",
  portfolio_repository: "https://github.com/jayeshbankoti007/masterPortfolio",
  githubProfile: "https://github.com/jayeshbankoti007",
};


const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jayeshbankoti/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:jayeshbankoti@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: 'NLP & Machine Learning',
      fileName: 'DataScienceImg',
      skills: [
          "⚡ Built end-to-end NLP pipelines: NER, lang detect, sentiment, and geo-tagging over social media data.",
          "⚡ Uncovered harmful narratives via multilingual embeddings + UMAP + HDBSCAN, optimized with Optuna.",
          "⚡ Detected CIB using a custom framework blending NLP, temporal signals, and graph patterns.",
          "⚡ BiLSTM-CNN with self-attention for skill classification across 150+ institutes.",
      ],
      softwareSkills: [
        { skillName: 'PyTorch', fontAwesomeClassname: 'logos-pytorch' },
        { skillName: 'TensorFlow', fontAwesomeClassname: 'logos-tensorflow' },
        { skillName: 'scikit-learn', fontAwesomeClassname: 'simple-icons:scikitlearn' },
        { skillName: 'Transformers', fontAwesomeClassname: 'simple-icons:huggingface' },
        { skillName: 'Optuna', fontAwesomeClassname: 'simple-icons:optuna' },
        { skillName: 'cuML', fontAwesomeClassname: 'simple-icons:rapidsai' },
      ],
    },
    {
      title: '🚀 Deployment & Optimization',
      fileName: 'MLEImg',
      skills: [
            "⚡ Slashed inference latency by 45% with ONNX + TensorRT quantization.",
            "⚡ Built real-time gRPC + FastAPI services for production ML serving.",
            "⚡ Engineered job queues with MongoDB, cutting infra costs by 82%.",
            "⚡ Enabled CI/CD via Databricks Asset Bundles + service principals.",
            "⚡ Used Redis + Celery for async, scalable task execution.",
      ],
      softwareSkills: [
        { skillName: 'ONNX', fontAwesomeClassname: 'simple-icons:onnx' },
        { skillName: 'TensorRT', fontAwesomeClassname: 'simple-icons:nvidia' },
        { skillName: 'Docker', fontAwesomeClassname: 'simple-icons:docker' },
        { skillName: 'MLflow', fontAwesomeClassname: 'simple-icons:mlflow' },
        { skillName: 'Redis', fontAwesomeClassname: 'simple-icons:redis' },
      ],
    },
    {
      title: '🤖 Generative AI & Agents',
      fileName: 'GenerativeAIImg',
      skills: [
        "⚡ Built agentic bots using SmolAgents + LangChain + Mosaic AI with RAG and tool integration.",
        "⚡ Automated narrative insights using SQL agents and function-calling pipelines.",
        "⚡ Personalised GenAI workflows with vector DBs and user context.",
        "⚡ Designed LLM stacks that power dashboards, workflows, and CIB analysis.",
        "⚡ Hands-on with LangChain, Hugging Face agents, and custom prompt orchestration.",
      ],
      softwareSkills: [
        { skillName: 'LangChain', fontAwesomeClassname: 'simple-icons:langchain' },
        { skillName: 'RAG', fontAwesomeClassname: 'fas fa-database' },
        { skillName: 'Prompt Eng.', fontAwesomeClassname: 'fas fa-lightbulb' },
        { skillName: 'SmolAgents', fontAwesomeClassname: 'simple-icons:openai' },
      ],
    },
    {
      title: '🧱 Infra & AI Ops',
      fileName: 'InfrastructureImg',
      skills: [
          "⚡ Led Databricks infra migration—aligning DS, ML, and engineering.",
          "⚡ Designed hybrid backend: PostgreSQL (narratives), MongoDB (jobs), Elasticsearch (search).",
          "⚡ Built persistent queues for long tasks—no more idle cluster restarts.",
          "⚡ Streamlined infra with Redis, MLflow, gRPC, and Dockerized services.",
          "⚡ Shipped ML systems that are production-hardened, not just prototyped.",
      ],
      softwareSkills: [
        { skillName: 'Databricks', fontAwesomeClassname: 'simple-icons:databricks' },
        { skillName: 'PostgreSQL', fontAwesomeClassname: 'simple-icons:postgresql' },
        { skillName: 'Elasticsearch', fontAwesomeClassname: 'simple-icons:elasticsearch' },
        { skillName: 'FastAPI', fontAwesomeClassname: 'simple-icons:fastapi' },
        { skillName: 'gRPC', fontAwesomeClassname: 'simple-icons:grpc' },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology, Delhi",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "iitdelhi.png",
      alt_name: "IITD",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Though my degree major was mechanical, I was always excited and interested in code and doing mental work (1st in chess in clg).",
        "⚡ I was always in interested in coding and did multiple projects with mathematical modelling in MATLAB and Ansys.",
        "⚡ During my college days, I took mutiple CS courses in DS and DSA scoring average 8.5 GPA.",
      ],
      website_link: "https://home.iitd.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",      
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/2UEVP437LNQE",
      alt_name: "deeplearning_ai_logo.ai",
      color_code: "#8C151599",
    },
    {
      title: "LangChain for LLM Application Development",      
      logo_path: "langchain_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "deeplearning.ai",
      color_code: "#4285F499",
    },
    {
      title: "Natural Language Processing in TensorFlow",      
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3PZCXXBTQFYU",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
        {
      title: "Building Your Own Database Agent",      
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/adb0e025-3833-48c3-834a-1489590f0cd8?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "Functions, Tools and Agents with LangChain",      
      logo_path: "langchain_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/e9ac8499-72e5-4a0a-a971-86b6c7f6a6e5?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "Building Code Agents", 
      logo_path: "huggingface_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/f598292b-0336-4cb3-a428-0c4a7a3954c3?usp=sharing",
      alt_name: "huggingface",
      color_code: "#00000099",
    },
    {
      title: "TensorFlow for AI, ML, and DL",      
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/L943H869NTTM",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fine Tune BERT for Text Classification with TensorFlow",      
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RZ9XJL82B35N",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Hyperparameter Tuning, Regularization and Optimization",      
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/SNE5D9DFSUHM",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Convolutional Neural Networks",      
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AKHMMV2HUX2T",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

  ]
};





// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "AI Engineering Leader with 7+ years of experience designing and scaling advanced AI/ML systems. Proven expertise in leading cross-functional teams, delivering impactful NLP capabilities, and architecting ML infrastructure for production. Played a pivotal role in driving $24M Series A funding through strategic AI innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "LOGICALLY AI",
      work: true,
      experiences: [
        {
          title: 'Senior Staff Engineer - AI Platform',
          // company: 'Logically AI',
          company_url: 'https://logically.ai',
          logo_path: 'logically.png',
          duration: 'Sep 2023 - Present',
          location: 'Remote',
          description: [
            "Promoted to Senior Staff to lead an 11-member AI division, collaborating with product and reporting to the CEO  ",
            "Boosted platform engagement by 120% by revamping narrative analysis pipeline using UMAP + HDBSCAN optimized via Optuna and LangChain function tools.  ",
            "Productionized narrative pipeline with CI/CD using Databricks Asset Bundles and service principals.  ",
            "Reduced infrastructure costs by 82% via custom MongoDB job queue persisting cluster state, preventing ephemeral cluster restarts.  ",
            "Designed hybrid data infrastructure: PostgreSQL for structured narratives, Elasticsearch for UI dashboards, MongoDB for job queue and user data.  ",
            "Developed CIB detection framework integrating NLP techniques with temporal and network analysis.  ",
            "Architected & deployed agentic chatbot on Databricks with SmolAgents and Mosaic AI, enabling RAG and autonomous narrative queries."
          ],
          color: '#ffcc00',
      },
      {
        title: 'Staff NLP Engineer',
        // company: 'Logically AI',
        company_url: 'https://logically.ai',
        logo_path: 'logically.png',
        duration: 'Dec 2021 - Sep 2023',
        location: 'Bengaluru, India',
        description: [
          "Led Media Intelligence division; hired and managed a team of 3 NLP engineers",
          "Built annotation system with language detection, NER, entity-based sentiment, and geolocation mapping, powering visual analytics. ",
          "Quantized model deployments with ONNX & TensorRT, reducing inference latency by 45% ",
          "Developed social media narrative detection system central to securing $24M Series A funding."
        ],
        color: '#f06529',
      }
      ],
    },
    {
      title: "BRANE ENTERPRISES",
      experiences: [
              {
        title: 'NLP Team Lead',
        // company: 'Brane Enterprises',
        company_url: 'https://braneenterprises.com',
        logo_path: 'brane.png',
        duration: 'Nov 2020 - Dec 2021',
        location: 'Hyderabad, India',
        description:
          ["Supervising a team of 12 people, Handled key stakeholders meetings and worked collaboratively across different modules leaders for proper deployment and functioning.",
            "FAQ based Question Answering system: - Build QA system employing an ensemble of BM25 and RoBERTa-base model fine-tuned model on squad 2.0. Improving the system to an acceptable accuracy of 80%.",
            "Utilized Doccano to build a high-agreement NER dataset (Cohen's κ ≈ 0.7), and fine-tuned a custom BERT-base-cased model with a CRF decoding layer. Employed mixed-precision training to optimize GPU memory and inference efficiency.",
          ],            
          color: '#0b72b9',
      },
        {
          title: "Machine Learning Engineer",
          // company: "Intel Indexer LLC",
          company_url:
            "https://braneenterprises.com",
          logo_path: "brane.png",
          duration: "Nov 2018 - Dec 2018",
          location: "Remote",
          description: [
            "Fine-tuned RoBERTa-base Masked LM Model combining merging broken texts into fluent sentence.",
            "Employed Django web-framework for API and TF serving for model inference with gRPC requests",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "VMOCK",
      experiences: [
      {
        title: 'Data Scientist',
        // company: 'Brane Enterprises',
        company_url: 'https://braneenterprises.com',
        logo_path: 'vmock.png',
        duration: 'July 2018 - Oct 2020',
        location: 'Hyderabad, India',
        description:[
          "Classification Model over set 163 functions for a subsection of a resume. Deployed ensemble classifier of Bi-LSTM-CNN model with self-attention, achieving f1 score of 90 %",
          "Evaluated a resume score wrt to a Job Description based on skill requirement. Built Knowledge graph over skill ontology database from resume and JD for over 2000+ skill set. Used Dijkstra's algorithm of scoring prioritised skills present in JD against the skills present in the resume.",
          "Built CNN classifier model employing n-grams pooling with 82% and 91% micro-average respectively.",
          "Created Personalised Job Search - Built algorithm with 90% accuracy to detect relevancy of jobs for a community using employment report. Created a basic Recommendation engine based on a user's activity on platform using collaborative filtering.",
          "Deployed queue task based system using the redis server with celery for parallel processing of asynchronous calls."
          ],
          color: '#0b72b9',
      }
      ],
    },
    {
      title: "BOSTON SCIENTIFIC",
      experiences: [
      {
        title: 'Engineering Intern',
        // company: 'Brane Enterprises',
        company_url: 'https://braneenterprises.com',
        logo_path: 'vmock.png',
        duration: 'May 2017 - July 2017',
        location: 'Gurgaon, India',
        description:[
          "Analysed force losses along any endoscopy device, pioneered Linear Regression model to replicate mathematical model for force transmission with remarkable 85% accuracy", 
          "Further simulated model in Matlab with interactive GUI, Found major factor responsible for lower force transmission leading to 35% increment in the same."          
        ],
          color: '#0b72b9',
      }
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self_image.png",
    description:
      "You can message me, I will revert back within 24 hours. I can assist you with ML, GEN AI, DL and Infrastructure Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.JayeshBankoti.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kshitij Apartment, Jagriti Nagar, Fafadih, Raipur, Chhattisgarh",
    locality: "Jagriti Nagar",
    country: "India",
    region: "Chhattisgarh",
    postalCode: "492004",
    streetAddress: "Fafadih",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8F9SNM5sFwBrsMVG7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
