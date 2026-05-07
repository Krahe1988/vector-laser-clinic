import './vector-site.css'
import logoTopo from './assets/logo-topo.png'
import logoC from './assets/logocc.PNG'
import ultraformerImg from './assets/ultraformer.png'
import lavieenImg from './assets/lavieen.png'
import logoHorizontal from './assets/logo-horizontal.PNG'

import LandingLavieen from './LandingLavieen'



function LogoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 220 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roseGoldStable" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ddb38f" />
          <stop offset="100%" stopColor="#c18a61" />
        </linearGradient>
      </defs>
      <path d="M38 46L94 184L149 46" stroke="url(#roseGoldStable)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M145 33C173 42 190 63 193 94C196 129 177 160 150 182" stroke="url(#roseGoldStable)" strokeWidth="4" strokeLinecap="round" />
      <path d="M120 48C132 59 137 71 137 86" stroke="url(#roseGoldStable)" strokeWidth="4" strokeLinecap="round" />
      <path d="M111 58C124 68 130 83 129 100" stroke="url(#roseGoldStable)" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 71C113 82 119 96 119 113" stroke="url(#roseGoldStable)" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 74C139 70 149 71 156 78" stroke="url(#roseGoldStable)" strokeWidth="3" strokeLinecap="round" />
      <path d="M157 86C166 93 170 104 169 117" stroke="url(#roseGoldStable)" strokeWidth="3" strokeLinecap="round" />
      <path d="M165 120C160 132 150 143 138 150" stroke="url(#roseGoldStable)" strokeWidth="3" strokeLinecap="round" />
      <path d="M134 151C126 155 116 157 108 155" stroke="url(#roseGoldStable)" strokeWidth="3" strokeLinecap="round" />
      <path d="M104 152C116 131 129 117 142 106" stroke="url(#roseGoldStable)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M143 106C149 101 151 95 149 89" stroke="url(#roseGoldStable)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="161" cy="157" r="8" fill="#ddb38f" opacity="0.95" />
      <path d="M161 141V173M145 157H177M149 145L173 169M173 145L149 169" stroke="#f3d8c0" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BrandLogo({ dark = false, horizontal = false }) {
  if (horizontal) {
    return (
      <div className={`brand-horizontal ${dark ? 'brand-dark' : ''}`}>
        <LogoMark className="brand-horizontal-mark" />
        <div>
          <div className="brand-title">VECTOR</div>
          <div className="brand-subtitle">LASER CLINIC</div>
          <div className="brand-tagline">TECNOLOGIA • PRECISÃO • BELEZA • CUIDADO</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`brand-inline ${dark ? 'brand-dark' : ''}`}>
      <LogoMark className="brand-inline-mark" />
      <div>
        <div className="brand-title">VECTOR</div>
        <div className="brand-subtitle">LASER CLINIC</div>
      </div>
    </div>
  )
}

function DeviceUltraformer() {
  return (
    <div className="device-box">
      <div className="device device-ultra">
        <div className="u-head" />
        <div className="u-screen" />
        <div className="u-neck left" />
        <div className="u-neck right" />
        <div className="u-body">
          <div className="u-center" />
          <div className="u-arm left" />
          <div className="u-arm right" />
          <div className="u-bottom" />
        </div>
        <div className="u-side left" />
        <div className="u-side right" />
        <div className="u-leg left" />
        <div className="u-leg right" />
        <div className="u-wheel left" />
        <div className="u-wheel right" />
      </div>
    </div>
  )
}

function DeviceLavieen() {
  return (
    <div className="device-box">
      <div className="device device-lavieen">
        <div className="l-arm" />
        <div className="l-head">
          <div className="l-head-screen" />
        </div>
        <div className="l-body" />
        <div className="l-screen-box">
          <div className="l-screen" />
        </div>
        <div className="l-hose left" />
        <div className="l-hose right" />
        <div className="l-leg left" />
        <div className="l-leg right" />
        <div className="l-wheel left" />
        <div className="l-wheel right" />
      </div>
    </div>
  )
}

function FeatureCard({ title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function EquipmentCard({ name, subtitle, bullets, visual }) {
  return (
    <article className="equipment-card">
      <div className="equipment-text">
        <h3>{name}</h3>
        <p className="equipment-subtitle">{subtitle}</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>
              <span>✓</span>
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="equipment-visual">{visual}</div>
    </article>
  )
}

export default function App() {
  if (window.location.pathname === '/lavieen') {
    return <LandingLavieen />
  }

  const trackWhatsAppConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18123496224/GYUxCMDwm6QcEKC2-sFD',
        value: 1.0,
        currency: 'BRL',
        transaction_id: '',
      })
    }
  }
  const whatsappNumber = '5511912457441'
  const whatsappMessage = encodeURIComponent(
    'Olá! Quero conhecer a locação dos equipamentos da Vector Laser Clinic.'
  )

  const features = [
    {
      title: 'Tecnologia premium',
      text: 'Equipamentos de alto padrão para clínicas que desejam elevar resultados e percepção de valor.',
    },
    {
      title: 'Experiência de marca',
      text: 'Visual sofisticado e posicionamento alinhado a clínicas que querem crescer com autoridade.',
    },
    {
      title: 'Suporte profissional',
      text: 'Locação com atendimento próximo, orientação comercial e presença premium para sua operação.',
    },
  ]

  const equipments = [
    {
      name: 'Ultraformer III',
      subtitle: 'Lifting sem cirurgia e redefinição do contorno facial',
      bullets: [
        'Estimula colágeno em camadas profundas',
        'Ajuda na flacidez facial e corporal',
        'Melhora definição de rosto, papada e contorno',
        'Tratamento valorizado por clínicas de alto padrão',
      ],
      visual: (
        <img
          src={ultraformerImg}
          alt="Ultraformer III"
          className="device-image"
        />
      ),
    },
    {
      name: 'Lavieen',
      subtitle: 'Pele renovada, uniforme e luminosa',
      bullets: [
        'Auxilia na melhora de manchas e textura',
        'Promove efeito glow e renovação da pele',
        'Estimula colágeno com recuperação mais confortável',
        'Excelente complemento para protocolos premium',
      ],
      visual: (
        <img
          src={lavieenImg}
          alt="Lavieen"
          className="device-image"
        />
      ),

    },
  ]

  const rentalSteps = [
    'Você escolhe o equipamento ideal para o perfil da sua clínica.',
    'Alinhamos o formato de locação conforme sua necessidade.',
    'Sua clínica agrega tecnologia, valor percebido e novos protocolos.',
    'Você foca em vender tratamentos e fidelizar clientes.',
  ]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="header-logo-image-wrap">
            <img src={logoTopo} alt="Vector Laser Clinic" className="header-logo-image" />
          </a>

          <nav className="site-nav">
            <a href="#equipamentos">Equipamentos</a>
            <a href="#locacao">Locação</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppConversion}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#25D366",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              boxShadow: "0 6px 18px rgba(37, 211, 102, 0.25)",
              transition: "0.3s ease",
              border: "1px solid rgba(255,255,255,0.15)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(37, 211, 102, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(37, 211, 102, 0.25)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.01 3C8.84 3 3 8.72 3 15.76c0 2.25.61 4.45 1.77 6.38L3.02 29l7.08-1.8A13.18 13.18 0 0 0 16.01 28C23.18 28 29 22.28 29 15.24 29 8.2 23.18 3 16.01 3Z"
                fill="white"
              />
              <path
                d="M16.01 5.17c5.93 0 10.75 4.52 10.75 10.07 0 5.55-4.82 10.57-10.75 10.57-1.82 0-3.6-.44-5.18-1.28l-.38-.2-4.2 1.07 1.04-4.02-.25-.4a10.07 10.07 0 0 1-1.6-5.22c0-5.84 4.74-10.59 10.57-10.59Zm6.15 14.86c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.17-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.17.22 2.3 3.51 5.58 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"
                fill="#25D366"
              />
            </svg>

            <span>(11) 91245-7441</span>
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Tecnologia • Precisão • Beleza • Cuidado</div>
            <h1>Locação premium de tecnologias que elevam sua clínica.</h1>
            <p>
              A Vector Laser Clinic conecta clínicas e profissionais às tecnologias mais desejadas do mercado
              estético, com posicionamento sofisticado, presença premium e foco em performance comercial.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-gold"
                onClick={trackWhatsAppConversion}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Falar com especialista
              </a>
              <a className="btn btn-outline" href="#equipamentos">
                Ver equipamentos
              </a>
            </div>

            <div className="stats-grid">
              <StatCard value="2" label="Tecnologias premium para elevar protocolos e faturamento." />
              <StatCard value="100%" label="Visual alinhado a clínicas que querem alto valor percebido." />
              <StatCard value="+" label="Apoio comercial e atendimento consultivo para sua operação." />
            </div>
          </div>

          <div className="hero-brand-card">
            <div className="hero-brand-grid">
              <div className="logo-clean-card">
                <div className="mini-eyebrow"></div>
                <div className="logo-stage">
                  <a href="#" className="header-logoC-image-wrap">
                    <img src={logoC} className="header-logoC-image" />
                  </a>
                </div>
              </div>

              <div className="brand-dark-card">

                <div className="brand-info-grid">
                  <div className="brand-info-box">
                    <div className="mini-eyebrow">Visual feminino</div>
                    <p>Traços delicados que passam cuidado, sofisticação e presença premium.</p>
                  </div>
                  <div className="brand-info-box">
                    <div className="mini-eyebrow">Tom rose gold</div>
                    <p>Paleta elegante para contratos, propostas, Instagram e apresentação comercial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container feature-grid">
          {features.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="equipment-section" id="equipamentos">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Equipamentos</div>
            <h2>Soluções escolhidas para clínicas que querem desempenho e valor percebido.</h2>
          </div>

          <div className="equipment-grid">
            {equipments.map((item) => (
              <EquipmentCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="rental-section" id="locacao">
        <div className="container rental-grid">
          <div>
            <div className="eyebrow">Locação para clínicas</div>
            <h2>Um processo elegante, profissional e pensado para facilitar sua operação.</h2>
            <p className="section-text">
              Nossa proposta vai além do equipamento. A Vector Laser Clinic entrega presença de marca premium,
              experiência comercial e estrutura visual alinhada ao padrão que o seu público espera.
            </p>

            <div className="steps-list">
              {rentalSteps.map((step, index) => (
                <div className="step-card" key={step}>
                  <div className="step-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-box">
            <div className="mini-eyebrow">Assinatura da marca</div>
            <div className="signature-box">
              <img
                src={logoHorizontal}
                alt="Vector Laser Clinic"
                className="signature-logo"
              />
            </div>
            <h3>Sua clínica merece presença premium.</h3>

            <div className="premium-points">
              <div>Atendimento consultivo</div>
              <div>Visual de alto padrão</div>
              <div>Mais valor percebido</div>
              <div>Apoio comercial e de posicionamento</div>
            </div>

            <a
              className="btn btn-gold"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppConversion}
            >
              Solicitar atendimento
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">WhatsApp</div>
            <h2>Vamos levar sua clínica para o próximo nível?</h2>
            <p>
              Fale com nossa equipe e descubra a melhor combinação de tecnologias, apresentação premium e
              proposta comercial para o seu negócio.
            </p>
          </div>

          <div className="cta-action">
            <a
              className="btn btn-dark"
              onClick={trackWhatsAppConversion}
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">Contato</div>
            <h2>Solicite uma proposta para sua clínica.</h2>
            <p className="section-text">
              Preencha os dados ao lado ou fale diretamente pelo WhatsApp para receber um atendimento
              personalizado.
            </p>

            <div className="contact-list">
              <div>📞 WhatsApp: (11) 91245-7441</div>
              <div>✉️ contato@vectorlaserclinic.com</div>
              <div>📍 Atendimento para clínicas e profissionais</div>
            </div>
          </div>

          <form className="contact-form">
            <label>
              <span>Nome</span>
              <input type="text" placeholder="Seu nome" />
            </label>

            <label>
              <span>Clínica</span>
              <input type="text" placeholder="Nome da clínica" />
            </label>

            <label>
              <span>Telefone</span>
              <input type="text" placeholder="(11) 91245-7441" />
            </label>

            <label>
              <span>Mensagem</span>
              <textarea rows="5" placeholder="Conte quais tecnologias você deseja oferecer na sua clínica." />
            </label>

            <a
              className="btn btn-gold btn-full"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Olá! Vim pelo site da Vector Laser Clinic e gostaria de solicitar uma proposta para minha clínica.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppConversion}
            >
              Enviar proposta
            </a>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Vector Laser Clinic CNPJ 66.535.551/0001-68 . Todos os direitos reservados.</p>
          <p className="footer-tag">Tecnologia • Precisão • Beleza • Cuidado</p>
        </div>
      </footer>
    </div>
  )
}