const path = require('path');

module.exports = (req, res, next) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }

  const ext = path.extname(file.originalname).toLowerCase();

  if (ext !== '.pdf') {
    return res.status(400).json({ error: 'Apenas arquivos PDF são permitidos.' });
  }

  next();
};
