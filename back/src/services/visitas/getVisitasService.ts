import prismaClient from "../../prisma";

interface Props{
   id: string

}



class getVisitasService{
    async execute( {id}:Props ){
        if (!id) {
            throw new Error("Informe o id da visita!");
            
        }

        const buscarVisita = await prismaClient.visita.findFirst({
            where:{id},
            select:{
                nome_visitante: true,
                data_visita: true,
                descricao:true
            }

        })

        return buscarVisita;



    }
}

class getTodasVisitasService{

    async execute( ){

        const buscarTodasVisita = await prismaClient.visita.findMany({
            select:{
                id: true,
                nome_visitante: true,
                data_visita: true,
                descricao: true
            }
        })

        return buscarTodasVisita;


    }

}





export {getTodasVisitasService, getVisitasService}

