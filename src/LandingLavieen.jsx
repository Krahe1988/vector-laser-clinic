import logoTopo from './assets/logo-topo.png'
import lavieenImg from './assets/lavieenpromo.png'
import ultraPromo from './assets/ultrapromo.png'

export default function LandingLavieen() {
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

  const whatsappLink =
    'https://wa.me/5511912457441?text=Olá, quero saber mais sobre a locação dos equipamentos'

  return (
    <div style={{ fontFamily: 'Arial', background: '#f7f3ef' }}>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="header-logo-image-wrap">
            <img
              src={logoTopo}
              alt="Vector Laser Clinic"
              className="header-logo-image"
            />
          </a>

          <nav className="site-nav">
            <a href="/#equipamentos">Equipamentos</a>
            <a href="/#locacao">Locação</a>
            <a href="/#contato">Contato</a>
          </nav>

          <a
            href={whatsappLink}
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
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(37, 211, 102, 0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(37, 211, 102, 0.25)"
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

      <section style={{ textAlign: 'center', padding: '28px 20px' }}>
        <img
          src={ultraPromo}
          alt="Promoção Ultraformer"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '14px',
            marginBottom: '22px',
          }}
        />



        <h1 style={{ marginTop: '26px', fontSize: '30px' }}>
          Locação de Lavieen e Ultraformer para Clínicas
        </h1>

        <p style={{ maxWidth: '680px', margin: '12px auto', color: '#555', lineHeight: 1.7 }}>
          Tecnologia premium para aumentar o faturamento da sua clínica.
          Atendimento especializado, suporte completo e equipamentos de alto padrão.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsAppConversion}
          style={{
            display: 'inline-block',
            marginTop: '25px',
            background: '#c49a6c',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          FALAR COM ESPECIALISTA NO WHATSAPP
        </a>
      </section>

      <section style={{ textAlign: 'center', padding: '20px', color: '#a67c52' }}>
        ⚠️ Oferta por tempo limitado para clínicas parceiras
      </section>
    </div>
  )
}