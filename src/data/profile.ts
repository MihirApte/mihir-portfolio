// ============================================================
//  ALL SITE CONTENT LIVES HERE. Edit this file to change the website.
// ============================================================

export const profile = {
  name: "Mihir Apte",
  firstName: "Mihir",
  location: "Dublin, Ireland",
  email: "mihirapte24@gmail.com",
  // Opens a Gmail compose window addressed to Mihir.
  emailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=mihirapte24@gmail.com&su=Hello%20Mihir",
  linkedin: "https://linkedin.com/in/mihir-apte",
  instagram: "https://www.instagram.com/mihir.apte/",
  github: "https://github.com/MihirApte",
  cv: "/Mihir-Apte-CV.pdf",
  // Hero photo. Change the path to swap it.
  photo: "/gallery/green-wall.jpg" as string | null,
  // Intro video. Put the file in /public (for example public/intro.mp4) and set
  // video: "/intro.mp4". A "Watch intro" button then appears in the hero.
  video: "/intro.mp4" as string | null,
  roles: ["Data Scientist", "AI / ML Engineer", "NLP and Generative AI", "Data and BI"],
  tagline:
    "I turn messy data into things people can actually use, from NLP tools to physics-informed neural networks.",
  summary:
    "MSc Computer Science (Data Science) graduate from Trinity College Dublin. I have independently scoped, built and shipped five end-to-end AI/ML projects, each with a working demo, dashboard or deployed app so the results are usable by someone else, not just a notebook. I like formulating a problem from scratch, building a proper evaluation, and being honest about where a metric is hiding something important.",
};

// target: where the card takes the visitor when clicked.
export type StatTarget = "projects" | "work" | "education";
export const stats: { value: string; label: string; target: StatTarget }[] = [
  { value: "5", label: "end-to-end AI/ML projects shipped", target: "projects" },
  { value: "3", label: "internships (data engineering, data science, software)", target: "work" },
  { value: "9.02", label: "CGPA in BE Information Technology (First Class Honours)", target: "education" },
  { value: "2", label: "apps live on HuggingFace Spaces", target: "projects" },
];

// Photos used for the small prints in the About section.
export const gallery: { src: string; alt: string }[] = [
  { src: "/gallery/night-balcony.jpg", alt: "Mihir in a dark suit adjusting his cuff on a balcony at night" },
  { src: "/gallery/green-shirt-park.jpg", alt: "Mihir smiling in a green shirt on a sports field with trees behind" },
  { src: "/gallery/green-wall.jpg", alt: "Mihir in a blue shirt holding a hand-decorated card with his name, in front of a wall of plants" },
  { src: "/gallery/black-shirt-home.jpg", alt: "Mihir smiling in a black shirt and white trousers" },
  { src: "/gallery/selfie.jpg", alt: "Close-up selfie of Mihir in a black polo" },
];

