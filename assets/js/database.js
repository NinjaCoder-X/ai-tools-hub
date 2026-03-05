/* ============================================
   AI Tools Hub - Tools Database
   150+ Curated Tools & Resources
   ============================================ */

const toolsDatabase = [
    {
        name: "AlmostNode",
        description: "Run Node.js directly in your web browser without any installation. Perfect for testing, learning, and quick prototyping.",
        category: "Development Tools",
        subcategory: "Code Execution",
        tags: ["nodejs", "browser", "development", "testing", "free"],
        link: "https://almostnode.dev/",
        keywords: "node javascript browser online ide"
    },
    {
        name: "SocialEye",
        description: "Advanced OSINT tool for comprehensive information gathering and social media intelligence. Provides deep insights across multiple platforms.",
        category: "OSINT & Security",
        subcategory: "Information Gathering",
        tags: ["osint", "investigation", "social-media", "intelligence", "security"],
        link: "https://socialeye.net/",
        keywords: "osint god mode information gathering social intelligence"
    },
    {
        name: "Emergent.sh",
        description: "AI-powered website builder that creates stunning, responsive websites in just 5 minutes from simple text prompts. No coding required.",
        category: "AI Website Builders",
        subcategory: "No-Code Platforms",
        tags: ["ai", "website-builder", "no-code", "design", "fast"],
        link: "https://app.emergent.sh/",
        keywords: "ai website builder no-code drag-drop beautiful design"
    },
    {
        name: "LightPDF",
        description: "Free online PDF editor with powerful features. Edit, convert, merge, split, and compress PDFs without watermarks.",
        category: "Productivity Tools",
        subcategory: "Document Editing",
        tags: ["pdf", "editor", "free", "converter", "online"],
        link: "https://lightpdf.com/",
        keywords: "pdf edit free online converter merge"
    },
    {
        name: "OpenRouter AI",
        description: "Unified API gateway providing free access to multiple AI models including GPT-4, Claude, and more. Perfect for developers.",
        category: "AI APIs & Platforms",
        subcategory: "API Services",
        tags: ["api", "ai", "free", "gpt", "claude"],
        link: "https://openrouter.ai/",
        keywords: "free api key ai models gpt claude openai"
    },
    {
        name: "MyInstants",
        description: "Massive library of instant sound effects and meme sounds. Perfect for content creators, streamers, and fun projects.",
        category: "Media & Entertainment",
        subcategory: "Sound Effects",
        tags: ["sounds", "memes", "effects", "entertainment", "free"],
        link: "https://www.myinstants.com/en/index/us/",
        keywords: "funny meme sound effects instant sounds"
    },
    {
        name: "Higgsfield AI Skin Enhancer",
        description: "Professional AI-powered skin retouching tool. One-click enhancement that preserves natural texture while removing blemishes and improving detail.",
        category: "AI Image Tools",
        subcategory: "Photo Editing",
        tags: ["ai", "photo-editing", "portrait", "retouch", "free"],
        link: "https://higgsfield.ai/",
        keywords: "skin enhancer ai photo retouch portrait editor"
    },
    {
        name: "Ahmia",
        description: "Search engine for the Tor network and dark web. Provides indexed access to .onion sites with focus on legitimate content.",
        category: "OSINT & Security",
        subcategory: "Dark Web",
        tags: ["darkweb", "tor", "search-engine", "onion", "privacy"],
        link: "https://ahmia.fi/",
        keywords: "dark web search engine tor onion"
    },
    {
        name: "BugMeNot",
        description: "Community-shared login credentials for websites requiring registration. Skip unnecessary signups and access content quickly.",
        category: "Utilities",
        subcategory: "Authentication",
        tags: ["login", "bypass", "free", "credentials", "utility"],
        link: "https://bugmenot.com/",
        keywords: "free username password bypass login signup"
    },
    {
        name: "Shodan",
        description: "The world's first search engine for Internet-connected devices. Essential tool for security research and IoT discovery.",
        category: "OSINT & Security",
        subcategory: "Network Intelligence",
        tags: ["iot", "security", "network", "osint", "scanning"],
        link: "https://www.shodan.io/",
        keywords: "iot device search engine security network scan"
    },
    {
        name: "ZoomEye",
        description: "Cyberspace search engine for discovering Internet assets and devices. Powerful platform for security research and threat intelligence.",
        category: "OSINT & Security",
        subcategory: "Network Intelligence",
        tags: ["security", "network", "scanning", "osint", "cyberspace"],
        link: "https://www.zoomeye.ai/",
        keywords: "cyberspace search engine devices network security"
    },
    {
        name: "Censys",
        description: "Internet asset discovery platform providing comprehensive visibility into your attack surface and Internet infrastructure.",
        category: "OSINT & Security",
        subcategory: "Network Intelligence",
        tags: ["security", "scanning", "assets", "infrastructure", "monitoring"],
        link: "https://search.censys.io/",
        keywords: "internet asset discovery security infrastructure scan"
    },
    {
        name: "Google Dataset Search",
        description: "Search millions of datasets from across the web. Excellent resource for data scientists, researchers, and analysts.",
        category: "Data & Research",
        subcategory: "Datasets",
        tags: ["datasets", "research", "data-science", "free", "google"],
        link: "https://datasetsearch.research.google.com/",
        keywords: "datasets search data research analysis"
    },
    {
        name: "Wan 2.2",
        description: "Advanced AI tool for character replacement in videos. Create viral visual effects and transform video content with AI precision.",
        category: "AI Video Tools",
        subcategory: "Video Editing",
        tags: ["ai", "video", "character-replacement", "effects", "viral"],
        link: "https://wan.video/",
        keywords: "ai character replacement video effects viral"
    },
    {
        name: "LTX Studio",
        description: "AI-powered platform for creating consistent product photoshoots. Generate professional product images with unified styling.",
        category: "AI Image Tools",
        subcategory: "Product Photography",
        tags: ["ai", "product-photography", "ecommerce", "consistency", "professional"],
        link: "https://ltx.studio/",
        keywords: "ai product photography photoshoot consistent professional"
    },
    {
        name: "Kling AI",
        description: "Create viral videos using innovative start-end feature. AI-powered video generation with smooth transitions and effects.",
        category: "AI Video Tools",
        subcategory: "Video Generation",
        tags: ["ai", "video-generation", "viral", "effects", "creative"],
        link: "https://klingai.com/",
        keywords: "viral videos ai generation start end feature"
    },
    {
        name: "UI Colors",
        description: "Tailwind CSS color generator with live preview. Create and visualize color palettes on components, gradients, and UI elements.",
        category: "Design Tools",
        subcategory: "Color Tools",
        tags: ["tailwind", "colors", "generator", "css", "design"],
        link: "https://uicolors.app/generate/",
        keywords: "tailwind css color generator palette design"
    },
    {
        name: "Digital Degens Tools",
        description: "Build amazing web and mobile applications from a single prompt. AI-powered app generation platform.",
        category: "AI Development Tools",
        subcategory: "App Builders",
        tags: ["ai", "app-builder", "web", "mobile", "no-code"],
        link: "https://digitaldegens.com/tools",
        keywords: "build web mobile apps ai prompt no-code"
    },
    {
        name: "Know Programming",
        description: "Comprehensive programming learning platform with tutorials, examples, and practical coding resources.",
        category: "Learning Resources",
        subcategory: "Programming",
        tags: ["programming", "learning", "tutorials", "coding", "education"],
        link: "https://knowprogramming.in/",
        keywords: "programming learning tutorials coding education"
    },
    {
        name: "Kodofy",
        description: "Modern platform for learning to code with interactive lessons and hands-on projects.",
        category: "Learning Resources",
        subcategory: "Programming",
        tags: ["coding", "learning", "interactive", "projects", "education"],
        link: "https://kodofy.com/",
        keywords: "learn code programming interactive projects"
    },
    {
        name: "Best Free AI Websites",
        description: "Curated directory of the best free AI tools and websites. Regularly updated collection of AI resources.",
        category: "AI Directories",
        subcategory: "Tool Collections",
        tags: ["ai", "directory", "free", "tools", "collection"],
        link: "https://bestfreeaiwebsites.com/",
        keywords: "best free ai tools websites directory"
    },
    {
        name: "Uiverse",
        description: "The largest library of open-source UI components. Thousands of ready-to-use elements for modern web development.",
        category: "Design Resources",
        subcategory: "UI Components",
        tags: ["ui", "components", "open-source", "library", "free"],
        link: "https://uiverse.io/",
        keywords: "ui components library open-source free elements"
    },
    {
        name: "Lookup Design",
        description: "Discover and explore thousands of design inspirations. Curated collection of beautiful interfaces and layouts.",
        category: "Design Resources",
        subcategory: "Inspiration",
        tags: ["design", "inspiration", "ui", "ux", "gallery"],
        link: "https://lookup.design/",
        keywords: "design inspiration ui ux lookup gallery"
    },
    {
        name: "Ni3 App",
        description: "Create viral YouTube and social media thumbnails in seconds. AI-powered thumbnail generator with proven templates.",
        category: "Design Tools",
        subcategory: "Thumbnail Creators",
        tags: ["thumbnails", "youtube", "social-media", "viral", "ai"],
        link: "https://ni3app.com/",
        keywords: "viral thumbnails youtube social media ai generator"
    },
    {
        name: "Formia",
        description: "Convert 2D images to 3D models in seconds using AI. Perfect for product visualization and 3D content creation.",
        category: "AI 3D Tools",
        subcategory: "3D Conversion",
        tags: ["2d-to-3d", "ai", "conversion", "3d-modeling", "free"],
        link: "https://formia.so/",
        keywords: "convert 2d 3d ai modeling visualization"
    },
    {
        name: "AI Tools Directory",
        description: "Comprehensive directory of AI tools organized by category. Discover the latest AI innovations and applications.",
        category: "AI Directories",
        subcategory: "Tool Collections",
        tags: ["ai", "directory", "tools", "collection", "comprehensive"],
        link: "https://aitoolsdirectory.com/",
        keywords: "ai tools directory collection categories"
    },
    {
        name: "CSS Grid Generator",
        description: "Visual CSS Grid layout generator. Create complex responsive grid layouts with an intuitive interface.",
        category: "Development Tools",
        subcategory: "CSS Tools",
        tags: ["css", "grid", "generator", "layout", "responsive"],
        link: "https://cssgridgenerator.io/",
        keywords: "css grid generator layout responsive visual"
    },
    {
        name: "Ilus AI",
        description: "AI-powered illustration generator. Create custom illustrations and graphics for your projects instantly.",
        category: "AI Image Tools",
        subcategory: "Illustration",
        tags: ["ai", "illustrations", "graphics", "generator", "creative"],
        link: "https://ilus.ai/",
        keywords: "ai illustration generator graphics creative art"
    },
    {
        name: "Code2Tutorial",
        description: "Transform any GitHub repository into a clean, interactive tutorial. Perfect for learning and teaching code.",
        category: "Learning Resources",
        subcategory: "Code Learning",
        tags: ["github", "tutorial", "learning", "interactive", "code"],
        link: "https://code2tutorial.com/",
        keywords: "github repo tutorial interactive learning code"
    },
    {
        name: "ReactBits",
        description: "Collection of ready-made React components and code snippets. Icons, text effects, and UI elements for your projects.",
        category: "Development Resources",
        subcategory: "React Components",
        tags: ["react", "components", "ui", "code", "snippets"],
        link: "https://reactbits.dev/",
        keywords: "react components ui snippets ready-made code"
    },
    {
        name: "Gradienty Animated Icons",
        description: "Stunning collection of animated SVG icons with gradient effects. Copy-paste ready for web projects.",
        category: "Design Resources",
        subcategory: "Icons",
        tags: ["icons", "animated", "svg", "gradient", "free"],
        link: "https://gradienty.codes/animated-icons",
        keywords: "animated svg icons gradient effects web"
    },
    {
        name: "50 Projects in 50 Days",
        description: "GitHub repository with 50 HTML, CSS & JavaScript projects. Perfect for learning web development fundamentals.",
        category: "Learning Resources",
        subcategory: "Code Projects",
        tags: ["html", "css", "javascript", "projects", "learning"],
        link: "https://github.com/bradtraversy/50projects50days",
        keywords: "50 projects html css javascript learning source code"
    },
    {
        name: "UI Wiki",
        description: "Comprehensive wiki of UI design patterns, components, and best practices for modern interfaces.",
        category: "Design Resources",
        subcategory: "Documentation",
        tags: ["ui", "design", "patterns", "wiki", "documentation"],
        link: "https://uiwiki.co/",
        keywords: "ui design patterns wiki components documentation"
    },
    {
        name: "Phase.com",
        description: "Professional animation tool for creating smooth, production-ready animations for web and apps.",
        category: "Design Tools",
        subcategory: "Animation",
        tags: ["animation", "motion", "design", "web", "professional"],
        link: "https://phase.com/",
        keywords: "animation tool motion design web professional"
    },
    {
        name: "Good Brief",
        description: "Generate unique design briefs for creative projects. Perfect for practice or client work inspiration.",
        category: "Design Tools",
        subcategory: "Inspiration",
        tags: ["design-brief", "creative", "inspiration", "generator", "free"],
        link: "https://goodbrief.io/",
        keywords: "design brief generator creative inspiration practice"
    },
    {
        name: "Mobbin",
        description: "World's largest mobile and web design reference library. Thousands of screenshots and flows from top apps.",
        category: "Design Resources",
        subcategory: "Inspiration",
        tags: ["mobile", "ui", "design", "inspiration", "reference"],
        link: "https://mobbin.com/",
        keywords: "mobile web design reference library inspiration"
    },
    {
        name: "Figma Components",
        description: "Free Figma component library with thousands of production-ready UI elements and design systems.",
        category: "Design Resources",
        subcategory: "Figma",
        tags: ["figma", "components", "ui", "free", "library"],
        link: "https://www.figcomponents.com/",
        keywords: "free figma component library ui design system"
    },
    {
        name: "RocketReach",
        description: "Find verified email addresses and contact data for professionals. Essential B2B prospecting tool.",
        category: "Business Tools",
        subcategory: "Lead Generation",
        tags: ["email", "contacts", "b2b", "prospecting", "verification"],
        link: "https://rocketreach.co/",
        keywords: "verified contact data email finder b2b leads"
    },
    {
        name: "InTouch.Tools",
        description: "Automation and AI partner for streamlining business workflows and increasing productivity.",
        category: "Automation Tools",
        subcategory: "Workflow Automation",
        tags: ["automation", "ai", "workflow", "productivity", "business"],
        link: "https://intouch.tools/",
        keywords: "automation ai workflow business productivity"
    },
    {
        name: "CareerFlow AI",
        description: "AI-powered platform to help you land your dream job. Resume optimization, job tracking, and interview prep.",
        category: "Career Tools",
        subcategory: "Job Search",
        tags: ["career", "jobs", "resume", "ai", "interview"],
        link: "https://www.careerflow.ai/",
        keywords: "land dream job ai career resume interview"
    },
    {
        name: "Database.build",
        description: "Visually generate fully structured databases using plain text prompts. AI-powered database design tool.",
        category: "Development Tools",
        subcategory: "Database",
        tags: ["database", "ai", "design", "sql", "visual"],
        link: "https://database.build/",
        keywords: "ai database builder visual design sql generator"
    },
    {
        name: "n8n",
        description: "Open-source workflow automation tool. Build powerful automations without code, integrating 300+ apps.",
        category: "Automation Tools",
        subcategory: "Workflow Automation",
        tags: ["automation", "open-source", "workflow", "no-code", "integrations"],
        link: "https://n8n.io/",
        keywords: "automate tasks n8n workflow no-code open-source"
    },
    {
        name: "DropCourse",
        description: "Done-for-you course selling business. Create and sell online courses with complete infrastructure included.",
        category: "Business Tools",
        subcategory: "Online Education",
        tags: ["courses", "ecommerce", "education", "business", "platform"],
        link: "https://www.dropcourse.com/",
        keywords: "course selling business online education platform"
    },
    {
        name: "Use Animations",
        description: "Animated icons in Lottie framework for immediate implementation in apps and websites.",
        category: "Design Resources",
        subcategory: "Icons",
        tags: ["icons", "animation", "lottie", "web", "mobile"],
        link: "https://useanimations.com/",
        keywords: "animated icons lottie framework web mobile"
    },
    {
        name: "NotebookLM",
        description: "Google's AI research and thinking partner. Upload documents and get intelligent insights grounded in your information.",
        category: "AI Research Tools",
        subcategory: "Document Analysis",
        tags: ["ai", "research", "google", "gemini", "analysis"],
        link: "https://notebooklm.google/",
        keywords: "understand anything research ai gemini google"
    },
    {
        name: "Temlis",
        description: "Premium templates for Webflow, Framer, and Figma. Professional designs ready to customize and deploy.",
        category: "Design Resources",
        subcategory: "Templates",
        tags: ["templates", "webflow", "framer", "figma", "premium"],
        link: "https://www.temlis.com/",
        keywords: "premium templates webflow framer figma design"
    },
    {
        name: "Google Stitch",
        description: "Google's experimental design tool for creating interactive prototypes and animations.",
        category: "Design Tools",
        subcategory: "Prototyping",
        tags: ["google", "prototyping", "animation", "design", "interactive"],
        link: "https://stitch.withgoogle.com/",
        keywords: "google stitch design prototyping animation"
    },
    {
        name: "Infip.pro",
        description: "Create stunning visuals from text prompts or transform your own images with simple AI commands.",
        category: "AI Image Tools",
        subcategory: "Image Generation",
        tags: ["ai", "image-generation", "text-to-image", "creative", "free"],
        link: "https://infip.pro/",
        keywords: "visuals from text ai image generator transform"
    },
    {
        name: "Rocket.new",
        description: "Instant project starter for developers. Quick setup templates for popular frameworks and tools.",
        category: "Development Tools",
        subcategory: "Project Templates",
        tags: ["templates", "development", "starter", "quick", "frameworks"],
        link: "https://www.rocket.new/",
        keywords: "project starter templates quick setup development"
    },
    {
        name: "GitForMe",
        description: "Understand any GitHub repository like a pro. AI-powered code explanation and documentation tool.",
        category: "Development Tools",
        subcategory: "Code Understanding",
        tags: ["github", "ai", "code-analysis", "documentation", "learning"],
        link: "https://gitforme.tech/",
        keywords: "understand github repository ai code explanation"
    },
    {
        name: "Self.so",
        description: "Convert your LinkedIn profile into a personal website in seconds. Free open-source tool for instant online presence.",
        category: "Career Tools",
        subcategory: "Portfolio",
        tags: ["linkedin", "portfolio", "website", "free", "personal-brand"],
        link: "https://self.so/",
        keywords: "linkedin profile personal website portfolio converter"
    },
    {
        name: "ScrollX UI",
        description: "Open-source components library with stunning animated elements. Modern UI with smooth scroll-based animations.",
        category: "Design Resources",
        subcategory: "UI Components",
        tags: ["ui", "components", "animations", "scroll", "open-source"],
        link: "https://scrollx-ui.vercel.app/",
        keywords: "animated components library ui scroll effects"
    },
    {
        name: "Oreate AI",
        description: "AI-powered creative tool for generating unique content and designs with advanced machine learning.",
        category: "AI Creative Tools",
        subcategory: "Content Generation",
        tags: ["ai", "creative", "content", "generation", "design"],
        link: "#",
        keywords: "ai creative content generation design tool"
    },
    {
        name: "Doctrina AI",
        description: "AI assistant for students and educators. Helps with learning, studying, and academic writing.",
        category: "AI Education Tools",
        subcategory: "Learning Assistant",
        tags: ["ai", "education", "learning", "studying", "academic"],
        link: "#",
        keywords: "ai education learning assistant student academic"
    },
    {
        name: "iFixit",
        description: "World's largest repair community. Free repair guides, parts, and tools for fixing almost anything.",
        category: "Repair & DIY",
        subcategory: "Repair Guides",
        tags: ["repair", "diy", "guides", "tools", "community"],
        link: "https://www.ifixit.com/",
        keywords: "repair guides diy fix electronics tools parts"
    },
    {
        name: "Moe Walls",
        description: "Free live wallpapers and animated backgrounds for desktop. High-quality collection for customization.",
        category: "Personalization",
        subcategory: "Wallpapers",
        tags: ["wallpapers", "live", "animated", "free", "desktop"],
        link: "https://moewalls.com/",
        keywords: "free live wallpaper animated backgrounds desktop"
    },
    {
        name: "3D Tuning",
        description: "Best online car configurator. Customize and tune virtual cars in 3D with realistic rendering.",
        category: "Entertainment",
        subcategory: "Car Customization",
        tags: ["3d", "cars", "customization", "game", "tuning"],
        link: "https://www.3dtuning.com/",
        keywords: "car customization 3d tuning game configurator"
    },
    {
        name: "Sinhala Captions",
        description: "Sinhala auto subtitles and transcription service for videos. AI-powered accurate transcription.",
        category: "Video Tools",
        subcategory: "Subtitles",
        tags: ["subtitles", "sinhala", "transcription", "ai", "video"],
        link: "https://www.sinhalacaptions.com/",
        keywords: "sinhala auto subtitles transcription ai video"
    },
    {
        name: "Readdy AI",
        description: "No-code AI website builder. Create any kind of website with drag-and-drop, responsive professional designs.",
        category: "AI Website Builders",
        subcategory: "No-Code Platforms",
        tags: ["ai", "website-builder", "no-code", "responsive", "drag-drop"],
        link: "https://readdy.ai/",
        keywords: "ai website builder no-code drag-drop responsive"
    },
    {
        name: "DeepSite (HuggingFace)",
        description: "Create stunning websites with next-gen AI tools powered by HuggingFace models. Advanced AI-driven design.",
        category: "AI Website Builders",
        subcategory: "AI Platforms",
        tags: ["ai", "website", "huggingface", "design", "advanced"],
        link: "https://huggingface.co/spaces/enzostvs/deepsite",
        keywords: "ai website creator huggingface next-gen design"
    },
    {
        name: "FOFA",
        description: "Cyberspace search engine for security professionals. Discover internet assets, devices, and vulnerabilities.",
        category: "OSINT & Security",
        subcategory: "Cyberspace Search",
        tags: ["security", "osint", "cyberspace", "search", "assets"],
        link: "https://en.fofa.info/",
        keywords: "fofa cyberspace search engine security osint"
    },
    {
        name: "PublicWWW",
        description: "Search for any code snippet within HTML, JavaScript, and CSS of web pages. Source code search engine.",
        category: "OSINT & Security",
        subcategory: "Code Search",
        tags: ["code-search", "osint", "html", "javascript", "css"],
        link: "https://publicwww.com/",
        keywords: "search code snippet html javascript css source"
    },
    {
        name: "DorkSearch",
        description: "Professional OSINT tool with Google Dorks for cyber investigations. Advanced search queries for security research.",
        category: "OSINT & Security",
        subcategory: "Google Dorking",
        tags: ["osint", "google-dorks", "security", "investigation", "cyber"],
        link: "https://dorksearch.com/",
        keywords: "osint google dorks cyber investigation security"
    },
    {
        name: "IntelBase",
        description: "Reverse email lookup service. Discover the identity behind any email with accurate data intelligence.",
        category: "OSINT & Security",
        subcategory: "Email Intelligence",
        tags: ["email", "lookup", "osint", "intelligence", "reverse-search"],
        link: "https://intelbase.is/",
        keywords: "reverse email lookup identity intelligence osint"
    },
    {
        name: "Have I Been Pwned",
        description: "Check if your email address is in a data breach. Essential security tool for password and account safety.",
        category: "OSINT & Security",
        subcategory: "Breach Detection",
        tags: ["security", "breach", "password", "email", "check"],
        link: "https://haveibeenpwned.com/",
        keywords: "email data breach check password security pwned"
    },
    {
        name: "NameChk",
        description: "Check username availability across 30+ domains and 90+ social media platforms instantly.",
        category: "Branding Tools",
        subcategory: "Username Check",
        tags: ["username", "social-media", "branding", "availability", "checker"],
        link: "https://namechk.com/",
        keywords: "check username domain social media availability"
    },
    {
        name: "X-Minus Pro",
        description: "Remove vocals from any song using AI. Perfect for creating karaoke tracks and instrumentals.",
        category: "AI Audio Tools",
        subcategory: "Vocal Removal",
        tags: ["ai", "audio", "vocal-removal", "karaoke", "music"],
        link: "https://x-minus.pro/ai",
        keywords: "remove vocals song ai karaoke instrumental"
    },
    {
        name: "AI Surfer Resources",
        description: "Comprehensive collection of AI tools, resources, and guides for staying ahead in the AI revolution.",
        category: "AI Directories",
        subcategory: "Resources",
        tags: ["ai", "resources", "directory", "tools", "guides"],
        link: "https://resources.theaisurfer.com/",
        keywords: "ai resources tools directory collection guides"
    },
    {
        name: "Bytez API",
        description: "Free API platform providing access to various services and data endpoints for developers.",
        category: "Development Tools",
        subcategory: "APIs",
        tags: ["api", "free", "development", "endpoints", "services"],
        link: "https://bytez.com/",
        keywords: "free api development services endpoints data"
    },
    {
        name: "Printful",
        description: "Print-on-demand dropshipping. Design and sell custom products online without inventory. Free to start.",
        category: "E-commerce",
        subcategory: "Print-on-Demand",
        tags: ["dropshipping", "print-on-demand", "ecommerce", "products", "free"],
        link: "https://www.printful.com/",
        keywords: "print-on-demand dropshipping design sell products"
    },
    {
        name: "10Web",
        description: "AI-powered website builder. Create production-ready websites by chatting with AI. Fully managed hosting included.",
        category: "AI Website Builders",
        subcategory: "AI Platforms",
        tags: ["ai", "website-builder", "hosting", "chat", "production"],
        link: "https://10web.io/",
        keywords: "build website ai chat production-ready hosting"
    },
    {
        name: "ViralSky AI",
        description: "Free tool to help you go viral online. AI-powered content optimization and viral prediction.",
        category: "Marketing Tools",
        subcategory: "Viral Content",
        tags: ["ai", "viral", "marketing", "content", "social-media"],
        link: "https://www.viralsky.ai/",
        keywords: "go viral online ai content marketing social"
    },
    {
        name: "Gemini (Google)",
        description: "Google's advanced AI model. Multimodal AI assistant for text, code, images, and more. Free tier available.",
        category: "AI Models",
        subcategory: "LLMs",
        tags: ["ai", "google", "gemini", "llm", "multimodal"],
        link: "https://gemini.google.com/",
        keywords: "google gemini ai assistant llm multimodal"
    },
    {
        name: "Sora (OpenAI)",
        description: "OpenAI's text-to-video AI model. Create stunning videos from text prompts with unprecedented quality.",
        category: "AI Video Tools",
        subcategory: "Text-to-Video",
        tags: ["ai", "video-generation", "openai", "text-to-video", "sora"],
        link: "https://sora.chatgpt.com/explore",
        keywords: "sora openai text-to-video ai generation"
    },
    {
        name: "Slidesgo",
        description: "Free presentation templates for Google Slides and PowerPoint. Thousands of professional designs.",
        category: "Productivity Tools",
        subcategory: "Presentations",
        tags: ["presentations", "templates", "free", "slides", "powerpoint"],
        link: "https://slidesgo.com/",
        keywords: "presentation templates free slides powerpoint design"
    },
    {
        name: "Firebase Studio",
        description: "Google's development platform for building web and mobile apps. Backend, hosting, and database in one.",
        category: "Development Tools",
        subcategory: "Backend Platform",
        tags: ["firebase", "backend", "database", "hosting", "google"],
        link: "https://firebase.studio/",
        keywords: "firebase backend development platform google app"
    },
    {
        name: "Hedra",
        description: "AI-powered video creation platform. Generate realistic talking head videos with AI avatars.",
        category: "AI Video Tools",
        subcategory: "Avatar Videos",
        tags: ["ai", "video", "avatars", "talking-head", "generation"],
        link: "https://www.hedra.com/",
        keywords: "ai video avatars talking-head generation hedra"
    },
    {
        name: "Minimax Audio",
        description: "AI-powered audio generation and voice synthesis. Create realistic voices and audio content.",
        category: "AI Audio Tools",
        subcategory: "Voice Synthesis",
        tags: ["ai", "audio", "voice", "synthesis", "generation"],
        link: "https://www.minimax.io/",
        keywords: "ai audio voice synthesis generation minimax"
    },
    {
        name: "GreyNoise",
        description: "Internet noise and threat intelligence platform. Identify malicious and benign internet scanners.",
        category: "OSINT & Security",
        subcategory: "Threat Intelligence",
        tags: ["security", "threat-intelligence", "osint", "scanners", "cyber"],
        link: "https://www.greynoise.io/",
        keywords: "internet noise threat intelligence security scanners"
    },
    {
        name: "Onyphe",
        description: "Cyber defense search engine for discovering and monitoring internet-exposed assets and threats.",
        category: "OSINT & Security",
        subcategory: "Cyber Defense",
        tags: ["security", "cyber-defense", "osint", "monitoring", "assets"],
        link: "https://www.onyphe.io/",
        keywords: "cyber defense search engine security monitoring"
    },
    {
        name: "BinaryEdge",
        description: "Threat intelligence data platform. Real-time scanning and monitoring of internet infrastructure.",
        category: "OSINT & Security",
        subcategory: "Threat Intelligence",
        tags: ["security", "threat-intelligence", "scanning", "monitoring", "data"],
        link: "https://www.binaryedge.io/",
        keywords: "threat intelligence data platform security scanning"
    },
    {
        name: "LeakIX",
        description: "Information leaks search engine. Discover exposed data, databases, and security misconfigurations.",
        category: "OSINT & Security",
        subcategory: "Data Leaks",
        tags: ["security", "leaks", "data-breach", "osint", "search"],
        link: "https://leakix.net/",
        keywords: "information leaks search engine data breach security"
    },
    {
        name: "Criminal IP",
        description: "Asset inventory and cyber risk assessment platform. Comprehensive security intelligence tool.",
        category: "OSINT & Security",
        subcategory: "Risk Assessment",
        tags: ["security", "risk-assessment", "assets", "cyber", "intelligence"],
        link: "https://www.criminalip.io/",
        keywords: "asset inventory risk assessment security cyber"
    },
    {
        name: "Netlas",
        description: "Attack surface discovery platform. Map your internet footprint and discover security vulnerabilities.",
        category: "OSINT & Security",
        subcategory: "Attack Surface",
        tags: ["security", "attack-surface", "discovery", "vulnerabilities", "mapping"],
        link: "https://www.netlas.io/",
        keywords: "attack surface discovery platform security vulnerabilities"
    },
    {
        name: "DeHashed",
        description: "Leaked credentials search engine. Search billions of leaked passwords and email combinations.",
        category: "OSINT & Security",
        subcategory: "Credential Leaks",
        tags: ["security", "credentials", "leaks", "passwords", "breach"],
        link: "https://www.dehashed.com/",
        keywords: "leaked credentials search engine passwords breach"
    },
    {
        name: "SecurityTrails",
        description: "DNS and domain data platform. Historical DNS records, WHOIS data, and domain intelligence.",
        category: "OSINT & Security",
        subcategory: "DNS Intelligence",
        tags: ["dns", "domain", "whois", "security", "osint"],
        link: "https://securitytrails.com/",
        keywords: "dns domain data platform whois security intelligence"
    },
    {
        name: "Exploit-DB",
        description: "Exploit and vulnerability archive. CVE database with proof-of-concept exploits for security research.",
        category: "OSINT & Security",
        subcategory: "Exploits",
        tags: ["exploits", "vulnerabilities", "cve", "security", "research"],
        link: "https://www.exploit-db.com/",
        keywords: "exploit vulnerability archive cve security database"
    },
    {
        name: "PulseDive",
        description: "Threat intelligence search engine. Investigate IPs, domains, and URLs for security threats.",
        category: "OSINT & Security",
        subcategory: "Threat Intelligence",
        tags: ["threat-intelligence", "security", "osint", "investigation", "search"],
        link: "https://pulsedive.com/",
        keywords: "threat intelligence search engine security investigation"
    },
    {
        name: "GrayHat Warfare",
        description: "Public S3 buckets search engine. Discover exposed AWS storage and potential data leaks.",
        category: "OSINT & Security",
        subcategory: "Cloud Security",
        tags: ["aws", "s3", "cloud-security", "leaks", "osint"],
        link: "https://grayhatwarfare.com/",
        keywords: "s3 buckets search engine aws cloud security leaks"
    },
    {
        name: "PolySwarm",
        description: "Threat detection marketplace. Crowdsourced malware detection and analysis platform.",
        category: "OSINT & Security",
        subcategory: "Malware Detection",
        tags: ["malware", "threat-detection", "security", "analysis", "crowdsourced"],
        link: "https://polyswarm.io/",
        keywords: "threat detection marketplace malware analysis security"
    },
    {
        name: "URLScan",
        description: "Website and URL scanning service. Analyze websites for security threats and malicious content.",
        category: "OSINT & Security",
        subcategory: "URL Analysis",
        tags: ["url-scanner", "security", "malware", "analysis", "phishing"],
        link: "https://urlscan.io/",
        keywords: "website url scanning service security malware analysis"
    },
    {
        name: "Vulners",
        description: "Vulnerability database and search engine. Search CVEs, exploits, and security advisories.",
        category: "OSINT & Security",
        subcategory: "Vulnerabilities",
        tags: ["vulnerabilities", "cve", "exploits", "security", "database"],
        link: "https://vulners.com/",
        keywords: "vulnerability database search engine cve exploits"
    },
    {
        name: "Archive.org Wayback Machine",
        description: "Historical web page archive. Browse over 700 billion saved web pages from the past.",
        category: "OSINT & Security",
        subcategory: "Web Archive",
        tags: ["archive", "wayback", "history", "osint", "research"],
        link: "https://archive.org/web/",
        keywords: "wayback machine historical web archive internet"
    },
    {
        name: "crt.sh",
        description: "Certificate transparency search engine. Search SSL/TLS certificates and discover subdomains.",
        category: "OSINT & Security",
        subcategory: "SSL/Certificate",
        tags: ["ssl", "certificates", "transparency", "osint", "domains"],
        link: "https://crt.sh/",
        keywords: "certificate transparency search ssl tls subdomains"
    },
    {
        name: "WiGLE",
        description: "Wireless network mapping platform. World's largest WiFi and cellular network database.",
        category: "OSINT & Security",
        subcategory: "Network Mapping",
        tags: ["wifi", "wireless", "mapping", "osint", "networks"],
        link: "https://wigle.net/",
        keywords: "wireless network mapping wifi database osint"
    },
    {
        name: "Hunter.io",
        description: "Email address finder tool. Discover professional email addresses associated with domains.",
        category: "Business Tools",
        subcategory: "Email Finding",
        tags: ["email", "finder", "osint", "prospecting", "business"],
        link: "https://hunter.io/",
        keywords: "email address finder tool domain prospecting"
    },
    {
        name: "Intelligence X",
        description: "OSINT and data breach search platform. Search leaks, historical data, and dark web content.",
        category: "OSINT & Security",
        subcategory: "Data Intelligence",
        tags: ["osint", "data-breach", "dark-web", "search", "intelligence"],
        link: "https://intelx.io/",
        keywords: "osint data breach search dark web intelligence"
    },
    {
        name: "grep.app",
        description: "Search across 500K+ GitHub repositories. Code search engine for finding code examples.",
        category: "Development Tools",
        subcategory: "Code Search",
        tags: ["github", "code-search", "osint", "development", "search"],
        link: "https://grep.app/",
        keywords: "github code search engine repositories examples"
    },
    {
        name: "Packet Storm Security",
        description: "Security tools and resources repository. Exploits, advisories, and security research.",
        category: "OSINT & Security",
        subcategory: "Security Tools",
        tags: ["security", "tools", "exploits", "research", "resources"],
        link: "https://www.packetstormsecurity.com/",
        keywords: "security tools resources exploits research repository"
    },
    {
        name: "searchcode",
        description: "Source code and API search engine. Search billions of lines of code across the internet.",
        category: "Development Tools",
        subcategory: "Code Search",
        tags: ["code-search", "api", "osint", "source-code", "search"],
        link: "https://searchcode.com/",
        keywords: "source code api search engine development osint"
    },
    {
        name: "DNSDB",
        description: "Historical DNS data search platform. Query passive DNS records for threat intelligence.",
        category: "OSINT & Security",
        subcategory: "DNS Intelligence",
        tags: ["dns", "historical-data", "osint", "threat-intelligence", "search"],
        link: "https://www.dnsdb.info/",
        keywords: "historical dns data search threat intelligence"
    },
    {
        name: "FullHunt",
        description: "Attack surface discovery platform. Continuous monitoring and security assessment tool.",
        category: "OSINT & Security",
        subcategory: "Attack Surface",
        tags: ["security", "attack-surface", "monitoring", "discovery", "assessment"],
        link: "https://fullhunt.io/",
        keywords: "attack surface discovery platform security monitoring"
    },
    {
        name: "VirusTotal",
        description: "Malware analysis and file scanning service. Analyze suspicious files and URLs with 70+ antivirus engines.",
        category: "OSINT & Security",
        subcategory: "Malware Analysis",
        tags: ["malware", "antivirus", "scanning", "security", "analysis"],
        link: "https://www.virustotal.com/",
        keywords: "malware analysis file scanning virus antivirus"
    },
    {
        name: "DNSDumpster",
        description: "DNS reconnaissance and research tool. Discover hosts and subdomains for security assessment.",
        category: "OSINT & Security",
        subcategory: "DNS Recon",
        tags: ["dns", "recon", "osint", "subdomains", "security"],
        link: "https://dnsdumpster.com/",
        keywords: "dns recon research tool subdomains discovery"
    },
    {
        name: "Merlin AI",
        description: "Free ChatGPT-4 access via browser extension. AI assistant for browsing, writing, and research.",
        category: "AI Assistants",
        subcategory: "Browser Extensions",
        tags: ["ai", "chatgpt", "free", "browser-extension", "assistant"],
        link: "#",
        keywords: "free chatgpt 4 ai assistant browser extension"
    },
    {
        name: "Blink AI",
        description: "Free animated captions for videos. AI-powered subtitle generation with engaging animations.",
        category: "Video Tools",
        subcategory: "Captions",
        tags: ["ai", "captions", "animated", "video", "free"],
        link: "#",
        keywords: "free animated captions ai video subtitles"
    },
    {
        name: "AiTopTool",
        description: "AI tool finder. Discover the perfect AI tool for any task or use case.",
        category: "AI Directories",
        subcategory: "Tool Finder",
        tags: ["ai", "directory", "finder", "tools", "search"],
        link: "#",
        keywords: "find ai tool anything directory search"
    },
    {
        name: "Typito",
        description: "Translate videos for free with AI. Add subtitles and translate to multiple languages.",
        category: "Video Tools",
        subcategory: "Translation",
        tags: ["video", "translation", "subtitles", "ai", "free"],
        link: "#",
        keywords: "translate videos free ai subtitles languages"
    },
    {
        name: "TopApps.ai",
        description: "Collection of 900+ free AI tools organized by category. Comprehensive AI tools directory.",
        category: "AI Directories",
        subcategory: "Tool Collections",
        tags: ["ai", "directory", "tools", "free", "collection"],
        link: "#",
        keywords: "900 free ai tools directory collection categories"
    },
    {
        name: "Piggy.to",
        description: "Create amazing Instagram stories with AI-powered templates and effects.",
        category: "Social Media Tools",
        subcategory: "Instagram",
        tags: ["instagram", "stories", "ai", "templates", "social-media"],
        link: "#",
        keywords: "instagram stories create amazing ai templates"
    },
    {
        name: "Undesign",
        description: "Free AI design toolkit. Collection of design resources, tools, and assets for creatives.",
        category: "Design Tools",
        subcategory: "Toolkits",
        tags: ["design", "toolkit", "free", "resources", "ai"],
        link: "#",
        keywords: "free ai design toolkit resources assets"
    },
    {
        name: "TweetGPT",
        description: "Auto-respond to tweets with AI. Chrome extension for intelligent Twitter engagement.",
        category: "Social Media Tools",
        subcategory: "Twitter",
        tags: ["twitter", "ai", "automation", "chrome-extension", "engagement"],
        link: "#",
        keywords: "auto respond tweets ai twitter engagement"
    },
    {
        name: "Startup.ai",
        description: "AI-powered business idea generator and validation tool. Perfect for entrepreneurs starting new ventures.",
        category: "Business Tools",
        subcategory: "Idea Generation",
        tags: ["business", "startup", "ai", "ideas", "validation"],
        link: "#",
        keywords: "business idea generator ai startup validation"
    },
    {
        name: "Business Name Generator",
        description: "AI tool for generating creative and available business names with domain checking.",
        category: "Business Tools",
        subcategory: "Naming",
        tags: ["business", "naming", "generator", "ai", "domains"],
        link: "#",
        keywords: "business name generator ai creative domains"
    },
    {
        name: "Durable.ai",
        description: "Build a complete website with AI in 30 seconds. Automated business website generator.",
        category: "AI Website Builders",
        subcategory: "Quick Builders",
        tags: ["ai", "website-builder", "fast", "automated", "business"],
        link: "#",
        keywords: "build website ai 30 seconds automated business"
    },
    {
        name: "Freenom",
        description: "Free domain registration service. Get .tk, .ml, .ga, .cf, and .gq domains at no cost.",
        category: "Web Hosting",
        subcategory: "Domains",
        tags: ["domains", "free", "registration", "web-hosting", "tld"],
        link: "#",
        keywords: "free domain registration tk ml ga cf gq"
    },
    {
        name: "Gumroad",
        description: "Sell digital products directly to your audience. Simple e-commerce platform for creators.",
        category: "E-commerce",
        subcategory: "Digital Products",
        tags: ["ecommerce", "digital-products", "selling", "creators", "platform"],
        link: "#",
        keywords: "sell digital products gumroad ecommerce creators"
    },
    {
        name: "Stan Store",
        description: "Create your own storefront to sell products and services. All-in-one creator commerce platform.",
        category: "E-commerce",
        subcategory: "Creator Platforms",
        tags: ["ecommerce", "storefront", "creators", "products", "services"],
        link: "#",
        keywords: "creator storefront sell products services commerce"
    },
    {
        name: "Stripe",
        description: "Online payment processing platform. Accept payments, manage subscriptions, and handle transactions.",
        category: "Payment Processing",
        subcategory: "Payment Gateways",
        tags: ["payments", "stripe", "processing", "subscriptions", "transactions"],
        link: "#",
        keywords: "payment processing stripe online transactions subscriptions"
    },
    {
        name: "Make.com",
        description: "Visual workflow automation platform. Connect apps and automate complex processes without code.",
        category: "Automation Tools",
        subcategory: "Workflow Automation",
        tags: ["automation", "workflow", "no-code", "integrations", "visual"],
        link: "#",
        keywords: "automation workflow visual no-code integrations make"
    },
    {
        name: "Virality AI",
        description: "Generate viral content ideas with AI. Analyze trends and create engaging social media content.",
        category: "Marketing Tools",
        subcategory: "Content Ideas",
        tags: ["ai", "viral", "content", "ideas", "social-media"],
        link: "https://virality.ai/",
        keywords: "viral content ideas ai social media trends"
    },
    {
        name: "AnswerThePublic",
        description: "Search listening tool. Discover what people are asking about your topic or keyword.",
        category: "SEO & Marketing",
        subcategory: "Keyword Research",
        tags: ["seo", "keywords", "research", "questions", "content"],
        link: "#",
        keywords: "keyword research questions content ideas seo"
    },
    {
        name: "AlsoAsked",
        description: "Discover what people also ask on Google. Visualize search intent and content opportunities.",
        category: "SEO & Marketing",
        subcategory: "Content Research",
        tags: ["seo", "content", "research", "google", "questions"],
        link: "#",
        keywords: "people also ask google seo content research"
    },
    {
        name: "Ahrefs",
        description: "Comprehensive SEO toolset. Backlink analysis, keyword research, and competitor insights.",
        category: "SEO & Marketing",
        subcategory: "SEO Tools",
        tags: ["seo", "backlinks", "keywords", "analysis", "research"],
        link: "#",
        keywords: "seo tools backlinks keywords ahrefs analysis"
    },
    {
        name: "Portent Ideas",
        description: "Content idea generator. Get creative blog post and article title suggestions.",
        category: "Content Tools",
        subcategory: "Idea Generation",
        tags: ["content", "ideas", "generator", "titles", "blog"],
        link: "#",
        keywords: "content idea generator blog titles creative"
    },
    {
        name: "Deap Market",
        description: "Market research and trend analysis platform. Discover emerging markets and opportunities.",
        category: "Business Tools",
        subcategory: "Market Research",
        tags: ["market-research", "trends", "analysis", "business", "insights"],
        link: "#",
        keywords: "market research trends analysis business opportunities"
    },
    {
        name: "ContentIdeas.io",
        description: "AI-powered content idea generator. Find trending topics and create content that ranks.",
        category: "Content Tools",
        subcategory: "Idea Generation",
        tags: ["content", "ideas", "ai", "trending", "seo"],
        link: "#",
        keywords: "content ideas ai generator trending topics seo"
    },
    {
        name: "Ubersuggest",
        description: "Free SEO tool by Neil Patel. Keyword research, site audit, and competitor analysis.",
        category: "SEO & Marketing",
        subcategory: "SEO Tools",
        tags: ["seo", "keywords", "free", "analysis", "ubersuggest"],
        link: "#",
        keywords: "free seo tool ubersuggest keywords analysis"
    },
    {
        name: "Nexunom",
        description: "Business intelligence and analytics platform for data-driven decision making.",
        category: "Business Tools",
        subcategory: "Analytics",
        tags: ["analytics", "business-intelligence", "data", "insights", "reporting"],
        link: "#",
        keywords: "business intelligence analytics data insights reporting"
    },
    {
        name: "Marketing Miner",
        description: "SEO and marketing data extraction tool. Bulk SEO checks and competitive analysis.",
        category: "SEO & Marketing",
        subcategory: "SEO Tools",
        tags: ["seo", "marketing", "data", "analysis", "bulk-checks"],
        link: "#",
        keywords: "seo marketing data extraction bulk checks analysis"
    },
    {
        name: "HashtagStack",
        description: "Instagram hashtag generator and analytics. Find the best hashtags for your posts.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "instagram", "generator", "analytics", "social-media"],
        link: "#",
        keywords: "hashtag generator instagram analytics social media"
    },
    {
        name: "GravTag",
        description: "Trending hashtag finder for social media. Boost engagement with data-driven tag suggestions.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "trending", "social-media", "analytics", "engagement"],
        link: "#",
        keywords: "trending hashtags social media engagement analytics"
    },
    {
        name: "AllHashtag",
        description: "Generate top, random, and live hashtags for Instagram, Twitter, and more.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "generator", "instagram", "twitter", "social-media"],
        link: "#",
        keywords: "hashtag generator instagram twitter social media"
    },
    {
        name: "Hashtag Expert",
        description: "Professional hashtag research and strategy tool for social media growth.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "research", "strategy", "social-media", "growth"],
        link: "#",
        keywords: "hashtag research strategy social media growth expert"
    },
    {
        name: "HashtagMeNow",
        description: "Quick hashtag suggestions based on your content and niche.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "suggestions", "quick", "content", "niche"],
        link: "#",
        keywords: "hashtag suggestions quick content niche social"
    },
    {
        name: "Sistrix Hashtag",
        description: "Advanced hashtag analytics and performance tracking tool.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "analytics", "tracking", "performance", "social-media"],
        link: "#",
        keywords: "hashtag analytics performance tracking social media"
    },
    {
        name: "MetaHashtags",
        description: "Hashtag generator with real-time trends and engagement predictions.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "trends", "real-time", "predictions", "engagement"],
        link: "#",
        keywords: "hashtag generator trends real-time engagement predictions"
    },
    {
        name: "Bing Bang Ram",
        description: "Hashtag research tool with competitive analysis and growth insights.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "research", "competitive", "growth", "insights"],
        link: "#",
        keywords: "hashtag research competitive analysis growth insights"
    },
    {
        name: "Leetags",
        description: "Smart hashtag combinations for maximum reach on social platforms.",
        category: "Social Media Tools",
        subcategory: "Hashtags",
        tags: ["hashtags", "combinations", "reach", "social-media", "smart"],
        link: "#",
        keywords: "smart hashtag combinations maximum reach social"
    },
    {
        name: "Canva",
        description: "Free graphic design platform. Create stunning visuals, presentations, and social media content.",
        category: "Design Tools",
        subcategory: "Graphic Design",
        tags: ["design", "graphics", "templates", "free", "social-media"],
        link: "#",
        keywords: "graphic design canva free templates social media"
    },
    {
        name: "GIMP",
        description: "Free and open-source image editor. Professional photo editing alternative to Photoshop.",
        category: "Design Tools",
        subcategory: "Photo Editing",
        tags: ["photo-editing", "free", "open-source", "gimp", "professional"],
        link: "#",
        keywords: "free photo editor gimp open-source photoshop alternative"
    },
    {
        name: "Figma",
        description: "Collaborative interface design tool. Design, prototype, and collaborate in real-time.",
        category: "Design Tools",
        subcategory: "UI/UX Design",
        tags: ["design", "ui", "ux", "collaboration", "prototyping"],
        link: "#",
        keywords: "ui ux design figma collaborative prototyping"
    },
    {
        name: "Photosea",
        description: "AI-powered photo editing tool. Enhance images with intelligent one-click edits.",
        category: "AI Image Tools",
        subcategory: "Photo Editing",
        tags: ["ai", "photo-editing", "enhancement", "one-click", "intelligent"],
        link: "#",
        keywords: "ai photo editing enhancement intelligent one-click"
    },
    {
        name: "PicMonkey",
        description: "Photo editor and design maker. Create graphics, touch up photos, and design templates.",
        category: "Design Tools",
        subcategory: "Photo Editing",
        tags: ["photo-editing", "design", "templates", "graphics", "online"],
        link: "#",
        keywords: "photo editor design maker templates graphics"
    },
    {
        name: "Adobe Spark",
        description: "Create graphics, web pages, and video stories with Adobe's free online tool.",
        category: "Design Tools",
        subcategory: "Content Creation",
        tags: ["adobe", "design", "video", "graphics", "web"],
        link: "#",
        keywords: "adobe spark graphics web pages video design"
    },
    {
        name: "VistaCreate",
        description: "Design platform with thousands of templates for social media, marketing, and more.",
        category: "Design Tools",
        subcategory: "Templates",
        tags: ["design", "templates", "social-media", "marketing", "graphics"],
        link: "#",
        keywords: "design templates social media marketing graphics"
    },
    {
        name: "Desygner",
        description: "Online graphic design tool with drag-and-drop simplicity for all skill levels.",
        category: "Design Tools",
        subcategory: "Graphic Design",
        tags: ["design", "graphics", "drag-drop", "online", "easy"],
        link: "#",
        keywords: "graphic design online drag-drop easy templates"
    },
    {
        name: "Krita",
        description: "Free and open-source painting program. Digital art creation for illustrators and artists.",
        category: "Design Tools",
        subcategory: "Digital Art",
        tags: ["digital-art", "painting", "free", "open-source", "illustration"],
        link: "#",
        keywords: "free digital art painting krita open-source illustration"
    },
    {
        name: "Glimpse",
        description: "Free open-source image editor. GIMP fork with modern interface and features.",
        category: "Design Tools",
        subcategory: "Photo Editing",
        tags: ["photo-editing", "free", "open-source", "glimpse", "modern"],
        link: "#",
        keywords: "free photo editor glimpse open-source modern"
    },
    {
        name: "Genially",
        description: "Create interactive content: presentations, infographics, games, and more.",
        category: "Productivity Tools",
        subcategory: "Interactive Content",
        tags: ["interactive", "presentations", "infographics", "content", "creation"],
        link: "#",
        keywords: "interactive content presentations infographics genially"
    },
    {
        name: "Polotno Studio",
        description: "Free online graphic design tool. Create designs with templates and editing features.",
        category: "Design Tools",
        subcategory: "Graphic Design",
        tags: ["design", "graphics", "online", "free", "templates"],
        link: "#",
        keywords: "online graphic design free templates polotno"
    },
    {
        name: "NotJustAnalytics",
        description: "Social media analytics platform. Track performance across multiple platforms.",
        category: "Analytics Tools",
        subcategory: "Social Media",
        tags: ["analytics", "social-media", "tracking", "performance", "insights"],
        link: "#",
        keywords: "social media analytics tracking performance insights"
    },
    {
        name: "Inflact",
        description: "Instagram analytics and growth tools. Hashtag generator, profile analysis, and more.",
        category: "Social Media Tools",
        subcategory: "Instagram Analytics",
        tags: ["instagram", "analytics", "growth", "hashtags", "tools"],
        link: "#",
        keywords: "instagram analytics growth tools hashtags inflact"
    },
    {
        name: "Creator Studio",
        description: "Meta's tool for managing Facebook and Instagram content. Schedule posts and view insights.",
        category: "Social Media Tools",
        subcategory: "Content Management",
        tags: ["facebook", "instagram", "meta", "scheduling", "management"],
        link: "#",
        keywords: "facebook instagram creator studio schedule manage"
    },
    {
        name: "Union Metrics",
        description: "Social media analytics for Instagram, Twitter, and Facebook with competitive insights.",
        category: "Analytics Tools",
        subcategory: "Social Media",
        tags: ["analytics", "social-media", "competitive", "insights", "tracking"],
        link: "#",
        keywords: "social media analytics competitive insights tracking"
    },
    {
        name: "Analisa.io",
        description: "Instagram and TikTok analytics. Profile analysis, hashtag tracking, and campaign insights.",
        category: "Social Media Tools",
        subcategory: "Analytics",
        tags: ["instagram", "tiktok", "analytics", "hashtags", "insights"],
        link: "#",
        keywords: "instagram tiktok analytics hashtags profile insights"
    },
    {
        name: "Pixlee",
        description: "Visual marketing platform. Collect and display user-generated content.",
        category: "Marketing Tools",
        subcategory: "UGC",
        tags: ["ugc", "visual-marketing", "content", "social-proof", "platform"],
        link: "#",
        keywords: "visual marketing ugc user-generated content social"
    },
    {
        name: "TapInfluence",
        description: "Influencer marketing platform. Connect brands with influencers and manage campaigns.",
        category: "Marketing Tools",
        subcategory: "Influencer Marketing",
        tags: ["influencer", "marketing", "campaigns", "platform", "brands"],
        link: "#",
        keywords: "influencer marketing platform campaigns brands connect"
    },
    {
        name: "Instrack",
        description: "Instagram profile and hashtag tracker. Monitor growth and engagement metrics.",
        category: "Social Media Tools",
        subcategory: "Instagram Tracking",
        tags: ["instagram", "tracking", "hashtags", "growth", "analytics"],
        link: "#",
        keywords: "instagram profile hashtag tracker growth analytics"
    },
    {
        name: "Toolzu",
        description: "Collection of free Instagram tools. Hashtag generator, bio creator, and more.",
        category: "Social Media Tools",
        subcategory: "Instagram Tools",
        tags: ["instagram", "tools", "free", "hashtags", "bio"],
        link: "#",
        keywords: "free instagram tools hashtags bio generator"
    },
    {
        name: "SocialStats",
        description: "Real-time social media statistics. Track follower counts and engagement across platforms.",
        category: "Analytics Tools",
        subcategory: "Social Media",
        tags: ["analytics", "social-media", "real-time", "statistics", "tracking"],
        link: "#",
        keywords: "social media statistics real-time tracking analytics"
    },
    {
        name: "Visme",
        description: "Create presentations, infographics, and visual content with drag-and-drop editor.",
        category: "Productivity Tools",
        subcategory: "Visual Content",
        tags: ["presentations", "infographics", "visual", "content", "design"],
        link: "#",
        keywords: "presentations infographics visual content visme design"
    },
    {
        name: "PictoChart",
        description: "Infographic maker. Create professional infographics, presentations, and reports.",
        category: "Design Tools",
        subcategory: "Infographics",
        tags: ["infographics", "design", "presentations", "reports", "visual"],
        link: "#",
        keywords: "infographic maker presentations reports visual design"
    },
    {
        name: "Venngage",
        description: "Infographic and report design tool with professional templates.",
        category: "Design Tools",
        subcategory: "Infographics",
        tags: ["infographics", "reports", "design", "templates", "professional"],
        link: "#",
        keywords: "infographic report design templates professional venngage"
    },
    {
        name: "Snappa",
        description: "Quick graphic design tool. Create social media graphics, ads, and blog images.",
        category: "Design Tools",
        subcategory: "Graphic Design",
        tags: ["design", "graphics", "social-media", "ads", "quick"],
        link: "#",
        keywords: "graphic design quick social media ads snappa"
    },
    {
        name: "Google Charts",
        description: "Free charting library by Google. Create interactive charts for web applications.",
        category: "Development Tools",
        subcategory: "Data Visualization",
        tags: ["charts", "google", "visualization", "free", "interactive"],
        link: "#",
        keywords: "google charts visualization interactive free library"
    },
    {
        name: "Visua.ly",
        description: "Content and infographic creation platform with professional designers.",
        category: "Design Tools",
        subcategory: "Infographics",
        tags: ["infographics", "content", "design", "professional", "platform"],
        link: "#",
        keywords: "infographic content design professional platform visually"
    },
    {
        name: "Datamatic.io",
        description: "Data visualization and chart creation tool for business analytics.",
        category: "Analytics Tools",
        subcategory: "Data Visualization",
        tags: ["data-visualization", "charts", "analytics", "business", "reporting"],
        link: "#",
        keywords: "data visualization charts analytics business reporting"
    },
    {
        name: "RAW Graphs",
        description: "Open-source data visualization framework. Create custom charts from spreadsheet data.",
        category: "Design Tools",
        subcategory: "Data Visualization",
        tags: ["data-visualization", "charts", "open-source", "spreadsheet", "custom"],
        link: "#",
        keywords: "data visualization open-source charts spreadsheet custom"
    },
    {
        name: "Pexels",
        description: "Free stock photos and videos. High-quality media for commercial and personal use.",
        category: "Media Resources",
        subcategory: "Stock Photos",
        tags: ["stock-photos", "free", "videos", "royalty-free", "media"],
        link: "#",
        keywords: "free stock photos videos royalty-free pexels"
    },
    {
        name: "Unsplash",
        description: "Beautiful free images and photos for download. Community-driven stock photography.",
        category: "Media Resources",
        subcategory: "Stock Photos",
        tags: ["stock-photos", "free", "photography", "royalty-free", "community"],
        link: "#",
        keywords: "free images photos stock unsplash royalty-free"
    },
    {
        name: "Mixkit",
        description: "Free stock video clips, music tracks, and sound effects for creators.",
        category: "Media Resources",
        subcategory: "Stock Videos",
        tags: ["stock-videos", "free", "music", "sound-effects", "media"],
        link: "#",
        keywords: "free stock videos music sound effects mixkit"
    },
    {
        name: "StockSnap.io",
        description: "Thousands of high-resolution stock photos added weekly. No attribution required.",
        category: "Media Resources",
        subcategory: "Stock Photos",
        tags: ["stock-photos", "free", "high-resolution", "royalty-free", "no-attribution"],
        link: "#",
        keywords: "free stock photos high-resolution no attribution"
    },
    {
        name: "StockVault",
        description: "Free stock photos, textures, and graphics for creative projects.",
        category: "Media Resources",
        subcategory: "Stock Photos",
        tags: ["stock-photos", "free", "textures", "graphics", "creative"],
        link: "#",
        keywords: "free stock photos textures graphics stockvault"
    },
    {
        name: "Pixabay",
        description: "Over 2 million+ free stock images, videos, and music. No attribution required.",
        category: "Media Resources",
        subcategory: "Stock Media",
        tags: ["stock-photos", "videos", "music", "free", "royalty-free"],
        link: "#",
        keywords: "free stock images videos music pixabay royalty-free"
    },
    {
        name: "Imgur",
        description: "Image hosting and sharing platform. Upload and share images with communities.",
        category: "Media Tools",
        subcategory: "Image Hosting",
        tags: ["image-hosting", "sharing", "community", "upload", "free"],
        link: "#",
        keywords: "image hosting sharing imgur upload community"
    },
    {
        name: "Librestock",
        description: "Search engine for free stock photos. Searches across 40+ free photo websites.",
        category: "Media Resources",
        subcategory: "Stock Photos",
        tags: ["stock-photos", "search-engine", "free", "multiple-sources", "aggregator"],
        link: "#",
        keywords: "free stock photos search engine aggregator librestock"
    },
    {
        name: "GenCraft",
        description: "AI art generator. Create unique images and artwork from text descriptions.",
        category: "AI Image Tools",
        subcategory: "Image Generation",
        tags: ["ai", "art-generation", "text-to-image", "creative", "unique"],
        link: "#",
        keywords: "ai art generator text-to-image creative gencraft"
    },
    {
        name: "Meta Business Suite",
        description: "Manage Facebook and Instagram business accounts. Schedule posts, view insights, and respond to messages.",
        category: "Social Media Tools",
        subcategory: "Management",
        tags: ["facebook", "instagram", "meta", "management", "scheduling"],
        link: "#",
        keywords: "facebook instagram meta business suite schedule manage"
    },
    {
        name: "Combin Scheduler",
        description: "Instagram scheduling and growth tool. Plan posts, analyze performance, and grow followers.",
        category: "Social Media Tools",
        subcategory: "Instagram Scheduling",
        tags: ["instagram", "scheduling", "growth", "planning", "analytics"],
        link: "#",
        keywords: "instagram scheduler growth planning analytics combin"
    },
    {
        name: "Tailwind",
        description: "Social media scheduling for Pinterest and Instagram. Smart scheduling and analytics.",
        category: "Social Media Tools",
        subcategory: "Scheduling",
        tags: ["pinterest", "instagram", "scheduling", "smart", "analytics"],
        link: "#",
        keywords: "pinterest instagram scheduler smart analytics tailwind"
    },
    {
        name: "Buffer",
        description: "Social media management platform. Schedule posts, analyze performance across all platforms.",
        category: "Social Media Tools",
        subcategory: "Management",
        tags: ["social-media", "scheduling", "analytics", "management", "multi-platform"],
        link: "#",
        keywords: "social media management schedule analytics buffer"
    },
    {
        name: "CircleBoom",
        description: "Twitter management and scheduling tool. Clean followers, schedule tweets, and analyze accounts.",
        category: "Social Media Tools",
        subcategory: "Twitter Tools",
        tags: ["twitter", "scheduling", "management", "analytics", "cleanup"],
        link: "#",
        keywords: "twitter management scheduler analytics circleboom cleanup"
    },
    {
        name: "SocialChamp",
        description: "Social media scheduling for multiple platforms. Bulk upload and auto-posting features.",
        category: "Social Media Tools",
        subcategory: "Scheduling",
        tags: ["social-media", "scheduling", "bulk", "multi-platform", "automation"],
        link: "#",
        keywords: "social media scheduler bulk multi-platform automation"
    },
    {
        name: "Divvit",
        description: "Social media scheduler and content planner for teams and agencies.",
        category: "Social Media Tools",
        subcategory: "Team Scheduling",
        tags: ["social-media", "scheduling", "team", "planning", "agencies"],
        link: "#",
        keywords: "social media scheduler team agencies planning divvit"
    },
    {
        name: "Planable",
        description: "Social media collaboration and approval workflow platform for teams.",
        category: "Social Media Tools",
        subcategory: "Collaboration",
        tags: ["social-media", "collaboration", "approval", "workflow", "teams"],
        link: "#",
        keywords: "social media collaboration approval workflow teams"
    },
    {
        name: "CoSchedule",
        description: "Marketing calendar and social media scheduler. Organize all marketing in one place.",
        category: "Marketing Tools",
        subcategory: "Planning",
        tags: ["marketing", "calendar", "scheduling", "organization", "planning"],
        link: "#",
        keywords: "marketing calendar scheduler organization planning coschedule"
    },
    {
        name: "Vidyo AI",
        description: "AI-powered video repurposing. Turn long videos into short clips for social media.",
        category: "AI Video Tools",
        subcategory: "Video Editing",
        tags: ["ai", "video", "repurposing", "clips", "social-media"],
        link: "#",
        keywords: "ai video repurposing clips social media vidyo"
    },
    {
        name: "Predis AI",
        description: "AI social media content creator. Generate posts, captions, and hashtags automatically.",
        category: "AI Content Tools",
        subcategory: "Social Media",
        tags: ["ai", "social-media", "content", "captions", "hashtags"],
        link: "#",
        keywords: "ai social media content creator captions hashtags"
    },
    {
        name: "Upscayl",
        description: "Free AI image upscaler. Enhance image resolution using machine learning.",
        category: "AI Image Tools",
        subcategory: "Image Enhancement",
        tags: ["ai", "upscaling", "image-enhancement", "free", "resolution"],
        link: "https://upscayl.org/",
        keywords: "ai image upscaler enhance resolution free upscayl"
    },
    {
        name: "PicFinder AI",
        description: "AI-powered image search and discovery tool. Find similar images and visual content.",
        category: "AI Image Tools",
        subcategory: "Image Search",
        tags: ["ai", "image-search", "discovery", "visual", "similar"],
        link: "#",
        keywords: "ai image search discovery visual similar picfinder"
    },
    {
        name: "Scribe",
        description: "Automatically create step-by-step guides. Capture processes and generate documentation.",
        category: "Productivity Tools",
        subcategory: "Documentation",
        tags: ["documentation", "guides", "automation", "tutorials", "processes"],
        link: "#",
        keywords: "automatic step-by-step guides documentation scribe"
    },
    {
        name: "Neural Love",
        description: "AI-powered image enhancement, upscaling, and restoration tool.",
        category: "AI Image Tools",
        subcategory: "Image Enhancement",
        tags: ["ai", "enhancement", "upscaling", "restoration", "images"],
        link: "#",
        keywords: "ai image enhancement upscaling restoration neural"
    },
    {
        name: "Bardeen",
        description: "Browser automation tool. Automate repetitive tasks without code.",
        category: "Productivity Tools",
        subcategory: "Automation",
        tags: ["automation", "browser", "no-code", "productivity", "tasks"],
        link: "#",
        keywords: "browser automation no-code productivity bardeen tasks"
    },
    {
        name: "SendFame",
        description: "Create AI celebrity video messages. Fun personalized video generator.",
        category: "AI Video Tools",
        subcategory: "Fun Tools",
        tags: ["ai", "video", "celebrity", "fun", "personalized"],
        link: "#",
        keywords: "ai celebrity video messages personalized fun"
    },
    {
        name: "TextBlaze",
        description: "Text expansion and template tool. Type faster with keyboard shortcuts and snippets.",
        category: "Productivity Tools",
        subcategory: "Text Tools",
        tags: ["text-expansion", "productivity", "templates", "shortcuts", "snippets"],
        link: "#",
        keywords: "text expansion templates shortcuts productivity snippets"
    },
    {
        name: "LyteNyte Grid",
        description: "Next-generation React data grid. High-performance table component for handling millions of rows.",
        category: "Development Tools",
        subcategory: "React Components",
        tags: ["react", "data-grid", "performance", "table", "component"],
        link: "#",
        keywords: "react data grid performance table millions rows"
    },
    {
        name: "Design Wizard",
        description: "Graphic design tool with templates, images, and video editing capabilities.",
        category: "Design Tools",
        subcategory: "Graphic Design",
        tags: ["design", "templates", "video", "graphics", "editing"],
        link: "#",
        keywords: "graphic design templates video editing wizard"
    },
    {
        name: "Motosha",
        description: "Motion design and animation platform for creating engaging visual content.",
        category: "Design Tools",
        subcategory: "Motion Design",
        tags: ["motion-design", "animation", "visual", "content", "creative"],
        link: "#",
        keywords: "motion design animation visual content motosha"
    },
    {
        name: "Behance",
        description: "Adobe's creative portfolio platform. Showcase and discover creative work.",
        category: "Design Resources",
        subcategory: "Portfolio",
        tags: ["portfolio", "creative", "showcase", "adobe", "inspiration"],
        link: "#",
        keywords: "creative portfolio showcase adobe behance inspiration"
    },
    {
        name: "ImageSearchMan",
        description: "Reverse image search tool. Find image sources and similar pictures online.",
        category: "Search Tools",
        subcategory: "Image Search",
        tags: ["reverse-search", "images", "search-tool", "sources", "similar"],
        link: "#",
        keywords: "reverse image search find sources similar pictures"
    }

];

