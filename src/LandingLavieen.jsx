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
            className="btn btn-dark"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppConversion}
          >
            WhatsApp
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

        <img
          src={lavieenImg}
          alt="Promoção Lavieen"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '14px',
            margin: '0 auto',
            display: 'block',
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