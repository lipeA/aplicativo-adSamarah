import prismaClient from "../../prisma";

interface Props{
    nome: string,
    descricao: string
}

class CreateGruposService{

    async execute( {nome, descricao}:Props ){

        console.log(nome)

       if(!nome){
        throw new Error("Informe o nome do grupo");
        
       }


       
        const grupoExiste = await prismaClient.grupo.findFirst({
            where:{
                nome_grupo:nome
            }
        })
        

        if (grupoExiste) {
            throw new Error("grupo já cadastrado!");

            
        }

        console.log(grupoExiste)

        const  grupo = await prismaClient.grupo.create({
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

        return grupo;


    }

}

export {CreateGruposService}