# Connecting — Presença Digital & Performance Territorial

> **Agência especializada em posicionamento de autoridade e conversão para negócios locais.**

![Connecting Preview](https://raw.githubusercontent.com/Gabriel-H-Alves/connecting/main/public/preview.png)

---

## 📌 Sobre o Projeto

A **Connecting** nasceu para resolver os três maiores gargalos que fazem pequenas e médias empresas perderem clientes todos os dias para concorrentes na mesma região:

1. **Invisibilidade no Google Maps:** Perfis desatualizados, sem palavras-chave estratégicas e fora do Top 3 do mapa local.
2. **Sites Lentos ou Inexistentes:** Páginas amadoras em construtores genéricos que demoram mais de 4 segundos para carregar no celular e não convertem visitantes em mensagens de WhatsApp.
3. **Imagens Amadoras:** Fotos escuras e sem produção que desvalorizam o ambiente e os produtos, reduzindo a confiança do consumidor exigente.

Com uma abordagem **Anti-Template**, a Connecting entrega infraestruturas digitais de alto nível com design sob medida, tecnologia de ponta e foco obsessivo em **taxa de conversão local**.

---

## 💎 Diretrizes de Design & Estética

A landing page foi desenvolvida sob o conceito de **Luxo Monocromático & Tensão Tipográfica**:

- **Paleta Estrita P&B:** Fundo preto profundo (`#09090B`), tipografia em branco puro (`#FFFFFF`) e acentos em escalas neutras de cinza (`#71717A`, `#27272A`).
- **Navegação Fluida (Sem Navbar):** Ausência intencional de menus de navegação tradicionais; a experiência é 100% guiada pelo scroll cinematográfico e pela descoberta progressiva.
- **Tipografia de Impacto:** Uso da fonte display **Clash Display** para títulos esculturais e **Plus Jakarta Sans** para leitura de alto contraste.
- **Microinterações e Física:** Elementos reativos à atração magnética do cursor, deformação elástica de tipos e inclinação tridimensional.

---

## ⚡ Tecnologias e Bibliotecas

A aplicação utiliza o estado da arte do ecossistema frontend moderno:

| Categoria | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Core** | [React 19](https://react.dev/) | Estrutura modular reativa |
| **Build Tool** | [Vite 8](https://vite.dev/) | Tooling ultrarrápido com Hot Module Replacement |
| **Styling** | [TailwindCSS v4](https://tailwindcss.com/) | Estilização utilitária de alta performance |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) | Curvas de easing cinematográficas (*Padrão Apple*) |
| **3D Interativo** | [@splinetool/react-spline](https://spline.design/) | Renderização interativa de esculturas 3D na GPU |
| **Componentes UI** | [React Bits](https://reactbits.dev/) | TextPressure, ScrollVelocity, TiltedCard, ShinyText |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones vetoriais monocromáticos |
| **Qualidade & Lint** | [Oxlint](https://oxc.rs/) | Linter ultrarrápido em Rust (Zero warnings) |

---

## 🎯 Componentes Principais

### 1. Splash Screen Sincronizada
Tela de abertura geométrica minimalista que exibe um anel giratório concêntrico e contador numérico (0 a 100%). Sincronizada com o evento `onLoad` do elemento 3D do Spline para evitar flashes ou renderizações incompletas.

### 2. Hero Section com Spline 3D & Tipografia Elástica
- **`TextPressure` (React Bits):** Logotipo gigante "CONNECTING" que calcula continuamente a distância do cursor e deforma dinamicamente o peso e a escala de cada caractere em tempo real.
- **`Hero3DObject`:** Escultura 3D interativa renderizada via Spline com máscara de fade radial suave integrada ao fundo `#09090B`.
- **Os 3 Pilares Misteriosos:** Tópicos técnicos semi-desfocados que revelam colchetes geométricos (*TrueFocus*), removem o blur e expandem detalhes ao passar o mouse com atração magnética (`Magnet`).

### 3. Scroll Velocity Marquee
Faixa de separação horizontal exibindo `"DOMÍNIO LOCAL • SITES PREMIUM • GOOGLE MAPS •"`, cuja velocidade de movimento acelera dinamicamente proporcional à velocidade de rolagem do usuário.

### 4. Bento Grid com TiltedCard 3D
Layout assimétrico apresentando os 4 eixos de atuação com cartões que reagem com inclinação tridimensional precisa e reflexo especular dinâmico (*glare*).

### 5. Comparativo Antes e Depois
Módulo interativo alternável entre presença no Google Meu Negócio e Performance de Website, demonstrando a transição de um negócio invisível para autoridade territorial.

### 6. Call to Action (CTA) & WhatsApp Flutuante
- Seção de conversão com texto em brilho metálico cromado (`ShinyText`) e narrativa em iluminação progressiva de palavras amarrada ao scroll (`AppleScrollRevealText`).
- Botão flutuante fixo no canto inferior direito (`bottom-6 right-6`, `z-90`) com animação contínua de ondas de radar e tooltip de contato direto.

---

## 📂 Arquitetura de Pastas

```text
connecting/
├── public/                     # Favicons e assets estáticos
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AppleScrollRevealText.jsx # Iluminação progressiva amarrada ao scroll
│   │   │   ├── CustomCursor.jsx          # Seguidor de cursor reativo no desktop
│   │   │   ├── Hero3DObject.jsx          # Container de cena interativa Spline 3D
│   │   │   ├── InteractivePillar.jsx     # Pilares misteriosos TrueFocus + Magnet
│   │   │   ├── Magnet.jsx                # Atração física elástica
│   │   │   ├── ParallaxWatermark.jsx     # Tipografia gigante em parallax no scroll
│   │   │   ├── ScrollReveal.jsx          # Easing cinematográfico Apple [0.16, 1, 0.3, 1]
│   │   │   ├── ScrollVelocity.jsx        # Marquee reativo à velocidade de rolagem
│   │   │   ├── ShinyText.jsx             # Brilho metálico cromado
│   │   │   ├── SpotlightBackground.jsx   # Feixe de luz duplo e ruído tátil
│   │   │   ├── TextPressure.jsx          # Tipografia elástica que deforma com mouse
│   │   │   └── TiltedCard.jsx            # Card 3D do React Bits com glare dinâmico
│   │   ├── BeforeAfterComparison.jsx     # Comparativo Antes & Depois com TiltedCard
│   │   ├── CtaSection.jsx                # Seção de conversão com ShinyText e WhatsApp
│   │   ├── FloatingWhatsApp.jsx          # Botão flutuante animado com pulso radar
│   │   ├── FooterMinimal.jsx             # Encerramento minimalista da página
│   │   ├── Hero.jsx                      # Hero section escultural e fluida
│   │   ├── Services.jsx                  # Bento Grid e capacidades com ScrollVelocity
│   │   └── SplashScreen.jsx              # Loading inicial geométrico sincronizado
│   ├── lib/
│   │   └── utils.js                      # Utilitário cn (clsx + tailwind-merge)
│   ├── App.jsx                           # Orquestrador da landing page
│   ├── index.css                         # Tailwind v4 e definições de keyframes
│   └── main.jsx                          # Ponto de entrada React
├── index.html                            # Metadados e fontes (Clash Display)
├── package.json                          # Dependências e scripts
└── vite.config.js                        # Configuração do Vite e Tailwind v4
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js:** versão 18 ou superior instalada
- **NPM:** versão 9 ou superior

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Gabriel-H-Alves/connecting.git
   cd connecting
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse **`http://localhost:5173/`** no seu navegador.

4. **Para verificar linter e tipagens:**
   ```bash
   npm run lint
   ```

5. **Para gerar a build de produção otimizada:**
   ```bash
   npm run build
   ```

---

## 📄 Licença

Este projeto é desenvolvido para a **Connecting**. Todos os direitos reservados.
