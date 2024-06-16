import prismaClient from "../../prisma";

interface Props{
    nome: string;
    data: string;
    descricao: string;
    grupo: string
}

class CreateVisitaService{
    async execute( {nome, data, descricao, grupo}:Props ){

        if (nome == "" || data == "" || descricao == "" || grupo == "" ) {
            throw new Error("Preencha todos os campos!");
            
        }

        const visitaExiste = await prismaClient.visita.findFirst({
            where: {data_visita: data, nome_visitante:nome}
        })

        if (visitaExiste) {
            throw new Error("Já tem uma visita marcada!");
            
        }


        const visita = await prismaClient.visita.create({
            data:{
                nome_visitante: nome,
                data_visita: data,
                descricao: descricao,
                grupo_id: grupo
            },
            select:{
                nome_visitante: true,
                data_visita: true,
                descricao: true,
                grupo_id: true
            }
        })


        return visita

    }
}


export{CreateVisitaService}


