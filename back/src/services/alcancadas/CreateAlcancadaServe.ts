import prismaClient from "../../prisma";

interface Props{
    nome: string,
    descricao: string
    grupo: string
}

class CreateAlcancadaService{

    async execute( {nome, descricao, grupo}:Props ){

        console.log(nome)

       if(nome == "" || descricao == "" || grupo == "" ){
        throw new Error("Informe o nome do grupo");
        
       }


    

        const  pessoa = await prismaClient.pessoasAlcan.create({
            data:{
                nome:nome,
                descricao: descricao,
                grupo_id: grupo
            },
            select:{
                id: true,
                nome: true,
                descricao: true
            }
        })

        return pessoa;


    }

}

export {CreateAlcancadaService}


