const data = {
  title: 'Bruna G. de Paula - Desenvolvedora de Software',
  name: 'Bruna G. Paula',
  profession: 'Desenvolvedora de Software',
  description:
    'Compartilhar, renovar e agregar conhecimentos, desenvolvimento de novas tecnologias voltadas à iniciativas de impacto social e cultural. Sociológa de formação e entusiasta de iniciativas que visam incrementar a equidade entre gêneros e inclusão de mulheres em TI, participei de formações pela Programaria, PyLadies e Laboratoria',
  experience: [
    {
      company: 'Gauge',
      office: 'Analista Adobe AEM | Front-end',
      description:
        'Desenvolvimento em front-end voltado a criação, manutenção e melhoria de componentes em formato CMS pela suíte Adobe Experience Manager (AEM) 6.5, HTL, HTML, Less, JavaScript e React JS.',
      firstHighlight: 'Adobe AEM 6.5',
      scndHighlight: 'JavaScript',
      thirdHighlight: 'React',
    },
    {
      company: 'everis',
      office: 'Solutions Assistant | Front-end',
      description:
        'Desenvolvimento em front-end voltado a criação, manutenção e melhoria de componentes em formato CMS pela suíte Adobe Experience Manager (AEM) 6.4, utilizando HTL, HTML, SCSS, JavaScript, com foco em acessibilidade e normas WCAG.',
    },
  ],

  projects: [
    {
      name: 'E-Commerce FASHIONISTA',
      description:
        'E-commerce de moda, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.',
      repository: 'https://github.com/brubriele/aceleracao-react',
      stack1: 'fab fa-react',
      stack2: 'fab fa-js-square',
      stack3: 'fab fa-sass',
      fade: 'fade-right',
    },
    {
      name: 'Instagram Réplica',
      description:
        'Desenvolvimento uma versão mobile first do Instagram utilizando apenas HTML5 e CSS3.',
      repository: 'https://brubriele.github.io/react-women-chal-2/public/',
      stack1: 'fab fa-html5',
      stack2: 'fab fa-css3',
      stack3: 'fab fa-sass',
      fade: 'fade-left',
    },
    {
      name: 'Conversor de Escalas Musicais',
      description:
        'Biblioteca de transposição de escalas Maior, Menor, Pentatônica, Pentatônica Maior, Menor Melódica, Menor Harmônica, Menor de Blues em diferentes tonalidades.',
      repository: 'https://github.com/brubriele/lib-scale-chord-convert',
      stack1: 'fab fa-npm',
      stack2: 'fab fa-js-square',
      fade: 'fade-right',
    },

    {
      name: 'Rede de Apoio - RAH',
      description:
        'Aplicativo Web responsivo da Rede de Apoio nas e das Periferias (RAH), uma iniciativa dos movimentos negros e periféricos do munícipio de São Paulo. ',
      repository: 'https://github.com/brubriele/GT-WEB-RAH',
      stack1: 'fab fa-react',
      stack2: 'fab fa-js-square',
      stack3: 'fab fa-sass',
      fade: 'fade-left',
    },
  ],
  education: [
    {
      institution: 'Universidade Federal de São Paulo/EFLCH',
      description: 'Ciências Sociais',
    },
    {
      institution: 'Laboratoria',
      description: 'Bootcamp Desenvolvimento Front-end UX/UI',
    },
  ],
  skills: ['frontend', 'acessibilidade web', 'cms'],
};

module.exports = data;
