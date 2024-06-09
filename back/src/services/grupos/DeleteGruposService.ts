import prismaClient from "../../prisma";

interface Props{
    id: string;
}

class DeleteGruposService{
    async execute( {id}:Props ){

        const DeleteGrupo = await prismaClient.grupo.delete({
            where:{
                id
            }
        })

        return DeleteGrupo

    }
}

export {DeleteGruposService}



