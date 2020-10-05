const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'BrunaGPaula',
    navItems: ['Perfil', 'Carreira', 'Projetos'],
    linkItems: [
      '/curriculo#porftolio',
      '/curriculo#porftolio',
      '/curriculo#porftolio',
    ],
    animationItems: ['Perfil', 'Carreira', 'Projetos'],
    version: '0.0.0',
  });
});

// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = new JSDOM('').window;
// global.document = document;
// var $ = require('jquery')(window);

// $(document).ready(function () {
//   let teste = $('.box-');
//   console.log(teste);
// });

module.exports = router;
