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
    version: '0.0.0',
  });
});

module.exports = router;
