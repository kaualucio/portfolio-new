import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

type Lang = 'pt' | 'en'

const translations = {
  pt: {
    sidebarLabel: 'páginas',
    nav: {
      index: '00. índice',
      about: '01. sobre',
      stack: '02. stack',
      projects: '03. projetos',
      writing: '04. escritos',
      contact: '05. contato',
    },
    eyebrow: 'software engineer - personal saas developer',
    heroTitle: 'Kauã Lúcio — Desenvolvedor de Web',
    lede: (
      <>
        Construo software na web. Vim do frontend, estou indo pro backend. De propósito. Claude Code é meu <i>pair programming</i>; minha regra é não subir código que não consigo explicar. Nem o dele.
      </>
    ),
    sections: {
      about: 'sobre',
      stack: 'stack',
      projects: 'projetos',
      writing: 'escritos',
      contact: 'contato',
    },
    about: [
      'Meu nome é Kauã Lúcio. Programo desde 2018 — três desses seis anos como profissional. Hoje trabalho como desenvolvedor web na Colina Tech, onde boa parte do dia ainda passa por WordPress e NextJs. Mas minha stack principal é TypeScript, Node.js, Next.js e Tanstack no presente; Java no backend em horizonte próximo.',
      'A migração para backend Java é intencional. À noite é onde concentro os estudos e a criação de projetos pessoais, em paralelo ao trabalho — construindo fundação nova enquanto entrego em cima da antiga.',
      'Além de código, sou entusiasta de carreira, mercado tech e investimentos. Conteúdo? Ainda não. Mas estou de olho.',
    ],
    stack: [
      'React, NextJs, TypeScript, Wordpress — o dia a dia',
      'Python e Java (Spring Boot) - quando o problema pede',
      'Postgres, Redis, filas — persistência e assíncrono',
      'Docker, AWS, Cloudflare — um pouco de infra',
      'Vscode, Intellij — ferramenta importa',
    ],
    projects: [
      {
        name: 'projeto-um',
        meta: '2026 · ativo',
        desc: 'Descrição curta. O que é, para quem, por que existe. Uma linha resolve.',
        stack: ['typescript', 'postgres', 'docker'],
      },
      {
        name: 'projeto-dois',
        meta: '2025 · arquivado',
        desc: 'Ferramenta de linha de comando para automatizar aquilo que ninguém pediu.',
        stack: ['go', 'cli'],
      },
      {
        name: 'projeto-três',
        meta: '2025',
        desc: 'Experimento com sistemas embarcados e uma placa que quase queimou.',
        stack: ['rust', 'embedded'],
      },
    ],
    writing:
      'Ainda sem posts publicados. Quando escrever, aparece aqui — sem newsletter, sem popup pedindo email.',
    contactLabels: { email: 'email', github: 'github', linkedin: 'linkedin' },
    footerUpdated: 'última atualização · 2026-07-15',
    pagesAria: 'Páginas',
  },
  en: {
    sidebarLabel: 'pages',
    nav: {
      index: '00. index',
      about: '01. about',
      stack: '02. stack',
      projects: '03. projects',
      writing: '04. writing',
      contact: '05. contact',
    },
    eyebrow: 'software engineer - personal saas developer',
    heroTitle: 'Kauã Lúcio — Web Developer',
    lede: (
      <>
        I build software on the web. Came from frontend, heading to backend. On purpose. Claude Code is my <i>pair programming</i>; my rule is not to ship code I can't explain. Not even its code.
      </>
    ),
    sections: {
      about: 'about',
      stack: 'stack',
      projects: 'projects',
      writing: 'writing',
      contact: 'contact',
    },
    about: [
      'My name is Kauã Lúcio. I have been programming since 2018 — three of those six years professionally. Today I work as a web developer at Colina Tech, where most of my day still runs through WordPress and Next.js. But my main stack is TypeScript, Node.js, Next.js and Tanstack in the present; Java on the backend on the near horizon.',
      'The move to Java backend is intentional. Nights are where I focus on studying and building personal projects, in parallel with work — laying new foundations while shipping on top of the old one.',
      'Beyond code, I am an enthusiast of career, the tech market and investing. Content? Not yet. But I am watching.',
    ],
    stack: [
      'React, Next.js, TypeScript, WordPress — the day-to-day',
      'Python and Java (Spring Boot) — when the problem asks for it',
      'Postgres, Redis, queues — persistence and async',
      'Docker, AWS, Cloudflare — a bit of infra',
      'VSCode, IntelliJ — tools matter',
    ],
    projects: [
      {
        name: 'project-one',
        meta: '2026 · active',
        desc: 'Short description. What it is, who it is for, why it exists. One line solves it.',
        stack: ['typescript', 'postgres', 'docker'],
      },
      {
        name: 'project-two',
        meta: '2025 · archived',
        desc: 'Command-line tool to automate what nobody asked for.',
        stack: ['go', 'cli'],
      },
      {
        name: 'project-three',
        meta: '2025',
        desc: 'Experiment with embedded systems and a board that nearly burned.',
        stack: ['rust', 'embedded'],
      },
    ],
    writing:
      'No posts published yet. When I write, it shows up here — no newsletter, no popup asking for your email.',
    contactLabels: { email: 'email', github: 'github', linkedin: 'linkedin' },
    footerUpdated: 'last update · 2026-07-15',
    pagesAria: 'Pages',
  },
} as const

