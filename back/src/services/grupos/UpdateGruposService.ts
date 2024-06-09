import prismaClient from "../../prisma";

interface Props{
    id: string;
    nome: string;
    descricao: string

}

class UpdateGruposService{
    async execute( {id, nome, descricao}:Props ){

        if (id == "" || nome == "" || descricao =="") {
            throw new Error("Preencha todos os campos! ");
            
        }

        const updateGrupo = await prismaClient.grupo.update({
            where:{id},
            data:{
                nome_grupo:nome,
                descricao: descricao
            },
            select:{
                id: true,
                nome_grupo: true,
                descricao: true
            }
        })

        return updateGrupo





    }
}




export {UpdateGruposService}