// Export database
window.TOOLS_DB = toolsDatabase;

// Helper functions
window.DB_HELPERS = {

    // Get all tools
    getAllTools: () => toolsDatabase,

    // Get tool by name
    getToolByName: (name) => {
        return toolsDatabase.find(tool =>
            tool.name.toLowerCase() === name.toLowerCase()
        );
    },

    // Get all categories
    getCategories: () => {
        const categories = new Set(toolsDatabase.map(tool => tool.category));
        return ['All Categories', ...Array.from(categories).sort()];
    },

    // Get tools by category
    getToolsByCategory: (category) => {
        if (category === 'All Categories') return toolsDatabase;
        return toolsDatabase.filter(tool => tool.category === category);
    },

    // Search tools
    searchTools: (query) => {
        if (!query || query.trim() === '') return toolsDatabase;

        const searchTerm = query.toLowerCase().trim();

        return toolsDatabase.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.category.toLowerCase().includes(searchTerm) ||
                tool.subcategory.toLowerCase().includes(searchTerm) ||
                tool.keywords.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        });
    },

    // Get random tools
    getRandomTools: (count = 6) => {
        const shuffled = [...toolsDatabase].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Get featured tools (first 6)
    getFeaturedTools: () => {
        return toolsDatabase.slice(0, 6);
    }
};