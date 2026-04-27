import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Building2,
  CheckCircle2,
  CloudCog,
  Code2,
  Github,
  Globe2,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";
import "./styles.css";

const ecosystem = [
  {
    label: "AI 应用",
    name: "OpenBe.ai",
    href: "https://openbe.ai",
    body: "面向个人生活与效率管理的 AI 蜜蜂助手，覆盖对话、健康、记账、笔记和任务。",
    icon: Smartphone,
  },
  {
    label: "开源项目",
    name: "OpenBe.org",
    href: "https://openbe.org",
    body: "Swarm Intelligence AI Assistant，面向开发者、自托管和多智能体协作场景。",
    icon: Github,
  },
  {
    label: "公司服务",
    name: "OSGeek.cn",
    href: "https://osgeek.cn",
    body: "上海开源极客有限公司，承载 OpenBe 产品生态、工程服务和合规信息。",
    icon: Building2,
  },
];

const services = [
  {
    icon: Bot,
    title: "AI 产品工程",
    body: "从模型接入、工作流设计到移动端和后端交付，把 AI 能力变成可使用的产品。",
  },
  {
    icon: Code2,
    title: "开源项目建设",
    body: "围绕 OpenBe 生态沉淀开源基础设施、文档、部署方式和社区协作路径。",
  },
  {
    icon: CloudCog,
    title: "云端与私有化部署",
    body: "支持 API、数据库、Nginx、证书、监控和备份恢复，让服务上线后可长期维护。",
  },
  {
    icon: ShieldCheck,
    title: "数据与合规意识",
    body: "关注数据边界、账号权限、ICP备案、访问安全和服务恢复，不把上线当成终点。",
  },
];

const facts = [
  ["应用入口", "openbe.ai"],
  ["开源入口", "openbe.org"],
  ["公司域名", "osgeek.cn"],
  ["主体", "上海开源极客有限公司"],
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
          <a href="#ecosystem">生态</a>
          <a href="#openbe">OpenBe</a>
          <a href="#services">服务</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            OpenBe product ecosystem
          </p>
          <h1>上海开源极客有限公司</h1>
          <p className="lead">
            围绕 OpenBe 建设 AI 应用、开源智能体项目和可持续运行的工程服务。
            公司官网负责把产品入口、开源入口和服务信息放在一个清晰的品牌体系里。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://openbe.ai">
              进入 OpenBe.ai
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-action" href="https://openbe.org">
              查看 OpenBe.org
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="hero-board" aria-label="OpenBe 生态总览">
          <div className="board-main">
            <div className="board-header">
              <span>OSGeek Ecosystem</span>
              <Network size={18} />
            </div>
            <div className="board-grid">
              {facts.map(([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="phone-preview">
            <img src="/assets/openbe-screenshot.jpg" alt="OpenBe 应用界面截图" />
          </div>
          <div className="source-preview">
            <Boxes size={22} />
            <strong>Swarm Intelligence</strong>
            <span>Open source · Self-hosted · Integrations</span>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section ecosystem-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Ecosystem</p>
            <h2>三个入口，各自清楚。</h2>
            <p>公司官网不是重复应用页，而是把产品、开源项目和公司服务组织起来。</p>
          </div>
          <div className="ecosystem-grid">
            {ecosystem.map(({ label, name, href, body, icon: Icon }) => (
              <a className="ecosystem-card" href={href} key={name}>
                <div className="card-top">
                  <Icon size={22} />
                  <span>{label}</span>
                </div>
                <strong>{name}</strong>
                <p>{body}</p>
                <span className="card-link">
                  打开
                  <ArrowRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="openbe" className="section product-section">
        <div className="section-inner product-layout">
          <div className="product-media">
            <img src="/assets/openbe-screenshot.jpg" alt="OpenBe 应用功能截图" />
          </div>
          <div>
            <p className="section-kicker">OpenBe.ai</p>
            <h2>AI 蜜蜂助手是当前最重要的应用入口。</h2>
            <p>
              OpenBe 聚合 AI 对话、健康追踪、智能记账、笔记、任务管理和私密空间。
              OSGeek 官网会把它作为核心产品呈现，并持续连接下载、登录和后端服务。
            </p>
            <div className="inline-actions">
              <a href="https://openbe.ai/#download">
                下载应用
                <ArrowUpRight size={17} />
              </a>
              <a href="https://openbe.ai/login.html">
                登录 OpenBe
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="section-kicker">Capability</p>
            <h2>公司负责产品背后的工程能力。</h2>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, body }) => (
              <article className="service-card" key={title}>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section open-source-section">
        <div className="section-inner open-source-panel">
          <div>
            <p className="section-kicker">OpenBe.org</p>
            <h2>开源项目保留独立气质。</h2>
            <p>
              openbe.org 已经是黑金风格的开源项目页。公司官网只做清晰入口，不抢它的表达。
            </p>
          </div>
          <a className="github-card" href="https://github.com/OpenBe-AI/openbe">
            <Github size={24} />
            <strong>OpenBe on GitHub</strong>
            <span>Docs · Source · Community</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-inner contact-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>继续把 OpenBe 生态做扎实。</h2>
            <p>如果要把官网、应用、开源项目和服务器后端继续统一，我可以按这个方向继续接 GitHub 和 Vercel。</p>
          </div>
          <div className="contact-links">
            <a href="mailto:admin@openbe.ai">
              <Mail size={18} />
              admin@openbe.ai
            </a>
            <a href="https://openbe.ai">
              <Smartphone size={18} />
              openbe.ai
            </a>
            <a href="https://openbe.org">
              <Globe2 size={18} />
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
        <span>OpenBe ecosystem by OSGeek.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
