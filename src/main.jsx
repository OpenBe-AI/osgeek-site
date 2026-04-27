import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Github,
  Globe2,
  HeartPulse,
  LockKeyhole,
  Mail,
  Network,
  NotebookPen,
  PackageOpen,
  PanelsTopLeft,
  Sparkles,
  WalletCards,
} from "lucide-react";
import "./styles.css";

const productFeatures = [
  {
    icon: Bot,
    title: "AI 对话",
    body: "支持语音、图片、文件和多模型切换，把日常问题、工作想法和信息整理放在同一个入口。",
  },
  {
    icon: HeartPulse,
    title: "健康与蜜报",
    body: "整合步数、心率、睡眠和每日摘要，让生活状态被清晰记录，也能被 AI 温柔提醒。",
  },
  {
    icon: WalletCards,
    title: "智能财务",
    body: "自然语言记账、消费分类、贷款和大件追踪，减少琐碎记录带来的摩擦。",
  },
  {
    icon: NotebookPen,
    title: "笔记与任务",
    body: "会议记录、待办、日程和灵感沉淀相互连接，让行动线索不再散落。",
  },
];

const companyServices = [
  "AI 应用产品设计与工程落地",
  "开源项目孵化、维护和商业化支持",
  "云端 API、私有化部署与运维体系",
  "移动端、Web 与后端一体化交付",
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="上海开源极客有限公司">
          <img src="/assets/openbe-logo-512.png" alt="" />
          <span>OSGeek</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#openbe">OpenBe</a>
          <a href="#opensource">开源</a>
          <a href="#company">公司</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Building2 size={17} />
            上海开源极客有限公司
          </p>
          <h1>OpenBe 背后的产品与开源公司</h1>
          <p className="lead">
            我们建设 AI 生活助手、开源智能体基础设施和可长期运行的工程系统，让个人效率工具和企业级 AI 能力自然连接。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://openbe.ai">
              打开 OpenBe
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-action" href="https://openbe.org">
              OpenBe 开源项目
              <Github size={18} />
            </a>
          </div>
          <div className="quick-links" aria-label="产品入口">
            <a href="https://openbe.ai/#download">下载应用</a>
            <a href="https://openbe.ai/login.html">登录 OpenBe</a>
            <a href="https://github.com/OpenBe-AI/openbe">GitHub</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="OpenBe 应用预览">
          <div className="phone-shell">
            <img src="/assets/openbe-screenshot.jpg" alt="OpenBe 应用界面截图" />
          </div>
          <div className="bee-note">
            <Sparkles size={18} />
            <span>AI 蜜蜂助手生态</span>
          </div>
        </div>
      </section>

      <section id="openbe" className="product-band">
        <div className="section-inner product-intro">
          <div>
            <p className="section-kicker">OpenBe.ai</p>
            <h2>从一个应用开始，整理生活里的信息、健康、财务和行动。</h2>
          </div>
          <p>
            OpenBe 是我们正在打造的 AI 生活助手。它不是单一聊天窗口，而是把会话、蜜报、言之、财务、
            ToDo 和蜜语组合成一个可以日常使用的个人智能工作台。
          </p>
        </div>
        <div className="section-inner feature-grid">
          {productFeatures.map(({ icon: Icon, title, body }) => (
            <article className="feature-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="opensource" className="opensource-section">
        <div className="section-inner open-source-layout">
          <div>
            <p className="section-kicker">OpenBe.org</p>
            <h2>开源智能体基础设施，也属于 OpenBe 生态。</h2>
            <p>
              面向团队、开发者和私有化场景，OpenBe 开源项目关注多智能体协作、工具集成和数据所有权。
              它和 OpenBe 应用一起，组成从个人助手到工程基础设施的产品线。
            </p>
            <div className="opensource-actions">
              <a href="https://openbe.org">
                访问 openbe.org
                <ArrowUpRight size={17} />
              </a>
              <a href="https://github.com/OpenBe-AI/openbe">
                Star on GitHub
                <Github size={17} />
              </a>
            </div>
          </div>
          <div className="swarm-panel">
            <Network size={32} />
            <strong>Swarm Intelligence</strong>
            <span>Self-hosted · Integrations · Open Source</span>
            <code>curl -fsSL https://openbe.org/install.sh | bash</code>
          </div>
        </div>
      </section>

      <section id="company" className="company-section">
        <div className="section-inner company-layout">
          <div>
            <p className="section-kicker">OSGeek</p>
            <h2>上海开源极客有限公司</h2>
            <p>
              公司围绕 OpenBe 产品生态持续投入，也为客户提供 AI 应用、开源工程、云端部署和数字化产品的设计与交付。
            </p>
          </div>
          <div className="service-list">
            {companyServices.map((item) => (
              <div className="service-row" key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystem-section">
        <div className="section-inner ecosystem-grid">
          <a className="ecosystem-card app-card" href="https://openbe.ai">
            <PanelsTopLeft size={24} />
            <span>应用入口</span>
            <strong>OpenBe.ai</strong>
            <p>AI 蜜蜂助手，面向个人生活与效率管理。</p>
            <ArrowRight size={20} />
          </a>
          <a className="ecosystem-card source-card" href="https://openbe.org">
            <PackageOpen size={24} />
            <span>开源入口</span>
            <strong>OpenBe.org</strong>
            <p>Swarm Intelligence AI Assistant，面向开发者与自托管场景。</p>
            <ArrowRight size={20} />
          </a>
          <a className="ecosystem-card company-card" href="https://osgeek.cn">
            <Globe2 size={24} />
            <span>公司官网</span>
            <strong>OSGeek.cn</strong>
            <p>上海开源极客有限公司，承载产品、服务和合规信息。</p>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-inner contact-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>从 OpenBe 开始，继续把 AI 产品做扎实。</h2>
            <p>
              官网、应用、开源项目和后端服务可以在一个清晰的品牌体系里继续生长。
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:admin@openbe.ai">
              <Mail size={18} />
              admin@openbe.ai
            </a>
            <a href="https://openbe.ai">
              <Bot size={18} />
              openbe.ai
            </a>
            <a href="https://openbe.org">
              <Brain size={18} />
              openbe.org
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 上海开源极客有限公司</span>
        <a
          className="icp-link"
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noreferrer"
        >
          沪ICP备2024077870号-3
        </a>
        <span>OpenBe product ecosystem by OSGeek.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
