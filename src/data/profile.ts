// =====================================================================
//  ALL SITE CONTENT LIVES HERE. Edit this file to change the website.
// =====================================================================

export const profile = {
  name: "Mihir Apte",
  firstName: "Mihir",
  location: "Dublin, Ireland",
  email: "mihirapte24@gmail.com",
  phone: "(+353) 892076803",
  phoneHref: "tel:+353892076803",
  linkedin: "https://linkedin.com/in/mihir-apte",
  instagram: "https://www.instagram.com/mihir.apte/",
  whatsapp: "https://wa.me/919130430787",
  github: "https://github.com/MihirApte",
  workAuth: "Stamp 1G — permitted to work in Ireland",
  cv: "/Mihir-Apte-CV.pdf",
  // Drop a photo into /public (e.g. public/me.jpg) and set it here: "/me.jpg"
  photo: "/gallery/green-wall.jpg" as string | null,
  roles: [
    "Data Scientist",
    "AI / ML Engineer",
    "Builder of things that actually ship",
    "Probably debugging something",
  ],
  tagline:
    "I turn messy data into things people can actually use, from NLP tools to physics-informed neural nets.",
  summary:
    "MSc Computer Science (Data Science) graduate from Trinity College Dublin. I've independently scoped, built and shipped five end-to-end AI/ML projects — each with a working demo, dashboard or deployed app so the results are usable by someone else, not just a notebook. I like formulating a problem from scratch, building a proper evaluation, and being honest about where a metric is hiding something important.",
};

export const stats = [
  { value: "5", label: "end-to-end AI/ML projects shipped" },
  { value: "3", label: "internships (data eng, DS, software)" },
  { value: "9.02", label: "CGPA in BE Information Technology (out of 10)" },
  { value: "2", label: "apps live on HuggingFace Spaces" },
];

// ---------------------------------------------------------------------
//  PERSONAL SECTION — intentionally empty until Mihir shares real details.
//  Add items like: { emoji: "☕", title: "Coffee", text: "..." }
// ---------------------------------------------------------------------
export const personal: { emoji: string; title: string; text: string }[] = [
  {
    emoji: "🍳",
    title: "Weekend menu",
    text: "Cook something properly nice, put on a good movie, repeat. Zero notebooks involved.",
  },
  {
    emoji: "⚽",
    title: "Football opinions",
    text: "Ask me anything about football and prepare to be debated. It's the one topic I can talk about forever, so bring snacks.",
  },
  {
    emoji: "🇪🇸",
    title: "Aprendiendo español",
    text: "My newest hobby is learning Spanish. Poco a poco, and yes, I'll practise on you if you let me.",
  },
  {
    emoji: "🎭",
    title: "Two modes",
    text: "Colleagues past will tell you I'm the polite, obedient one, and that's true. The clumsier, funnier me mostly appears once I'm comfortable. Think of it as an unlockable level.",
  },
  {
    emoji: "🧊",
    title: "Current side quest",
    text: "Getting better at talking to new people and breaking the ice, in person or online. If we meet, feel free to go first.",
  },
];

// Photos for the gallery. Put images in /public/gallery and list them here:
// { src: "/gallery/one.jpg", alt: "Description", caption: "Optional caption" }
export const gallery: { src: string; alt: string; caption?: string }[] = [
  { src: "/gallery/night-balcony.jpg", alt: "Mihir in a dark suit adjusting his cuff on a balcony at night" },
  { src: "/gallery/green-shirt-park.jpg", alt: "Mihir smiling in a green shirt on a sports field with trees behind" },
  { src: "/gallery/green-wall.jpg", alt: "Mihir in a blue shirt holding a hand-decorated card with his name, in front of a wall of plants" },
  { src: "/gallery/black-shirt-home.jpg", alt: "Mihir smiling in a black shirt and white trousers" },
  { src: "/gallery/selfie.jpg", alt: "Close-up selfie of Mihir in a black polo" },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  year: string;
  accent: string; // tailwind-free hex used for glow
  summary: string;
  problem: string;
  highlights: { title: string; text: string }[];
  metrics: { value: string; label: string }[];
  tools: string[];
  links: { demo?: string; repo?: string; paper?: string };
  repoPrivate?: boolean;
};

