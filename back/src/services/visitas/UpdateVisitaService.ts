import prismaClient from "../../prisma";

interface Props{
    id: string;
    nome: string;
    data: string;
    descricao: string
    grupo: string

}

class UpdateVisitaService{
    async execute( {id, nome, descricao, data, grupo}:Props ){

        if (id == "" || nome == "" || descricao =="" || data == "" || grupo == "" ) {
            throw new Error("Preencha todos os campos! ");
            
        }

        const editarVisita = await prismaClient.visita.update({
            where:{id},
            data:{
               nome_visitante: nome,
               data_visita: data,
               descricao: descricao,
               grupo_id: grupo
            },
            select:{
                id: true,
                nome_visitante: true,
                data_visita: true,
                descricao: true,
                grupo_id: true
            }
        })

        return editarVisita





    }
}




export {UpdateVisitaService}