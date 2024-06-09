import prismaClient from "../../prisma";

interface Props{
    id: string
}

class GetGruposService{
    async execute( {id}:Props ) {

        if (!id) {
            throw new Error("Informe o grupo a ser pesquisado.");
        }

        const grupo = await prismaClient.grupo.findFirst({ 
            where:{
                id: id
            },
            select:{
                id: true,
                nome_grupo: true,
                descricao: true
            }
         })

         return grupo

    }

    
}


class GetTodosGruposService{

    async execute(){
        const grupos = prismaClient.grupo.findMany({
            select:{
                id: true,
                nome_grupo: true,
                descricao: true
            }
        })

        return grupos
    }

}








export {GetGruposService, GetTodosGruposService}