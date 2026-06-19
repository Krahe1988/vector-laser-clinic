import logoTopo from './assets/logo-topo.png'
import arteLavieen from './assets/lavieen-fullface-400.png'
import './LandingLavieenConsumidor.css'


export default function LandingLavieenConsumidor() {
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
    'https://wa.me/5511912457441?text=Olá! Quero agendar meu Lavieen, e gostaria de saber mais detalhes sobre o procedimento.'

  return (
    <div className="lavieen-consumer-page">
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
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#faq">Dúvidas</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppConversion}
            className="lavieen-consumer-whatsapp"
          >
            Agendar agora
          </a>
        </div>
      </header>

      <main>
        <section className="lavieen-consumer-hero">
          <div className="lavieen-consumer-hero-text">
            <span className="lavieen-consumer-tag">
              Atendimento em Cotia,Vargem Grande e Região          </span>

            <h1>
              Lavieen para uma pele mais luminosa e com glow saudável.
            </h1>

            <p>
              Um tratamento tecnológico e sofisticado para quem deseja melhorar
              a qualidade da pele, suavizar manchas superficiais, refinar a
              textura, melhorar os poros e conquistar uma aparência mais
              rejuvenescida.
            </p>

            <div className="lavieen-consumer-price-card">
              <div>
                <small>Rosto completo / Full Face</small>
                <strong>R$ 400,00</strong>
              </div>
              <span>Condição especial para Cotia, Vargem Grande e Região</span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppConversion}
              className="lavieen-consumer-main-cta"
            >
              Quero agendar pelo WhatsApp
            </a>

            <p className="lavieen-consumer-note">
              Avaliação individual recomendada antes do procedimento.
            </p>
          </div>

          <div className="lavieen-consumer-hero-image">
            <img
              src={arteLavieen}
              alt="Lavieen Full Face em Cotia, Vargem Grande e Região"
            />
          </div>
        </section>

        <section className="lavieen-consumer-intro">
          <span>Por que escolher o Lavieen?</span>
          <h2>
            Tecnologia, beleza e cuidado para realçar a sua melhor versão.
          </h2>
          <p>
            O Lavieen é uma tecnologia muito procurada por quem deseja cuidar da
            pele com elegância, praticidade e naturalidade. Ele atua promovendo
            melhora global da qualidade da pele, deixando o rosto com aparência
            mais saudável, iluminada e uniforme.
          </p>
        </section>

        <section id="beneficios" className="lavieen-consumer-benefits">
          <div className="lavieen-consumer-section-title">
            <span>Benefícios</span>
            <h2>O que o Lavieen pode auxiliar na sua pele?</h2>
          </div>

          <div className="lavieen-consumer-grid">
            <div>
              <strong>Glow saudável</strong>
              <p>
                Auxilia no viço da pele, deixando o rosto com aspecto mais
                iluminado e descansado.
              </p>
            </div>

            <div>
              <strong>Textura mais refinada</strong>
              <p>
                Contribui para uma pele com toque mais uniforme e aparência mais
                lisa.
              </p>
            </div>

            <div>
              <strong>Poros suavizados</strong>
              <p>
                Ajuda na melhora da aparência dos poros dilatados e da qualidade
                geral da pele.
              </p>
            </div>

            <div>
              <strong>Manchas superficiais</strong>
              <p>
                Pode auxiliar na uniformização do tom da pele e no cuidado com
                manchas superficiais.
              </p>
            </div>

            <div>
              <strong>Rejuvenescimento</strong>
              <p>
                Estimula uma aparência mais jovem, natural e sofisticada, sem
                exageros.
              </p>
            </div>

            <div>
              <strong>Recuperação simples</strong>
              <p>
                Procedimento prático, com retorno mais rápido à rotina em muitos
                casos.
              </p>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="lavieen-consumer-how">
          <div className="lavieen-consumer-how-card">
            <span>Como funciona</span>
            <h2>Um cuidado tecnológico para a pele do rosto completo.</h2>
            <p>
              O Lavieen utiliza tecnologia laser para promover uma renovação
              controlada da pele. O objetivo é melhorar o aspecto da textura, do
              viço, dos poros e da uniformidade do rosto, respeitando a
              individualidade de cada pele.
            </p>

            <div className="lavieen-consumer-steps">
              <div>
                <small>01</small>
                <strong>Avaliação</strong>
                <p>
                  Entendemos sua pele, suas queixas e seus objetivos antes do
                  procedimento.
                </p>
              </div>

              <div>
                <small>02</small>
                <strong>Procedimento</strong>
                <p>
                  Aplicação da tecnologia Lavieen no rosto completo, com cuidado
                  e segurança.
                </p>
              </div>

              <div>
                <small>03</small>
                <strong>Pós-cuidado</strong>
                <p>
                  Orientações para proteger a pele e potencializar o resultado
                  do tratamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="lavieen-consumer-curiosities">
          <div>
            <span>Curiosidades</span>
            <h2>Por que o Lavieen ficou tão desejado?</h2>
          </div>

          <div className="lavieen-consumer-curiosity-list">
            <p>
              <strong>01.</strong> É conhecido pelo efeito de pele mais iluminada
              e com aparência renovada.
            </p>

            <p>
              <strong>02.</strong> É muito procurado por quem deseja melhorar
              manchas superficiais, poros e textura.
            </p>

            <p>
              <strong>03.</strong> Combina tecnologia com naturalidade, sem
              transformar a expressão do rosto.
            </p>

            <p>
              <strong>04.</strong> Pode ser uma excelente opção para eventos,
              fotos, viagens e momentos especiais, sempre respeitando a avaliação
              profissional.
            </p>
          </div>
        </section>

        <section className="lavieen-consumer-offer">
          <div>
            <span>Condição especial</span>
            <h2>Lavieen Full Face</h2>
            <p>
              Rosto completo por <strong>R$ 400,00</strong> com atendimento em
Cotia, Vargem Grande, São Roque e região.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppConversion}
          >
            Agendar horário
          </a>
        </section>

        <section id="faq" className="lavieen-consumer-faq">
          <div className="lavieen-consumer-section-title">
            <span>Perguntas frequentes</span>
            <h2>Dúvidas comuns sobre o Lavieen</h2>
          </div>

          <div className="lavieen-consumer-faq-list">
            <details>
              <summary>O Lavieen é indicado para quais objetivos?</summary>
              <p>
                Ele é muito procurado para melhora da textura da pele, poros,
                viço, manchas superficiais, uniformidade e aparência mais
                rejuvenescida.
              </p>
            </details>

            <details>
              <summary>O procedimento é feito no rosto todo?</summary>
              <p>
                Sim. Nesta condição, o atendimento é Lavieen Full Face, ou seja,
                rosto completo.
              </p>
            </details>

            <details>
              <summary>O Lavieen clareia manchas?</summary>
              <p>
                O Lavieen pode auxiliar na melhora da aparência de manchas
                superficiais e na uniformização do tom da pele. Cada caso precisa
                ser avaliado individualmente.
              </p>
            </details>

            <details>
              <summary>Tem recuperação?</summary>
              <p>
                Em muitos casos, a recuperação é simples e o retorno à rotina é
                rápido. Podem ocorrer vermelhidão e sensibilidade temporária,
                dependendo da pele.
              </p>
            </details>

            <details>
              <summary>Quantas sessões são necessárias?</summary>
              <p>
                A quantidade de sessões depende do objetivo, da pele e da
                avaliação profissional. Algumas pessoas já percebem melhora no
                aspecto da pele nas primeiras sessões.
              </p>
            </details>

            <details>
              <summary>Onde é o atendimento?</summary>
              <p>
                O atendimento é realizado em Cotia, Vargem Grande, São Roque e região,
                com agendamento prévio pelo WhatsApp.
              </p>
            </details>
          </div>
        </section>

        <section className="lavieen-consumer-final">
          <h2>Sua pele merece um cuidado premium.</h2>
          <p>
            Agende seu Lavieen Full Face e descubra uma forma sofisticada de
            cuidar da beleza, da autoestima e da qualidade da sua pele.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppConversion}
          >
            Falar no WhatsApp
          </a>
        </section>
      </main>
    </div>
  )
}