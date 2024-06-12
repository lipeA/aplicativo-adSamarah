
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface Props {
    nome: string;
    password: string
}

class LoginUserService {

    async execute({ nome, password }: Props) {

        if (nome == "" || password == "") {
            throw new Error("Preencha todos os campos!");

        }

        // validando o usuario

        const usuarioExistente = await prismaClient.user.findFirst({
            where: {
                nome: nome
            }
        })

        if (!usuarioExistente) {
            throw new Error("Usuario/senha não existente!");

        }


        // validando a senha

        const senhaCorreta = await compare(password, usuarioExistente.password)

        if (!senhaCorreta) {
            throw new Error("Usuario/senha não existente!");

        }

        // gerar o tokken

        const tokken = sign(
            {nome: usuarioExistente.nome},
             process.env.JWT_secret
            
            )












    }

}


export { LoginUserService }