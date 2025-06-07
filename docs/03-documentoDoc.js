export default {
    /** JSON aqui */
}

/**
 * @swagger
 * /api/documentos/upload:
 *   post:
 *     summary: Realiza o upload de um documento PDF.
 *     tags:
 *       - Documentos
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         required: true
 *         description: Arquivo PDF a ser enviado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Documento enviado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 documento:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     caminho:
 *                       type: string
 *                     id_user:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       400:
 *         description: Requisição inválida (ex: sem arquivo ou não PDF).
 *       500:
 *         description: Erro interno no servidor.
 */