// ============================================================
//  BEYOND THE RESUME: swipeable cards. Each card has a photo.
//  To swap a photo, change its "photo" path.
// ============================================================
export const personal: { title: string; text: string; photo: string; alt: string }[] = [
  {
    title: "Football",
    text: "I love playing football, and I can talk about the game for hours. It is the one subject where I never run out of things to say.",
    photo: "/gallery/green-shirt-park.jpg",
    alt: "Mihir smiling in a green shirt on a sports field",
  },
  {
    title: "Learning Spanish",
    text: "My newest hobby is learning Spanish. I am enjoying it, and I am taking it poco a poco.",
    photo: "/gallery/selfie.jpg",
    alt: "Close-up selfie of Mihir in a black polo",
  },
  {
    title: "Fitness",
    text: "I value physical fitness a great deal. I am into yoga and workouts, and they keep me focused, energised and consistent.",
    photo: "/gallery/green-wall.jpg",
    alt: "Mihir in a blue shirt holding a hand-decorated card with his name",
  },
  {
    title: "At work",
    text: "Colleagues from my previous roles describe me as polite and kind, and I take professionalism seriously. My more relaxed side tends to show once I know the team.",
    photo: "/gallery/night-balcony.jpg",
    alt: "Mihir in a dark suit adjusting his cuff on a balcony at night",
  },
  {
    title: "Cooking",
    text: "I enjoy cooking a proper meal, and a good film afterwards is my favourite way to unwind before a new week of problem solving.",
    photo: "/gallery/black-shirt-home.jpg",
    alt: "Mihir smiling in a black shirt and white trousers",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  year: string;
  accent: string; // hex colour used for the glow and highlights
  summary: string;
  problem: string;
  highlights: { title: string; text: string }[];
  // Optional second phase of the project, shown below the first.
  phase2?: { title: string; highlights: { title: string; text: string }[] };
  metrics: { value: string; label: string }[];
  tools: string[];
  // demo: live app (embedded on the page). preview: walkthrough page. repo: GitHub.
  links: { demo?: string; preview?: string; repo?: string };
  repoPrivate?: boolean;
  notice?: string;
  // Screenshots shown on the project page, for example { src: "/projects/mortgage-1.png", alt: "..." }.
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "improving-rave",
    title: "Improving RAVE Video Editing",
    subtitle: "MSc dissertation · Trinity College Dublin",
    status: "Completed",
    year: "2025 to 2026",
    accent: "#a78bfa",
    summary:
      "Made a published CVPR 2024 zero-shot video-editing model more temporally consistent by replacing its random frame shuffling with smarter frame grouping.",
    problem:
      "RAVE edits videos with diffusion models, but it groups frames randomly, which can cause flicker between frames. I wanted to test whether grouping frames by how similar they actually are would help, and to prove it with numbers.",
    highlights: [
      {
        title: "Two new frame-grouping algorithms",
        text: "Implemented CLIP ViT-B/32 similarity grouping and K-means clustering in PyTorch to replace random shuffling, benchmarked on 21 test videos against 4 competing methods using Warp Error and CLIP Score.",
      },
      {
        title: "Reproducible evaluation pipeline",
        text: "Built a quantitative pipeline whose results held up under richer structural conditioning (Multi-ControlNet with ZoeDepth, Canny edge and FreeU), including DDIM caching and GPU-compatibility fixes across Google Colab and Kaggle.",
      },
      {
        title: "Which signal actually mattered?",
        text: "Ran a controlled ablation across ZoeDepth, Canny and FreeU, alone and combined, varying one conditioning signal at a time with the grouping method held fixed.",
      },
    ],
    metrics: [
      { value: "21", label: "test videos" },
      { value: "4", label: "competing methods" },
      { value: "2", label: "new algorithms" },
    ],
    tools: ["PyTorch", "HuggingFace Diffusers", "CLIP ViT-B/32", "ControlNet", "Stable Diffusion 1.5", "K-means", "OpenCV", "Python", "Git"],
    links: { repo: "https://github.com/MihirApte/dissertation-mihir" },
  },
  {
    slug: "comment-lab",
    title: "Comment Lab",
    subtitle: "AI content assistant for creators",
    status: "Phase 1 (YouTube) shipped · Phase 2 (Instagram) in progress",
    year: "Ongoing",
    accent: "#22d3ee",
    summary:
      "Turns a creator's YouTube comments into topics, sentiment and evidence-backed content ideas, shipped as a one-click Windows installer.",
    problem:
      "Creators receive far more comments than they can read. Comment Lab ingests them, finds what the audience actually talks about, detects content requests, cross-references live YouTube trends, and presents it all in a dashboard that non-technical people can use.",
    highlights: [
      {
        title: "Zero-setup for non-technical testers",
        text: "Packaged the full pipeline as a one-click Windows installer (PyInstaller and Inno Setup) that silently provisions a local LLM runtime on first run.",
      },
      {
        title: "Four-tab interactive dashboard",
        text: "Topics, Trending Matches, Content Requests and Content Ideas, served by a FastAPI-backed visualisation layer on top of the NLP pipeline (BERTopic, UMAP, HDBSCAN and multilingual XLM-RoBERTa sentiment).",
      },
      {
        title: "Evidence-backed ideas",
        text: "Every suggestion cites the real comment volume and sentiment behind it, using a two-stage request detector (regex heuristic plus local LLM confirmation) and live YouTube trending data.",
      },
      {
        title: "Privacy by design",
        text: "Fully isolated, namespaced storage per creator and per tester with zero cross-contamination, including frozen-app-aware path resolution.",
      },
      {
        title: "Deliberate scope, planned Phase 2",
        text: "Chose CSV storage and a single static dashboard to ship a right-sized Phase 1, and researched Meta's Instagram Graph API and OAuth access tiers before writing any Phase 2 code.",
      },
    ],
    metrics: [
      { value: "4", label: "dashboard tabs" },
      { value: "1-click", label: "Windows install" },
      { value: "0", label: "cross-tenant data leaks" },
    ],
    tools: ["Python", "FastAPI", "BERTopic", "UMAP", "HDBSCAN", "XLM-RoBERTa", "scikit-learn", "Ollama (Qwen2.5)", "YouTube Data & Analytics APIs", "Google OAuth 2.0", "PyInstaller", "Inno Setup", "JavaScript/HTML/CSS"],
    links: { preview: "https://mihirapte.github.io/comment-lab-preview/" },
    repoPrivate: true,
    notice:
      "Preview notice: Comment Lab's source code is private while Phase 2 (Instagram) is in progress. The preview page walks through how the pipeline and architecture work, and it is not linked to a live app or a public repo yet.",
  },
  {
    slug: "cognitive-distortion-detector",
    title: "Cognitive Distortion Detector",
    subtitle: "Live app · HuggingFace Spaces",
    status: "Deployed",
    year: "Live app",
    accent: "#f472b6",
    summary:
      "Fine-tuned transformers that spot 10 cognitive distortions in free text, validated against a licensed psychologist's annotations. Phase 2 adds a hybrid LLM explanation layer with safety guardrails.",
    problem:
      "No public dataset existed, so I gathered requirements directly from a subject-matter expert and generated synthetic training data from scratch. In a sensitive domain, confident wrong answers are worse than uncertain ones.",
    highlights: [
      {
        title: "Built from expert requirements",
        text: "Fine-tuned DistilBERT and RoBERTa classifiers for 10 distortions, validated against a licensed psychologist's expert annotations.",
      },
      {
        title: "Reliability over raw accuracy",
        text: "Eliminated high-confidence errors on neutral text (RoBERTa once scored 0.981 confidence on a false positive) by choosing a properly calibrated threshold.",
      },
      {
        title: "Explainable predictions",
        text: "Added LIME so every prediction can be explained clearly to non-technical reviewers.",
      },
    ],
    phase2: {
      title: "hybrid classifier and LLM explanations",
      highlights: [
        {
          title: "Stronger fine-tuned classifier",
          text: "Fine-tuned MentalRoBERTa for 10-label multi-label classification of CBT cognitive distortions, using weighted BCE loss and 256-token inputs. Macro F1 rose from 0.17 to 0.27 against a DistilBERT baseline at the same threshold, and it won on 8 of 10 labels (506-row held-out test set).",
        },
        {
          title: "Benchmarked against LLMs",
          text: "Compared the fine-tuned models with zero-shot and few-shot LLM baselines (Groq API). The LLMs were strong on semantically distinctive labels, which motivated a hybrid design: a classifier for detection and an LLM for explanation.",
        },
        {
          title: "Explanations with a hallucination check",
          text: "Built a LIME and LLM explanation layer with a citation verifier that flags any explanation citing words LIME did not identify.",
        },
        {
          title: "Safety guardrails",
          text: "Added regex crisis routing to a fixed safe message, misuse and jailbreak detection, and 20 adversarial tests, all passing. Wrote a model card documenting limitations.",
        },
        {
          title: "Deployed end to end",
          text: "Shipped the app with FastAPI, Docker and Hugging Face Spaces, with calibration analysis (baseline ECE 0.077) and per-label error analysis.",
        },
      ],
    },
    metrics: [
      { value: "10", label: "distortion labels" },
      { value: "0.17 to 0.27", label: "macro F1 vs DistilBERT baseline" },
      { value: "20/20", label: "adversarial tests passing" },
    ],
    tools: ["Python", "PyTorch", "HuggingFace Transformers", "MentalRoBERTa", "DistilBERT", "LIME", "Groq API", "FastAPI", "Docker", "scikit-learn", "Streamlit", "HuggingFace Spaces", "Git"],
    links: {
      demo: "https://huggingface.co/spaces/mihir-apte/cognitive-distortion-detector",
      repo: "https://github.com/MihirApte/Cognitive-Distortion-Detector",
    },
  },
  {
    slug: "mortgage-mi-dashboard",
    title: "Mortgage Portfolio MI and Data Quality Dashboard",
    subtitle: "PostgreSQL, Python and Power BI · Central Bank of Ireland arrears data",
    status: "Completed",
    year: "Portfolio project",
    accent: "#38bdf8",
    summary:
      "An end to end pipeline and 3-page Power BI dashboard on real Central Bank of Ireland arrears data (19,199 rows), with 23 data quality rules, 102 reconciliation steps and a documented source-to-dashboard lineage.",
    problem:
      "I built the full path from a raw regulatory file to a dashboard people can trust. Real Central Bank of Ireland arrears data goes through SQL cleaning and 23 data quality rules into a star schema and a 3-page Power BI report. Every figure is traced to its source row and checked against an independent SQL answer key.",
    highlights: [
      {
        title: "Layered PostgreSQL pipeline",
        text: "Separated raw, clean and star schema layers with row-level lineage keys over 19,199 rows of mortgage arrears data. All 19,199 fact rows trace back to a source row, and 102 of 102 reconciliation steps match.",
      },
      {
        title: "23 data quality rules and a pipeline gate",
        text: "Wrote SQL checks and an independent Python control script. All 21 deliberately injected corruptions were caught in a rolled back self-test, and 11 issues were logged with severity and resolution.",
      },
      {
        title: "3-page Power BI dashboard",
        text: "Built a star schema model with 43 DAX measures covering 4 lender segments, with blank-not-zero handling and like-for-like quarter comparisons. 34 scripted comparisons against an independent SQL answer key all pass.",
      },
      {
        title: "Documented data defects",
        text: "Logged 11 defects, including malformed dates, a segment missing in 2026 Q1 and changing bucket schemes, each with its caveat. 6,005 cleaned rows are flagged as corrected, and a 23-table, 167-column data dictionary comes with a lineage diagram.",
      },
      {
        title: "What the data shows",
        text: "2025 Q4: 41,018 accounts in arrears, a 5.50% rate, with Non-Banks BTL ranked highest risk. Honest caveats are documented, such as an inferred date repair and a segment missing in 2026 Q1.",
      },
    ],
    metrics: [
      { value: "19,199", label: "source rows traced" },
      { value: "102/102", label: "reconciliation steps matched" },
      { value: "21/21", label: "injected corruptions caught" },
    ],
    tools: ["PostgreSQL", "SQL", "Python", "Power BI", "DAX", "Git"],
    links: { repo: "https://github.com/MihirApte/mortgage-mi" },
    // Add the three dashboard screenshots here once they are in /public/projects:
    // images: [{ src: "/projects/mortgage-1.png", alt: "Dashboard page 1" }],
    images: [],
  },
  {
    slug: "churn-simulator",
    title: "Customer Churn Business Simulator",
    subtitle: "Live app · HuggingFace Spaces",
    status: "Deployed",
    year: "Live app",
    accent: "#4ade80",
    summary:
      "An XGBoost churn model with a SHAP-powered what-if simulator, tuned to real business costs. Phase 2 adds a RAG retention advisor that turns the top churn drivers into guidance.",
    problem:
      "Accuracy is a trap on imbalanced churn data. I built the model around what a mistake actually costs: 12 months of lost revenue versus roughly a €50 false alarm, and let non-technical people interrogate its decisions.",
    highlights: [
      {
        title: "Threshold from costs, not default",
        text: "Moved the decision threshold away from the default 0.5 using a risk-adjusted cost function, with an automated end-to-end XGBoost optimisation pipeline.",
      },
      {
        title: "Interactive what-if simulator",
        text: "Streamlit app with real-time probability and SHAP explanation updates, so stakeholders can test scenarios themselves.",
      },
      {
        title: "Honest evaluation under imbalance",
        text: "Used SMOTE resampling and automated threshold-sensitivity testing across the full probability range, judged by AUC-ROC and precision-recall curves rather than accuracy alone.",
      },
    ],
    phase2: {
      title: "RAG retention advisor",
      highlights: [
        {
          title: "Hybrid retrieval, higher precision",
          text: "Increased retrieval precision from 84.0% to 97.5% (hand-labelled, 25 held-out customers, 95 customer-entry pairs) by building a RAG retention advisor in Python that gates a 19-entry playbook on customer metadata before ranking with sentence embeddings (all-MiniLM-L6-v2, NumPy cosine similarity).",
        },
        {
          title: "Guidance for the top SHAP drivers",
          text: "Raised the share of top SHAP churn drivers with matching guidance from 66.1% to 88.2% across 538 held-out customers, and cut returned entries that do not fit the customer from 12.0% to 0%, by searching each driver separately and enforcing applicability rules.",
        },
        {
          title: "LLM plans with verified citations",
          text: "40 of 40 LLM plans (Groq) passed citation validation on the first attempt, with 0 invented figures, by restricting the model to retrieved playbook entries, verifying every PB-xx citation in code, and falling back to a playbook-built plan on failure.",
        },
        {
          title: "174-test offline suite",
          text: "Built a 174-test pytest suite that runs offline in about 15 seconds, using a fake embedder and a fake LLM.",
        },
        {
          title: "Found and fixed my own cost-model error",
          text: "Corrected a ROI cost-matrix error in my own churn analysis that had overstated savings about 37x (€281,709 versus €7,533 at the old 0.11 threshold on 1,407 test customers). The corrected model estimates €22,426 saved, about €16 per customer, under stated assumptions of 30% retention and an €80 offer.",
        },
        {
          title: "Deployed full app",
          text: "Deployed the full app (XGBoost, SHAP and the RAG advisor) on Hugging Face Spaces, with the API key kept as a Space secret.",
        },
      ],
    },
    metrics: [
      { value: "97.5%", label: "retrieval precision (from 84.0%)" },
      { value: "40/40", label: "LLM plans passed citation checks" },
      { value: "174", label: "offline pytest tests" },
    ],
    tools: ["Python", "XGBoost", "SHAP", "SMOTE", "scikit-learn", "Pandas", "Sentence-Transformers (all-MiniLM-L6-v2)", "NumPy", "Groq API", "pytest", "Streamlit", "HuggingFace Spaces", "Git"],
    links: {
      demo: "https://huggingface.co/spaces/mihir-apte/CustomerChurnAnalyser",
      repo: "https://github.com/MihirApte/Customer-Churn-Prediction",
    },
  },
  {
    slug: "physics-informed-nn",
    title: "Physics-Informed Neural Network",
    subtitle: "Heat conduction PDE solver · self-directed",
    status: "Completed",
    year: "Self-directed",
    accent: "#f97316",
    summary:
      "A neural network that solves heat-conduction PDEs with zero labelled data, matching the exact analytical solution to within 0.0015°C.",
    problem:
      "Can a network learn physics from the equations alone? I trained one to solve heat conduction using only the PDE residual and boundary conditions, then kept pushing: harder problems, independent checks, and a real diagnosis of where it fails.",
    highlights: [
      {
        title: "No labels, tiny error",
        text: "Physics-informed loss (PDE residual and boundary conditions) via second-order PyTorch autograd and a two-stage Adam then L-BFGS scheme matched a closed-form solution to within 0.0015°C, under 0.002% of the imposed 100°C difference.",
      },
      {
        title: "From 1D steady-state to 2D transient",
        text: "Extended to the space-time heat equation with an initial-condition loss term, reproducing a multi-mode decaying temperature field with under 1% max relative error.",
      },
      {
        title: "Two independent ground truths",
        text: "Cross-validated against a finite-difference solver (explicit FTCS, built from scratch with stability analysis) that agreed with the closed form to about 1e-4.",
      },
      {
        title: "Diagnosing the error, not just reporting it",
        text: "Found a near-zero (0.01) correlation between local error and gradient magnitude, then used a collocation-point ablation (30 of 1000 points cut error 50x) to show proximity to the initial condition, not local sharpness, was the real driver.",
      },
    ],
    metrics: [
      { value: "0.0015°C", label: "max deviation" },
      { value: "<1%", label: "2D transient error" },
      { value: "50x", label: "error cut by 30 points" },
    ],
    tools: ["Python", "PyTorch (autograd, L-BFGS)", "NumPy", "Matplotlib", "Jupyter", "Finite-difference methods", "Git"],
    links: { repo: "https://github.com/MihirApte/pinn-heat-conduction" },
  },
];

