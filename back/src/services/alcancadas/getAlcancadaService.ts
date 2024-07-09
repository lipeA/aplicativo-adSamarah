import prismaClient from "../../prisma";

interface Props{
    id: string
}

class GetAlcancadasService{
    async execute( {id}:Props ) {

        if (!id) {
            throw new Error("Informe o grupo a ser pesquisado.");
        }

        const pessoas = await prismaClient.pessoasAlcan.findFirst({ 
            where:{
                id: id
            },
            select:{
                id: true,
                nome: true,
                descricao: true
            }
         })

         return pessoas

    }

    
}


class GetTodosAlcancadasService{

    async execute(){
        const pessoas = prismaClient.pessoasAlcan.findMany({
            select:{
                id: true,
                nome: true,
                descricao: true
            }
        })

        return pessoas
    }

}








export {GetAlcancadasService, GetTodosAlcancadasService}