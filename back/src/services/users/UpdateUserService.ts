import prismaClient from "../../prisma";
import {hash, decodeBase64} from 'bcryptjs'

interface Props{
    id: string;
    nome: string;
    password: string;
    grupo_id: string;

}

class UpdateUserService{

    async execute( {nome, password, grupo_id, id} :Props ) {

        if (nome == "" || password == "" || grupo_id == "" || id == "") {
            throw new Error("Preencha todos os campos");
            
        }

        const senhaCript = await hash(password, 8);

       const user = await prismaClient.user.update({
        where:{id},
        data:{
            nome:nome,
            password: senhaCript,
            grupo_id: grupo_id
        },
        select:{
            id: true,
            nome: true,
            grupo_id: true
        }
       })

       return user;

    }


}


export { UpdateUserService }