export type TimelineItem = {
  kind: "work" | "education";
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    kind: "education",
    title: "MSc Computer Science (Data Science)",
    org: "Trinity College Dublin",
    place: "Dublin, Ireland",
    period: "Sep 2025 to Aug 2026",
    points: [
      "Modules: Machine Learning, Data Analytics, Artificial Intelligence, Data Visualisation, Text Analytics, Scalable Computing, Information Retrieval, Security and Privacy.",
      "Dissertation: improving temporal consistency of the RAVE video-editing model.",
    ],
  },
  {
    kind: "work",
    title: "Data Engineer Intern",
    org: "C4i4 Labs",
    place: "Pune, India · On-site",
    period: "Dec 2024 to May 2025",
    points: [
      "Built an NLP conversational chatbot so non-technical users could resolve data queries on their own.",
      "Built an NLP pipeline surfacing sentiment trends across the full customer feedback corpus.",
      "Developed an AI resume-matching system parsing unstructured CVs against job requirements.",
      "Designed an AI-driven scheduling and process-automation system for automotive service operations, replacing a manual workflow.",
    ],
  },
  {
    kind: "work",
    title: "Data Scientist Intern",
    org: "AlgoAnalytics",
    place: "Pune, India · Remote",
    period: "Jul 2024 to Dec 2024",
    points: [
      "Built a predictive-maintenance model (Python, scikit-learn) giving continuous anomaly detection on live sensor data for a Solar Panel Digital Twin.",
      "Developed an LLM-powered summarisation module (Hugging Face) that condensed large PowerPoint decks into decision-ready summaries.",
    ],
  },
  {
    kind: "education",
    title: "BE Information Technology",
    org: "Savitribai Phule Pune University",
    place: "Marathwada Mitra Mandal's College of Engineering, Pune",
    period: "May 2020 to Jun 2024",
    points: [
      "CGPA 9.02 / 10.0 (First Class Honours equivalent). Modules included Engineering Mathematics, Numerical Methods and core Physics.",
    ],
  },
  {
    kind: "work",
    title: "Software Developer Intern",
    org: "Invasystems Inc.",
    place: "Pune, India",
    period: "Feb 2023 to May 2023",
    points: [
      "Gathered the recruiting team's requirements and built a full-stack Application Tracking System (Python, Flask, SQL) that replaced a spreadsheet workflow.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "ML & NLP",
    items: ["PyTorch", "TensorFlow", "Keras", "HuggingFace", "BERTopic", "UMAP", "HDBSCAN", "Sentence-Transformers", "DistilBERT", "RoBERTa", "scikit-learn", "XGBoost", "SHAP", "SMOTE", "LangChain", "Ollama", "LIME", "OpenCV", "torchvision"],
  },
  {
    group: "Scientific computing",
    items: ["Physics-informed NNs", "PDE residual loss", "Finite-difference methods", "Cost-driven decision optimisation", "L-BFGS & Adam", "K-means design", "Hyperparameter search", "Explainability", "Evaluation pipelines"],
  },
  {
    group: "Data viz & BI",
    items: ["Power BI", "DAX", "Tableau", "Streamlit", "FastAPI/JS dashboards", "SHAP visuals", "Matplotlib", "Seaborn"],
  },
  {
    group: "Programming & backend",
    items: ["Python", "SQL", "PostgreSQL", "JavaScript", "HTML/CSS", "FastAPI", "Flask", "Git", "REST APIs", "OAuth 2.0"],
  },
  {
    group: "Tools & deployment",
    items: ["PyInstaller", "Inno Setup", "Gradio", "HuggingFace Spaces", "Jupyter", "Pandas", "NumPy", "SciPy", "Google Colab", "Kaggle GPUs"],
  },
];

export const certifications = [
  "SQL for Data Analytics using PostgreSQL (Udemy)",
  "Google AI-ML Program (AICTE)",
  "Intel AI/ML Certificate",
  "Python for Data Science and Machine Learning (Udemy)",
];

// Turns a normal HuggingFace Space link (huggingface.co/spaces/user/name) into
// its embeddable "*.hf.space" address. Any other URL is returned unchanged.
export function toEmbedUrl(url: string): string {
  const m = url.match(/huggingface\.co\/spaces\/([^/]+)\/([^/?#]+)/i);
  if (!m) return url;
  const slug = (x: string) => x.toLowerCase().replace(/[_.]/g, "-");
  return `https://${slug(m[1])}-${slug(m[2])}.hf.space`;
}
