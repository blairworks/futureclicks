const categoryData = [
  // =========================
  // TASK / LAUNCH (TOP)
  // =========================
  {
    title: "Generate",
    links: [
      { id: "chatgpt", label: "ChatGPT", url: "https://chatgpt.com" },
      { id: "claude-chat", label: "Claude", url: "https://claude.ai" },
      { id: "gemini", label: "Gemini", url: "https://gemini.google.com" },
      { id: "perplexity", label: "Perplexity", url: "https://www.perplexity.ai" },
      { id: "grok", label: "Grok", url: "https://x.ai" },
      { id: "mistral-chat", label: "Mistral Chat", url: "https://chat.mistral.ai" }
    ]
  },
  {
    title: "Create Media",
    links: [
      { id: "midjourney", label: "Midjourney", url: "https://www.midjourney.com" },
      { id: "runway", label: "Runway", url: "https://runwayml.com" },
      { id: "elevenlabs", label: "ElevenLabs", url: "https://elevenlabs.io" },
      { id: "suno", label: "Suno", url: "https://suno.com" },
      { id: "stability", label: "Stability AI", url: "https://stability.ai" }
    ]
  },
  {
    title: "Code",
    links: [
      { id: "github", label: "GitHub", url: "https://github.com" },
      { id: "cursor", label: "Cursor", url: "https://cursor.com" },
      { id: "claude-code", label: "Claude Code", url: "https://code.claude.com" },
      { id: "vscode", label: "VS Code", url: "https://code.visualstudio.com" },
      { id: "replit", label: "Replit", url: "https://replit.com" },
      { id: "stackblitz", label: "StackBlitz", url: "https://stackblitz.com" }
    ]
  },
  {
    title: "Agents & Automation",
    links: [
      { id: "autogen", label: "AutoGen", url: "https://microsoft.github.io/autogen/" },
      { id: "langgraph", label: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
      { id: "crew-ai", label: "CrewAI", url: "https://www.crewai.com" },
      { id: "semantic-kernel", label: "Semantic Kernel", url: "https://github.com/microsoft/semantic-kernel" },
      { id: "openai-agents", label: "OpenAI Agents", url: "https://platform.openai.com/docs/assistants" }
    ]
  },
  {
    title: "Benchmarks & Evaluation",
    links: [
      { id: "lmsys-arena", label: "LMSYS Arena", url: "https://arena.lmsys.org" },
      { id: "helm", label: "HELM", url: "https://crfm.stanford.edu/helm/latest/" },
      { id: "pwc-bench", label: "Benchmarks (Papers With Code)", url: "https://paperswithcode.com/benchmarks" },
      { id: "mlperf", label: "MLPerf", url: "https://mlcommons.org/en/mlperf/" }
    ]
  },
  {
    title: "Design Systems",
    links: [
      { id: "figma", label: "Figma", url: "https://www.figma.com" },
      { id: "framer", label: "Framer", url: "https://www.framer.com" },
      { id: "webflow", label: "Webflow", url: "https://webflow.com" },
      { id: "radix", label: "Radix UI", url: "https://www.radix-ui.com" }
    ]
  },
  {
    title: "Visual Inspiration",
    links: [
      { id: "dribbble", label: "Dribbble", url: "https://dribbble.com" },
      { id: "are-na", label: "Are.na", url: "https://www.are.na" },
      { id: "awwwards", label: "Awwwards", url: "https://www.awwwards.com" }
    ]
  },
  {
    title: "Build & Deploy",
    links: [
      { id: "cloudflare", label: "Cloudflare", url: "https://cloudflare.com" },
      { id: "vercel", label: "Vercel", url: "https://vercel.com" },
      { id: "netlify", label: "Netlify", url: "https://www.netlify.com" },
      { id: "supabase", label: "Supabase", url: "https://supabase.com" },
      { id: "railway", label: "Railway", url: "https://railway.app" },
      { id: "render", label: "Render", url: "https://render.com" }
    ]
  },
  {
    title: "Write & Think",
    links: [
      { id: "obsidian", label: "Obsidian", url: "https://obsidian.md" },
      { id: "notion", label: "Notion", url: "https://www.notion.so" },
      { id: "substack", label: "Substack", url: "https://substack.com" },
      { id: "zotero", label: "Zotero", url: "https://www.zotero.org" },
      { id: "overleaf", label: "Overleaf", url: "https://www.overleaf.com" },
      { id: "lesswrong", label: "LessWrong", url: "https://www.lesswrong.com" }
    ]
  },

  // =========================
  // REFERENCE / INFRA
  // =========================
  {
    title: "Reference Docs",
    links: [
      { id: "openai-docs", label: "OpenAI Docs", url: "https://platform.openai.com/docs" },
      { id: "anthropic-docs", label: "Anthropic Docs", url: "https://docs.anthropic.com" },
      { id: "google-ai-docs", label: "Google AI Docs", url: "https://ai.google.dev" },
      { id: "mistral-docs", label: "Mistral Docs", url: "https://docs.mistral.ai" },
      { id: "huggingface-docs", label: "Hugging Face Docs", url: "https://huggingface.co/docs" },
      { id: "pytorch-docs", label: "PyTorch Docs", url: "https://pytorch.org/docs" },
      { id: "ros-docs", label: "ROS Docs", url: "https://docs.ros.org" }
    ]
  },
  {
    title: "Data & Memory",
    links: [
      { id: "pinecone", label: "Pinecone", url: "https://www.pinecone.io" },
      { id: "weaviate", label: "Weaviate", url: "https://weaviate.io" },
      { id: "milvus", label: "Milvus", url: "https://milvus.io" },
      { id: "neo4j", label: "Neo4j", url: "https://neo4j.com" },
      { id: "labelbox", label: "Labelbox", url: "https://labelbox.com" }
    ]
  },
  {
    title: "APIs & Model Services",
    links: [
      { id: "openai-api", label: "OpenAI API", url: "https://platform.openai.com" },
      { id: "anthropic-api", label: "Anthropic API", url: "https://www.anthropic.com/api" },
      { id: "together", label: "Together AI", url: "https://www.together.ai" },
      { id: "replicate", label: "Replicate", url: "https://replicate.com" },
      { id: "fireworks", label: "Fireworks AI", url: "https://fireworks.ai" }
    ]
  },

  // =========================
  // BUILDERS / EMBODIMENT
  // =========================
  {
    title: "AI Models",
    links: [
      { id: "openai", label: "OpenAI", url: "https://openai.com" },
      { id: "anthropic", label: "Anthropic", url: "https://www.anthropic.com" },
      { id: "google-deepmind", label: "Google DeepMind", url: "https://deepmind.google" },
      { id: "meta-ai", label: "Meta AI", url: "https://ai.meta.com" },
      { id: "mistral", label: "Mistral AI", url: "https://mistral.ai" },
      { id: "cohere", label: "Cohere", url: "https://cohere.com" }
    ]
  },
  {
    title: "Simulation & Embodiment",
    links: [
      { id: "mujoco", label: "MuJoCo", url: "https://mujoco.org" },
      { id: "isaac-sim", label: "NVIDIA Isaac Sim", url: "https://developer.nvidia.com/isaac-sim" },
      { id: "gazebo", label: "Gazebo", url: "https://gazebosim.org" },
      { id: "unity-robotics", label: "Unity Robotics", url: "https://unity.com/solutions/robotics" },
      { id: "habitat", label: "AI Habitat", url: "https://aihabitat.org" }
    ]
  },
  {
    title: "Hardware & Sensors",
    links: [
      { id: "intel-realsense", label: "Intel RealSense", url: "https://www.intelrealsense.com" },
      { id: "lidar-ouster", label: "Ouster (LiDAR)", url: "https://ouster.com" },
      { id: "bosch-sensors", label: "Bosch Sensors", url: "https://www.bosch-sensortec.com" },
      { id: "sonycmos", label: "Sony CMOS Sensors", url: "https://www.sony-semicon.com" },
      { id: "edge-tpu", label: "Google Edge TPU", url: "https://coral.ai" }
    ]
  },
  {
    title: "Humanoid Robots #1",
    links: [
      { id: "tesla-ai", label: "Tesla AI & Robotics", url: "https://www.tesla.com/AI" },
      { id: "figure", label: "Figure", url: "https://www.figure.ai" },
      { id: "agility", label: "Agility Robotics", url: "https://www.agilityrobotics.com" },
      { id: "apptronik", label: "Apptronik", url: "https://apptronik.com" },
      { id: "1x", label: "1X", url: "https://www.1x.tech" },
      { id: "sanctuary", label: "Sanctuary AI", url: "https://www.sanctuary.ai" }
    ]
  },
  {
    title: "Humanoid Robots #2",
    links: [
      { id: "bostondynamics-atlas", label: "Boston Dynamics (Atlas)", url: "https://bostondynamics.com/products/atlas/" },
      { id: "unitree", label: "Unitree", url: "https://www.unitree.com" }
    ]
  },
  {
    title: "Drones",
    links: [
      { id: "skydio", label: "Skydio", url: "https://www.skydio.com" },
      { id: "dji", label: "DJI", url: "https://www.dji.com" },
      { id: "wing", label: "Wing (Delivery)", url: "https://wing.com" },
      { id: "zipline", label: "Zipline", url: "https://www.flyzipline.com" }
    ]
  },
  {
    title: "Self-Driving & Autonomy",
    links: [
      { id: "waymo", label: "Waymo", url: "https://waymo.com" },
      { id: "zoox", label: "Zoox", url: "https://zoox.com" },
      { id: "nuro", label: "Nuro", url: "https://www.nuro.ai" },
      { id: "aurora", label: "Aurora", url: "https://aurora.tech" }
    ]
  },

  // =========================
  // CONTEXT / CONSEQUENCE
  // =========================
  {
    title: "Research & Papers",
    links: [
      { id: "arxiv", label: "arXiv", url: "https://arxiv.org" },
      { id: "scholar", label: "Google Scholar", url: "https://scholar.google.com" },
      { id: "paperswithcode", label: "Papers With Code", url: "https://paperswithcode.com" },
      { id: "semanticscholar", label: "Semantic Scholar", url: "https://www.semanticscholar.org" },
      { id: "attention", label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" }
    ]
  },
  {
    title: "Signals & News",
    links: [
      { id: "hn", label: "Hacker News", url: "https://news.ycombinator.com" },
      { id: "techmeme", label: "Techmeme", url: "https://www.techmeme.com" },
      { id: "ieee-robotics", label: "IEEE Spectrum (Robotics)", url: "https://spectrum.ieee.org/topic/robotics/" },
      { id: "robotreport", label: "The Robot Report", url: "https://www.therobotreport.com" },
      { id: "mittr", label: "MIT Technology Review", url: "https://www.technologyreview.com" }
    ]
  },
  {
    title: "Robotics Newsrooms",
    links: [
      { id: "tesla-blog", label: "Tesla AI Blog", url: "https://www.tesla.com/blog" },
      { id: "figure-news", label: "Figure News", url: "https://www.figure.ai/news" },
      { id: "agility-blog", label: "Agility Robotics Blog", url: "https://www.agilityrobotics.com/blog" },
      { id: "bostondynamics-news", label: "Boston Dynamics News", url: "https://bostondynamics.com/news/" },
      { id: "nvidia-blog", label: "NVIDIA Blog", url: "https://blogs.nvidia.com" }
    ]
  },
  {
    title: "Standards & Governance",
    links: [
      { id: "iso-ai", label: "ISO AI Standards", url: "https://www.iso.org/artificial-intelligence.html" },
      { id: "nist-ai", label: "NIST AI Risk Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { id: "oecd-ai", label: "OECD AI Policy", url: "https://oecd.ai" },
      { id: "partnership-ai", label: "Partnership on AI", url: "https://partnershiponai.org" }
    ]
  },
  {
    title: "Safety & Security",
    links: [
      { id: "owasp-llm", label: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { id: "modelcards", label: "Model Cards", url: "https://modelcards.withgoogle.com/about" },
      { id: "alignmentforum", label: "Alignment Forum", url: "https://www.alignmentforum.org" }
    ]
  },
  {
    title: "Human–AI Interaction",
    links: [
      { id: "nngroup", label: "Nielsen Norman Group", url: "https://www.nngroup.com" },
      { id: "apple-hig", label: "Apple HIG", url: "https://developer.apple.com/design/human-interface-guidelines/" },
      { id: "microsoft-hci", label: "Microsoft HCI", url: "https://www.microsoft.com/design/human-centered-ai/" },
      { id: "google-pair", label: "People + AI Guidebook", url: "https://pair.withgoogle.com/guidebook/" }
    ]
  },
  {
    title: "Society, Labor & Agency",
    links: [
      { id: "aeon", label: "Aeon", url: "https://aeon.co" },
      { id: "noema", label: "Noema", url: "https://www.noemamag.com" },
      { id: "wired", label: "Wired", url: "https://www.wired.com" },
      { id: "eff", label: "EFF", url: "https://www.eff.org" },
      { id: "nber", label: "NBER", url: "https://www.nber.org" }
    ]
  }
];

export default categoryData;
