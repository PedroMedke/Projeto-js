const fs = require('fs');
const path = require('path');
const { Documento } = require('../../../Model');

const UploadDocumentoController = async (req, res) => {
  try {
    const user = req.user; // vindo do JwtAuthMiddleware
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Arquivo não enviado.' });
    }

    const storagePath = path.join(__dirname, '../../../../storage/documents');
    if (!fs.existsSync(storagePath)) {
      fs.mkdirSync(storagePath, { recursive: true });
    }

    const filePath = path.join(storagePath, file.originalname);

    // Salva o arquivo no sistema de arquivos
    fs.writeFileSync(filePath, file.buffer);

    // Cria o registro no banco de dados
    const documento = await Documento.create({
      caminho: file.originalname,
      id_user: user.id,
    });

    return res.status(201).json({ message: 'Upload realizado com sucesso.', documento });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro no upload do documento.' });
  }
};

module.exports = UploadDocumentoController;
