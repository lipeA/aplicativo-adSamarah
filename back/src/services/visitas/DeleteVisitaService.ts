import prismaClient from "../../prisma";


interface Props{
    id: string;
}

class DeleteVisitaService{
    async execute( {id}:Props ){

        const DeleteVisita = await prismaClient.visita.delete({
            where:{
                id: id
            }
        })

        return DeleteVisita

    }
}

export {DeleteVisitaService}



