const data = {
  title: 'Bruna G. de Paula - Desenvolvedora de Software',
  name: 'Bruna G. Paula',
  profession: 'Desenvolvedora de Software',
  description:
    'Gosto de compartilhar, renovar e agregar conhecimentos, com muito interesse no desenvolvimento de novas tecnologias voltadas à iniciativas de impacto social e cultural. Sociológa de formação e entusiasta de iniciativas que visam incrementar a equidade entre gêneros e inclusão de mulheres em TI, sou formada pelos bootcamps Programaria, PyLadies e Laboratoria',
  experience: [
    {
      company: 'Compasso UOL',
      office: 'Analista Adobe AEM | Front-end',
      period: 'Remoto | Dez 2020 – atual',
      description:
        'Desenvolvimento voltado a criação, manutenção e melhoria de componentes em formato CMS pela suíte Adobe Experience Manager (AEM) 6.5 com HTL Expression Language, HTML, SCSS, Javascript, Jquery e Vue.js',
      firstHighlight: 'Adobe AEM 6.5',
      scndHighlight: 'JavaScript/jQuery',
      thirdHighlight: 'Vue.js',
    },
    {
      company: 'Gauge',
      office: 'Analista Adobe AEM | Front-end',
      period: 'Remoto | Jul 2020 – Dez 2020',
      description:
        'Atuação em projetos com foco em desenvolvimento front-end voltado a criação, manutenção e melhoria de componentes em formato CMS pela suíte Adobe Experience Manager (AEM) 6.5, HTL Expression Language, Less, JavaScript e React JS.',
      firstHighlight: 'Adobe AEM 6.5',
      scndHighlight: 'JavaScript/jQuery',
      thirdHighlight: 'React',
    },
    {
      company: 'everis',
      office: 'Solutions Assistant | Front-end',
      period: 'São Paulo | Ago 2019 – Ago 2020',
      description:
        'Desenvolvimento em front-end voltado a construção e manutenção de componentes exclusivamente para os portais web Itaú em formato CMS a partir da suíte Adobe Experience Manager (AEM), versão 6.4, utilizando HTL, HTML, SCSS, JavaScript, com foco em acessibilidade e normas WCAG.',
      firstHighlight: 'Adobe AEM 6.4',
      scndHighlight: 'JavaScript/jQuery',
      thirdHighlight: 'Web Accessibility',
    },
    {
      company: 'Instituto de Pesquisas Datafolha ',
      office: 'Checagem de dados',
      period: 'São Paulo | Nov 2016 – Jan 2019',
      description:
        'Verificação de questionários de opinião e roteiros de pesquisa, coleta e codificação de informações em amostras, tabulação de dados, desenvolvimento de planilhas estruturadas, formulários e rotinas em MS Office excel VBA e Virtual Fox Pro. Apuração e dechecagem de campo através de escuta e vídeo.',
      firstHighlight: 'Excel VBA',
      scndHighlight: 'Visual FoxPro',
      thirdHighlight: 'data-centric procedural programming',
    },
  ],

  education: [
    {
      institution: 'Universidade Federal de São Paulo/EFLCH',
      description: 'Ciências Sociais',
      period: 'Garulhos, SP | 2009 - 2015',
    },
    {
      institution: 'Laboratoria',
      description: 'Bootcamp Desenvolvimento Front-end UX/UI',
      period: 'São Paulo, SP | Jan 2019 - Jul 2019',
    },
  ],

  extension: [
    {
      institution: 'PyLadies',
      title: 'Iniciação à lógica de programação com Python',
      description:
        'Oficina voltada à prática de programação usando o Python, apresentado conceitos básicos de forma bastante intuitiva e simples para o primeiro contato com a linguagem.',
      shortNameExtension: 'PyLadies',
      id: 'one',
    },
    {
      institution: 'Programaria',
      title: 'Introdução ao Desenvolvimento Web',
      description:
        'Bootcamp de 4 semanas e voltado aos conceitos básicos de desenvolvimento web: HTML, CSS, JavaScript e Lógica de Programação.',
      shortNameExtension: 'Programaria',
      id: 'two',
    },
    {
      institution: 'Codenation',
      title: 'AceleraDev React Women',
      description:
        'Bootcamp com carga horária de 80 horas, voltado às tecnologias React, JS, Redux, Router, Componentização, Lifecycle, testes e outras tecnologias de ponta com foco em Frontend',
      shortNameExtension: 'Codenation',
      id: 'three',
    },
    {
      institution:
        'Instituto de Matemática e Estatística - Universidade de São Paulo (IME-USP)',
      title: 'Análise Exploratória de Dados e Métodos Estatísticos',
      description:
        'Curso voltado aos principais tópicos de Estatística: a Teoria de Probabilidades, variáveis aleatórias, distribuições de probabilidades, métodos de estimação e procedimentos inferenciais',
      shortNameExtension: 'IME/USP',

      id: 'four',
    },
    {
      institution: 'Impacta Tecnologia',
      title: 'SQL 2016',
      description:
        'Treinamento voltado à criação, gerenciamento de sistemas de banco de dados em SQL Server e estruturas básicas de consulta e manipulação de dados.',
      shortNameExtension: 'Impacta',

      id: 'five',
    },
    {
      institution: 'Senac São Paulo',
      title: 'Excel com VBA',
      description:
        'Curso voltado ao desenvolvimento de macros, formulários e funções personalizadas utilizando recursos do Excel e do VBA, otimização do processamento, armazenamento e apresentação de informações em planilhas do Excel',
      shortNameExtension: 'Senac',

      id: 'six',
    },
  ],

  projects: [
    {
      name: 'E-Commerce FASHIONISTA',
      description:
        'E-commerce de moda, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.',
      repository: 'https://github.com/brubriele/aceleracao-react',
      stack1: 'fab fa-react',
      stackAria1: 'React',

      stack2: 'fab fa-js-square',
      stackAria2: 'JavaScript',

      stack3: 'fab fa-sass',
      stackAria3: 'Sass',
      fade: 'fade-right',
    },
    {
      name: 'Instagram Réplica',
      description:
        'Desenvolvimento uma versão mobile first do Instagram utilizando apenas HTML5 e CSS3.',
      repository: 'https://brubriele.github.io/react-women-chal-2/public/',
      stack1: 'fab fa-html5',
      stackAria1: 'HTML',

      stack2: 'fab fa-css3',
      stackAria2: 'CSS3',

      stack3: 'fab fa-sass',
      stackAria3: 'Sass',
      fade: 'fade-left',
    },
    {
      name: 'Conversor de Escalas Musicais',
      description:
        'Biblioteca de transposição de escalas Maior, Menor, Pentatônica, Pentatônica Maior, Menor Melódica, Menor Harmônica, Menor de Blues em diferentes tonalidades.',
      repository: 'https://github.com/brubriele/lib-scale-chord-convert',
      stack1: 'fab fa-npm',
      stackAria1: 'NPM',

      stack2: 'fab fa-js-square',
      stackAria2: 'JavaScript',

      fade: 'fade-right',
    },

    {
      name: 'Rede de Apoio - RAH',
      description:
        'Aplicativo Web responsivo da Rede de Apoio nas e das Periferias (RAH), uma iniciativa dos movimentos negros e periféricos do munícipio de São Paulo. ',
      repository: 'https://github.com/brubriele/GT-WEB-RAH',
      stack1: 'fab fa-react',
      stackAria1: 'React',

      stack2: 'fab fa-js-square',
      stackAria2: 'JavaScript',

      stack3: 'fab fa-sass',
      stackAria3: 'Sass',

      fade: 'fade-left',
    },
  ],
  skills: ['frontend', 'acessibilidade web', 'cms'],
};

module.exports = data;
