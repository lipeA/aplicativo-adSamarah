import prismaClient from "../../prisma";

interface Props{
    id: string;
}

class DeleteAlcancadaService{
    async execute( {id}:Props ){

        const pessoa = await prismaClient.pessoasAlcan.delete({
            where:{
                id:id
            },
            select:{
                nome:true,
                descricao:true
            }
        })

        return pessoa

    }
}

export {DeleteAlcancadaService}
