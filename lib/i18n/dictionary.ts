export type Language = 'en' | 'zh';

export interface Dictionary {
  nav: {
    about: string;
    philosophy: string;
    approach: string;
    focus: string;
    portfolio: string;
    insights: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheading: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  philosophy: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  approach: {
    title: string;
    items: string[];
  };
  focus: {
    title: string;
    items: string[];
  };
  portfolio: {
    title: string;
    description: string;
    projects: Array<{
      name: string;
      category: string;
      year: string;
    }>;
  };
  insights: {
    title: string;
    description: string;
    articles: Array<{
      title: string;
      date: string;
      excerpt: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    location: string;
  };
  footer: {
    copyright: string;
  };
}

export const dictionary: Record<Language, Dictionary> = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      philosophy: 'Philosophy',
      approach: 'Approach',
      focus: 'Focus',
      portfolio: 'Portfolio',
      insights: 'Insights',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      headline: 'Discipline. Conviction. Long-Term Value.',
      subheading: 'We are a long-term oriented investment firm focused on identifying asymmetric opportunities across global markets through disciplined research and conviction-led decision making.',
      cta: 'Request an Intro',
    },
    // About Section
    about: {
      title: 'Who We Are',
      paragraph1: 'Nexa Capital is an independent investment firm with a global perspective.\nWe partner with founders, management teams, and institutions to build durable value over multi-year horizons.',
      paragraph2: 'Our approach combines fundamental research, risk discipline, and patience — allowing us to navigate market cycles with clarity and resilience.',
    },
    // Philosophy Section
    philosophy: {
      title: 'Our Philosophy',
      paragraph1: 'We believe that superior long-term returns are generated through discipline, not speculation.',
      paragraph2: 'Rather than pursuing short-term momentum, we focus on understanding underlying business fundamentals, structural trends, and downside risk — allowing conviction to compound over time.',
    },
    // Approach Section
    approach: {
      title: 'How We Invest',
      items: [
        'Fundamental, research-driven analysis',
        'Concentrated positions with asymmetric risk-reward',
        'Long-term holding periods',
        'Risk managed at portfolio level',
      ],
    },
    // Focus Section
    focus: {
      title: 'Investment Focus',
      items: [
        'Public Equities',
        'Technology & Innovation',
        'Cross-border Opportunities',
        'Structural Growth Themes',
        'Special Situations',
      ],
    },
    // Portfolio Section
    portfolio: {
      title: 'Portfolio',
      description: 'Our portfolio reflects a selective and high-conviction approach.\nWe prioritize quality, durability, and alignment over scale.',
      projects: [
        { name: 'Project Alpha', category: 'Technology', year: '2023' },
        { name: 'Project Beta', category: 'Innovation', year: '2023' },
        { name: 'Project Gamma', category: 'Special Situations', year: '2022' },
        { name: 'Project Delta', category: 'Growth', year: '2024' },
        { name: 'Project Epsilon', category: 'Cross-border', year: '2023' },
        { name: 'Project Zeta', category: 'Public Equities', year: '2024' },
      ],
    },
    // Insights Section
    insights: {
      title: 'Insights',
      description: 'Our insights share perspectives on markets, businesses, and long-term investment thinking.',
      articles: [
        {
          title: 'The Power of Patient Capital',
          date: 'December 2024',
          excerpt: 'Why long-term conviction creates sustainable value in volatile markets.',
        },
        {
          title: 'Structural Trends in Technology',
          date: 'November 2024',
          excerpt: 'Identifying durable technology themes beyond short-term cycles.',
        },
        {
          title: 'Risk Management in Growth Investing',
          date: 'October 2024',
          excerpt: 'Balancing asymmetric opportunity with portfolio discipline.',
        },
      ],
    },
    // Contact Section
    contact: {
      title: 'Contact',
      description: 'For partnership inquiries or long-term collaboration, please contact us at:',
      email: 'hello@nexacap.com',
      location: 'Singapore / Hong Kong',
    },
    // Footer
    footer: {
      copyright: '© Nexa Capital. All Rights Reserved.',
    },
  },
  zh: {
    // Navigation
    nav: {
      about: '关于我们',
      philosophy: '投资理念',
      approach: '投资方法',
      focus: '投资方向',
      portfolio: '投资组合',
      insights: '研究洞察',
      contact: '联系我们',
    },
    // Hero Section
    hero: {
      headline: '纪律 · 信念 · 长期价值',
      subheading: '我们是一家以长期主义为核心的投资机构，通过严谨研究与高度信念，在全球市场中寻找具备非对称回报潜力的机会。',
      cta: '预约沟通',
    },
    // About Section
    about: {
      title: '关于我们',
      paragraph1: 'Nexa Capital 是一家具有全球视野的独立投资机构。\n我们与优秀的创始人、管理团队及机构合作伙伴同行，致力于在长期周期中构建可持续价值。',
      paragraph2: '我们坚持以基本面研究为基础，以风险纪律为边界，以耐心为核心，在不同市场周期中保持清晰判断与长期韧性。',
    },
    // Philosophy Section
    philosophy: {
      title: '我们的投资理念',
      paragraph1: '我们相信，卓越的长期回报源于纪律，而非投机。',
      paragraph2: '相较于追逐短期波动，我们更关注企业基本面、结构性趋势以及潜在风险，通过长期信念的持续积累，实现价值的复利增长。',
    },
    // Approach Section
    approach: {
      title: '我们的投资方法',
      items: [
        '基于基本面的深度研究',
        '构建具备非对称收益结构的集中型组合',
        '长期持有，避免频繁交易',
        '从组合层面进行系统性风险管理',
      ],
    },
    // Focus Section
    focus: {
      title: '投资方向',
      items: [
        '上市公司股权投资',
        '科技与创新领域',
        '跨境与国际化机会',
        '结构性成长主题',
        '特殊机会与深度价值',
      ],
    },
    // Portfolio Section
    portfolio: {
      title: '投资组合',
      description: '我们的投资组合体现了高度选择性与长期信念。\n相比规模，我们更看重质量、持续性与价值共识。',
      projects: [
        { name: 'Alpha 项目', category: '科技创新', year: '2023' },
        { name: 'Beta 项目', category: '技术创新', year: '2023' },
        { name: 'Gamma 项目', category: '特殊机会', year: '2022' },
        { name: 'Delta 项目', category: '成长主题', year: '2024' },
        { name: 'Epsilon 项目', category: '跨境机会', year: '2023' },
        { name: 'Zeta 项目', category: '公开股权', year: '2024' },
      ],
    },
    // Insights Section
    insights: {
      title: '研究与洞察',
      description: '我们通过研究与洞察，分享对市场、企业与长期投资逻辑的思考。',
      articles: [
        {
          title: '耐心资本的力量',
          date: '2024年12月',
          excerpt: '为什么长期信念能在波动市场中创造可持续价值。',
        },
        {
          title: '科技领域的结构性趋势',
          date: '2024年11月',
          excerpt: '识别超越短期周期的持久技术主题。',
        },
        {
          title: '成长投资中的风险管理',
          date: '2024年10月',
          excerpt: '在投资组合纪律中平衡非对称机会。',
        },
      ],
    },
    // Contact Section
    contact: {
      title: '联系我们',
      description: '如需进一步了解或探讨长期合作，欢迎联系我们：',
      email: 'hello@nexacap.com',
      location: '新加坡 / 香港',
    },
    // Footer
    footer: {
      copyright: '© Nexa Capital 版权所有',
    },
  },
};