function Home() {
  const [lang, setLang] = useState<Lang>('pt')
  const t = translations[lang]

  return (
    <div className="site-shell">
      <aside className="sidebar" aria-label={t.pagesAria}>
        <div className="sidebar__inner">
          <p className="sidebar__label">{t.sidebarLabel}</p>
          <nav className="sidebar__nav">
            <a className="is-active" href="#index">{t.nav.index}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#stack">{t.nav.stack}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#writing">{t.nav.writing}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
        </div>
      </aside>

      <main className="main">
        <div className="content">
          <div className="status-bar">
            <span className="prompt">whoami</span>
            <span className="status-bar__right">
              <span>kauã lucio · 2026</span>
              <span className="lang-switch" role="group" aria-label="Language">
                <button
                  type="button"
                  className={lang === 'pt' ? 'is-active' : ''}
                  onClick={() => setLang('pt')}
                  aria-pressed={lang === 'pt'}
                >
                  PT
                </button>
                <span aria-hidden="true">|</span>
                <button
                  type="button"
                  className={lang === 'en' ? 'is-active' : ''}
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
              </span>
            </span>
          </div>

          <header className="hero" id="index">
            <div className="avatar" aria-hidden="true">kl</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lede">{t.lede}</p>
          </header>

          <section className="section" id="about" aria-labelledby="about-title">
            <div className="section-head">
              <span className="section-id">01.</span>
              <h2 id="about-title">{t.sections.about}</h2>
            </div>
            <div className="body-copy">
              {t.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="section" id="stack" aria-labelledby="stack-title">
            <div className="section-head">
              <span className="section-id">02.</span>
              <h2 id="stack-title">{t.sections.stack}</h2>
            </div>
            <ul className="checklist">
              {t.stack.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section" id="projects" aria-labelledby="projects-title">
            <div className="section-head">
              <span className="section-id">03.</span>
              <h2 id="projects-title">{t.sections.projects}</h2>
            </div>
            <ul className="project-list">
              {t.projects.map((p, i) => (
                <li key={i} className="project">
                  <div className="project__head">
                    <a className="project__name" href="#">{p.name}</a>
                    <span className="project__meta">{p.meta}</span>
                  </div>
                  <p className="project__desc">{p.desc}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="section" id="writing" aria-labelledby="writing-title">
            <div className="section-head">
              <span className="section-id">04.</span>
              <h2 id="writing-title">{t.sections.writing}</h2>
            </div>
            <div className="body-copy">
              <p>{t.writing}</p>
            </div>
          </section>

          <section className="section" id="contact" aria-labelledby="contact-title">
            <div className="section-head">
              <span className="section-id">05.</span>
              <h2 id="contact-title">{t.sections.contact}</h2>
            </div>
            <ul className="contact-list">
              <li>
                <span className="k">{t.contactLabels.email}</span>
                <a href="mailto:kauadefreitas.s992@gmail.com">kauadefreitas.s992@gmail.com</a>
              </li>
              <li>
                <span className="k">{t.contactLabels.github}</span>
                <a href="https://github.com/kaualucio" target="_blank" rel="noopener noreferrer">
                  github.com/kaualucio
                </a>
              </li>
              <li>
                <span className="k">{t.contactLabels.linkedin}</span>
                <a href="https://www.linkedin.com/in/kaualucio/" target="_blank" rel="noopener noreferrer">/in/kaualucio</a>
              </li>
            </ul>
          </section>

          <footer className="footer">
            <span>kaualucio.dev</span>
            <span>{t.footerUpdated}</span>
          </footer>
        </div>
      </main>
    </div>
  )
}
