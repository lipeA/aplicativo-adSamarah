import prismaClient from "../../prisma";
import { decodeBase64, hash } from 'bcryptjs'

interface Props{
    nome: string;
    password: string;
    grupo_id: string;
}


class CreateUserService{

    async execute( {nome, password, grupo_id}: Props ){

        console.log(nome, password, grupo_id);

        // vericação se todos os dados veio
        if (nome == "" || password == "") {
            throw new Error("Preencha todos os campos!")
        }

        const userExiste = await prismaClient.user.findFirst({
            where:{
                nome: nome
            }
        })

        if (userExiste) {
            throw new Error("Usuario já existe!")
        }

        const passwordHash = await hash(password, 8)

        const user = prismaClient.user.create({
            data:{
                nome: nome,
                password: passwordHash,
                grupo_id: grupo_id
            },
            select:{
                id: true,
                nome: true,
                grupo_id: true
            }
        })

        return user;

    }

}



export { CreateUserService}