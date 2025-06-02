import UserModel from "../../../Models/UserModel.js";
import DocumentoModel from "../../../Models/DocumentoModel.js";

//POST /api/documentos/upload
//multiform data
//express file-upload
export default async (request, response) => {

    const arquivo = request.files.image;
    const idUser = request.user.id;

    /** CODAR AQUI */

    return response
        .json({
            mensagem: 'Imagem enviada com sucesso!',
        });


}