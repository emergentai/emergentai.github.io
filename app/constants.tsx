// TypeScript interfaces
export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  useCases: string[];
}

export interface CredibilityItem {
  type: 'location' | 'expertise' | 'approach' | 'partnership';
  title: string;
  description: string;
  icon?: string;
}

export interface ContactMethod {
  type: 'calendly' | 'email' | 'phone';
  label: string;
  value: string;
  primary?: boolean;
}

// Enhanced Navigation Routes
export const NavigationRoutes = {
  home: { name: "Home", href: "#hero" },
  capabilities: { name: "What We Build", href: "#capabilities" },
  whyUs: { name: "Why Us", href: "#why-us" },
  contact: { name: "Contact", href: "#contact" }
}

// AI Capabilities Data
export const AI_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'rag',
    title: 'RAG & Knowledge Systems',
    description: 'Transform your documents into intelligent, searchable knowledge bases that provide instant, accurate answers.',
    icon: '🧠',
    technologies: ['Vector Databases', 'Embeddings', 'Semantic Search'],
    useCases: ['Document Q&A', 'Knowledge Management', 'Research Assistance']
  },
  {
    id: 'agentic-workflows',
    title: 'Agentic Workflows',
    description: 'Autonomous AI agents that execute complex business processes and make intelligent decisions.',
    icon: '🤖',
    technologies: ['Multi-Agent Systems', 'Task Planning', 'Decision Trees'],
    useCases: ['Process Automation', 'Intelligent Routing', 'Task Orchestration']
  },
  {
    id: 'customer-service',
    title: 'Customer Service AI',
    description: '24/7 intelligent customer support that handles inquiries and escalates complex issues seamlessly.',
    icon: '💬',
    technologies: ['Natural Language Processing', 'Intent Recognition', 'Conversation Flow'],
    useCases: ['Live Chat Support', 'Ticket Routing', 'FAQ Automation']
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Turn raw data into actionable insights with AI-powered analytics and predictive modeling.',
    icon: '📊',
    technologies: ['Data Analysis', 'Predictive Modeling', 'Visualization'],
    useCases: ['Trend Analysis', 'Performance Metrics', 'Decision Support']
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Streamline operations by automating repetitive tasks and document processing workflows.',
    icon: '⚡',
    technologies: ['Document Processing', 'Workflow Engines', 'API Integration'],
    useCases: ['Document Processing', 'Email Automation', 'Data Entry']
  },
  {
    id: 'custom-solutions',
    title: 'Custom AI Solutions',
    description: 'Tailored AI implementations designed specifically for your unique business requirements.',
    icon: '🎯',
    technologies: ['Custom Models', 'API Development', 'System Integration'],
    useCases: ['Specialized Applications', 'Legacy Integration', 'Scalable Solutions']
  }
];

// Credibility Items
export const CREDIBILITY_ITEMS: CredibilityItem[] = [
  {
    type: 'location',
    title: 'Toronto-Based AI Lab',
    description: 'Local expertise with deep understanding of Canadian business needs and regulations.',
    icon: '🇨🇦'
  },
  {
    type: 'expertise',
    title: 'Technical Excellence',
    description: 'Advanced AI/ML capabilities using cutting-edge technologies and proven methodologies.',
    icon: '🔬'
  },
  {
    type: 'approach',
    title: 'Business-First Approach',
    description: 'Practical solutions focused on real ROI and measurable business outcomes.',
    icon: '💼'
  },
  {
    type: 'partnership',
    title: 'Partnership Model',
    description: 'Collaborative development with ongoing support and continuous improvement.',
    icon: '🤝'
  }
];

// Contact Methods
export const CONTACT_METHODS: ContactMethod[] = [
  {
    type: 'calendly',
    label: 'Book a Consultation',
    value: 'https://calendly.com/emergentai/intro',
    primary: true
  },
  {
    type: 'email',
    label: 'Email Us',
    value: 'mailto:info@emergentai.ca'
  }
];
    