
import prismaClient from "../../prisma";


interface Props{
    nome: string;
    password: string
}

class LoginUserService{

    async execute( {nome, password}:Props ){

       if (nome =="" || password =="") {
        throw new Error("Preencha todos os campos!");
        
       }

       const nomeErrado = await prismaClient.user.findFirst({
        where:{
            nome:nome
        }
       })

       if(nomeErrado){
        throw new Error("Usuario/senha não existente!");
        
       }

       const senhaErrado = await prismaClient.user.findFirst({
        where:{
            password:password
        }
       })




    }




}


export { LoginUserService}