import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Bot,
  Braces,
  Building2,
  CheckCircle2,
  CloudCog,
  Code2,
  Github,
  Globe2,
  Layers3,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Code2,
    title: "开源工程咨询",
    body: "围绕开源选型、架构设计、二次开发和长期维护，帮助团队把社区能力稳定落到生产系统。",
  },
  {
    icon: Bot,
    title: "AI 应用落地",
    body: "从模型接入、RAG、智能体流程到业务系统集成，交付可运行、可观测、可迭代的 AI 产品能力。",
  },
  {
    icon: CloudCog,
    title: "云原生与 DevOps",
    body: "建设自动化部署、容器化运行、监控告警和发布流水线，让产品迭代更快也更稳。",
  },
  {
    icon: ShieldCheck,
    title: "安全与私有化部署",
    body: "面向数据安全、权限边界和私有环境交付，设计更清晰的部署、备份、审计和恢复方案。",
  },
];

const stacks = [
  "Linux",
  "PocketBase",
  "React",
  "Vite",
  "Node.js",
  "Python",
  "Nginx",
  "Docker",
  "Kubernetes",
  "LLM API",
  "RAG",
  "CI/CD",
];

const process = [
  ["01", "识别问题", "梳理业务目标、现有系统、团队约束和交付优先级。"],
  ["02", "设计方案", "输出架构、技术选型、数据流、部署方式和风险清单。"],
  ["03", "工程实现", "用小步快跑的方式完成开发、联调、验收和上线。"],
  ["04", "持续维护", "沉淀文档、监控、备份和迭代计划，保证长期可运营。"],
];

function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame = 0;
    let pointer = { x: -1000, y: -1000 };
    let points = [];

    const reset = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(42, Math.min(86, Math.floor((width * height) / 15000)));
      points = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        r: 1.4 + (index % 3) * 0.45,
      }));
    };

    const draw = () => {
      frame = requestAnimationFrame(draw);
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#10221f");
      gradient.addColorStop(0.45, "#14372f");
      gradient.addColorStop(1, "#1f2f46");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.globalAlpha = 0.16;
      context.strokeStyle = "#f5c451";
      for (let x = -height; x < width; x += 54) {
        context.beginPath();
        context.moveTo(x, height);
        context.lineTo(x + height, 0);
        context.stroke();
      }
      context.globalAlpha = 1;

      points.forEach((point) => {
        const dx = point.x - pointer.x;
        const dy = point.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          point.vx += (dx / Math.max(distance, 1)) * 0.018;
          point.vy += (dy / Math.max(distance, 1)) * 0.018;
        }
        point.x += point.vx;
        point.y += point.vy;
        point.vx *= 0.992;
        point.vy *= 0.992;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));
      });

      points.forEach((a, index) => {
        for (let j = index + 1; j < points.length; j += 1) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 128) {
            context.strokeStyle = `rgba(134, 239, 172, ${0.24 * (1 - distance / 128)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      });

      points.forEach((point, index) => {
        context.fillStyle = index % 5 === 0 ? "#f6c453" : "#93f4c7";
        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fill();
      });
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const onPointerLeave = () => {
      pointer = { x: -1000, y: -1000 };
    };

    reset();
    draw();
    window.addEventListener("resize", reset);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", reset);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}

function App() {
  return (
    <main>
      <section className="hero">
        <NetworkCanvas />
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="上海开源极客有限公司">
            <span className="brand-mark">OS</span>
            <span>OSGeek</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#stack">技术</a>
            <a href="#contact">联系</a>
          </div>
        </nav>

        <div id="top" className="hero-content">
          <p className="eyebrow">
            <Building2 size={17} />
            上海开源极客有限公司
          </p>
          <h1>上海开源极客有限公司</h1>
          <p className="hero-copy">
            以开源技术为底座，帮助企业完成 AI 应用、云原生架构、工程平台和数字化产品的设计与交付。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              联系我们
              <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#services" aria-label="查看服务">
              <Layers3 size={18} />
              查看服务
            </a>
          </div>
        </div>

        <div className="hero-signal" aria-label="核心能力">
          <div>
            <strong>Open Source</strong>
            <span>开源生态咨询与工程化</span>
          </div>
          <div>
            <strong>AI Native</strong>
            <span>模型接入、智能体与知识库</span>
          </div>
          <div>
            <strong>Cloud Ready</strong>
            <span>自动化部署与稳定运行</span>
          </div>
        </div>
      </section>

      <section className="intro section-band">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-kicker">What we build</p>
            <h2>把好用的开源能力，变成可长期运行的产品系统。</h2>
          </div>
          <p>
            OSGeek 关注从技术选型到上线维护的完整链路。我们倾向于选择透明、可审计、可迁移的技术栈，
            用工程方法把原型、工具和业务流程沉淀为稳定服务。
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Services</p>
            <h2>核心服务</h2>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, body }) => (
              <article className="service-card" key={title}>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-band">
        <div className="section-inner stack-layout">
          <div className="terminal-panel">
            <div className="terminal-top">
              <TerminalSquare size={18} />
              <span>osgeek deploy</span>
            </div>
            <div className="terminal-lines">
              <span>analyze legacy service</span>
              <span>design api.osgeek.cn</span>
              <span>ship observable backend</span>
              <span>document recovery path</span>
            </div>
          </div>
          <div>
            <p className="section-kicker">Stack</p>
            <h2>面向交付的技术组合</h2>
            <p className="stack-copy">
              从轻量后端到复杂云原生系统，技术栈围绕可维护性、成本、性能和团队接手难度来选择。
            </p>
            <div className="stack-tags">
              {stacks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Process</p>
            <h2>合作流程</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, body]) => (
              <article className="process-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-band">
        <div className="section-inner contact-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>让系统更开放，也更可靠。</h2>
            <p>
              如果你正在规划新官网、后端 API、AI 产品或私有化部署，可以从一次技术梳理开始。
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:admin@openbe.ai">
              <Mail size={19} />
              admin@openbe.ai
            </a>
            <a href="https://osgeek.cn">
              <Globe2 size={19} />
              osgeek.cn
            </a>
            <a href="https://github.com/OpenBe-AI">
              <Github size={19} />
              GitHub
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
        <span>Open source engineering for practical products.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