export const projects: Project[] = [
  {
    slug: "improving-rave",
    title: "Improving RAVE Video Editing",
    subtitle: "MSc dissertation · Trinity College Dublin",
    status: "Completed",
    year: "2025 – 2026",
    accent: "#a78bfa",
    summary:
      "Made a published CVPR 2024 zero-shot video-editing model more temporally consistent by replacing its random frame shuffling with smarter frame grouping.",
    problem:
      "RAVE edits videos with diffusion models, but it groups frames randomly, which can cause flicker between frames. I wanted to see whether grouping frames by how similar they actually are would help, and to prove it with numbers, not vibes.",
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
        text: "Ran a controlled ablation across ZoeDepth, Canny and FreeU — alone and combined — varying one conditioning signal at a time with the grouping method held fixed.",
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
        text: "Physics-informed loss (PDE residual + boundary conditions) via second-order PyTorch autograd and a two-stage Adam → L-BFGS scheme matched a closed-form solution to within 0.0015°C — under 0.002% of the imposed 100°C difference.",
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
        text: "Found a near-zero (0.01) correlation between local error and gradient magnitude, then used a collocation-point ablation (30 of 1000 points cut error 50×) to show proximity to the initial condition — not local sharpness — was the real driver.",
      },
    ],
    metrics: [
      { value: "0.0015°C", label: "max deviation" },
      { value: "<1%", label: "2D transient error" },
      { value: "50×", label: "error cut by 30 points" },
    ],
    tools: ["Python", "PyTorch (autograd, L-BFGS)", "NumPy", "Matplotlib", "Jupyter", "Finite-difference methods", "Git"],
    links: { repo: "https://github.com/MihirApte/pinn-heat-conduction" },
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
      "Creators drown in comments. Comment Lab ingests them, finds what the audience actually talks about, detects content requests, cross-references live YouTube trends, and presents it all in a dashboard that non-technical people can use.",
    highlights: [
      {
        title: "Zero-setup for non-technical testers",
        text: "Packaged the full pipeline as a one-click Windows installer (PyInstaller + Inno Setup) that silently provisions a local LLM runtime on first run.",
      },
      {
        title: "Four-tab interactive dashboard",
        text: "Topics, Trending Matches, Content Requests and Content Ideas, served by a FastAPI-backed visualisation layer on top of the NLP pipeline (BERTopic, UMAP, HDBSCAN, multilingual XLM-RoBERTa sentiment).",
      },
      {
        title: "Evidence-backed ideas",
        text: "Every suggestion cites the real comment volume and sentiment behind it, using a two-stage request detector (regex heuristic + local LLM confirmation) and live YouTube trending data.",
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
    links: {},
    repoPrivate: true,
  },
  {
    slug: "cognitive-distortion-detector",
    title: "Cognitive Distortion Detector",
    subtitle: "Live app · HuggingFace Spaces",
    status: "Deployed",
    year: "Live app",
    accent: "#f472b6",
    summary:
      "Fine-tuned transformers that spot 10 cognitive distortions in free text, validated against a licensed psychologist's annotations.",
    problem:
      "No public dataset existed, so I gathered requirements straight from a subject-matter expert and generated synthetic training data from scratch. In a sensitive domain, confident wrong answers are worse than uncertain ones.",
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
    metrics: [
      { value: "10", label: "distortions detected" },
      { value: "2", label: "transformer models" },
      { value: "LIME", label: "explainability" },
    ],
    tools: ["Python", "PyTorch", "HuggingFace Transformers", "DistilBERT", "RoBERTa", "LIME", "scikit-learn", "Streamlit", "Git"],
    links: { demo: "https://huggingface.co/spaces/mihir-apte/cognitive-distortion-detector" },
  },
  {
    slug: "churn-simulator",
    title: "Customer Churn Business Simulator",
    subtitle: "Live app · HuggingFace Spaces",
    status: "Deployed",
    year: "Live app",
    accent: "#4ade80",
    summary:
      "An XGBoost churn model with a SHAP-powered what-if simulator, tuned to real business costs instead of the default 0.5 threshold.",
    problem:
      "Accuracy is a trap on imbalanced churn data. I built the model around what a mistake actually costs — 12 months of lost revenue versus roughly a €50 false alarm — and let non-technical people interrogate its decisions.",
    highlights: [
      {
        title: "Threshold from evidence, not default",
        text: "Optimised the decision threshold from 0.5 to 0.11 against a risk-adjusted cost function, with an automated end-to-end XGBoost optimisation pipeline.",
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
    metrics: [
      { value: "0.11", label: "optimised threshold (vs 0.5)" },
      { value: "12 mo", label: "revenue at stake per miss" },
      { value: "SHAP", label: "live explanations" },
    ],
    tools: ["Python", "XGBoost", "SHAP", "SMOTE", "scikit-learn", "Pandas", "Streamlit", "HuggingFace Spaces", "Git"],
    links: { demo: "https://huggingface.co/spaces/mihir-apte/CustomerChurnAnalyser" },
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
    period: "Sep 2025 – Aug 2026",
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
    period: "Dec 2024 – May 2025",
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
    period: "Jul 2024 – Dec 2024",
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
    period: "May 2020 – Jun 2024",
    points: [
      "CGPA 9.02 / 10.0. Modules included Engineering Mathematics, Numerical Methods and core Physics.",
    ],
  },
  {
    kind: "work",
    title: "Software Developer Intern",
    org: "Invasystems Inc.",
    place: "Pune, India",
    period: "Feb 2023 – May 2023",
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
    items: ["Streamlit", "FastAPI/JS dashboards", "SHAP visuals", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
  {
    group: "Programming & backend",
    items: ["Python", "JavaScript", "HTML/CSS", "SQL", "FastAPI", "Flask", "Git", "REST APIs", "OAuth 2.0"],
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
