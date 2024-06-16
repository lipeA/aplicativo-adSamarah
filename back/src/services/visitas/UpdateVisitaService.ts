import prismaClient from "../../prisma";

interface Props{
    id: string;
    nome: string,
    descricao: string;
    data: string;
    grupo: string
}


class UpdateVisitaService{
    async execute( {id, nome, descricao, data, grupo }:Props ){

        if ( id == "" || nome == "" || descricao == "" || data == "" || grupo =="" ) {
               
            throw new Error(" Preencha todos os campos!");
                
        }

        











    }
}



